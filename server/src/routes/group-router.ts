import Router, { Request, Response } from 'express';
const router = Router();
import groupController from '../controllers/group.controller'

router.post('/', groupController.create);
router.get('/', groupController.get);
router.put('/:id', groupController.edit);
router.delete('/:id', groupController.delete);

export default router;