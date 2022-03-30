import Router, { Request, Response } from 'express';
import userController from '../controllers/user.controller';
const router = Router();

router.post('/', userController.create);
router.get('/', userController.get);
router.get('/:id', userController.edit);
router.delete('/:id', userController.delete);

export default router;