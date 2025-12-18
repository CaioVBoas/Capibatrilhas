import { Prisma, WalletTransaction } from '@prisma/client';
import prisma from '../database';

class WalletTransactionRepository {
  async create(
    data: Prisma.WalletTransactionCreateInput,
  ): Promise<WalletTransaction> {
    const transaction = await prisma.walletTransaction.create({ data });
    return transaction;
  }

  async findById(id: number): Promise<WalletTransaction | null> {
    const transaction = await prisma.walletTransaction.findUnique({
      where: { id },
    });
    return transaction;
  }

  async findByUserId(userId: number): Promise<WalletTransaction[]> {
    const transactions = await prisma.walletTransaction.findMany({
      where: { userId },
    });
    return transactions;
  }

  async update(
    id: number,
    data: Prisma.WalletTransactionUpdateInput,
  ): Promise<WalletTransaction> {
    const transaction = await prisma.walletTransaction.update({
      where: { id },
      data,
    });
    return transaction;
  }

  async delete(id: number): Promise<WalletTransaction> {
    const transaction = await prisma.walletTransaction.delete({
      where: { id },
    });
    return transaction;
  }
}

export default new WalletTransactionRepository();
