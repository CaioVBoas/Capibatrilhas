import { Router } from 'express';
import { WalletTransactionController } from '../controllers';

const walletTransactionRouter = Router();

walletTransactionRouter.route('/').post(WalletTransactionController.create);

walletTransactionRouter
  .route('/user/:id')
  .get(WalletTransactionController.getByUserId);

walletTransactionRouter.route('/:id').get(WalletTransactionController.getById);

walletTransactionRouter.route('/:id').patch(WalletTransactionController.update);

walletTransactionRouter
  .route('/:id')
  .delete(WalletTransactionController.delete);

export default walletTransactionRouter;
