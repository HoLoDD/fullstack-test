import Router, { Request, Response } from 'express';
const router = Router();
import groupController from '../controllers/group.controller'

router.post('/', groupController.create);
router.post('/:id', groupController.addUser)
router.get('/', groupController.get);
router.patch('/:id', groupController.edit);
router.delete('/:id', groupController.delete);

export default router;