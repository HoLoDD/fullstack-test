import Router, { Request, Response } from 'express';
import userController from '../controllers/user.controller';
const router = Router();

router.post('/', userController.create);
router.post('/:id', userController.setGroup);
router.get('/', userController.get);
router.patch('/:id', userController.edit);
router.delete('/:id', userController.delete);

export default router;