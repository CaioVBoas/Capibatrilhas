import { Request, Response, NextFunction } from 'express';
import { CreateWalletTransaction, WalletTransaction } from '../DTOs';
import WalletTransactionRepository from '../repositories/walletTransactionRepository';

class WalletTransactionController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const transactionData = CreateWalletTransaction.parse(req.body);

      const transaction = await WalletTransactionRepository.create({
        amount: transactionData.amount,
        description: transactionData.description,
        transactionDate: transactionData.transactionDate,
        user: {
          connect: { id: transactionData.userId },
        },
      });

      res.locals = {
        status: 201,
        data: transaction,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const transactionId = Number(req.params.id);

      const transaction = await WalletTransactionRepository.findById(
        transactionId,
      );

      if (!transaction) {
        return next({
          status: 404,
          message: 'Transação não encontrada',
        });
      }

      res.locals = {
        status: 200,
        data: transaction,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async getByUserId(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = Number(req.params.id);
      const transactions = await WalletTransactionRepository.findByUserId(
        userId,
      );

      res.locals = {
        status: 200,
        data: transactions,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const transactionId = Number(req.params.id);
      const transactionData = WalletTransaction.parse(req.body);

      const transaction = await WalletTransactionRepository.update(
        transactionId,
        transactionData,
      );

      res.locals = {
        status: 200,
        data: transaction,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const transactionId = Number(req.params.id);

      await WalletTransactionRepository.delete(transactionId);

      res.locals = {
        status: 204,
      };

      return next();
    } catch (error) {
      return next(error);
    }
  }
}

export default new WalletTransactionController();
