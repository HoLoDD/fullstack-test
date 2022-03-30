import Router from 'express';
import userRouter from './user-router';
import groupRouter from './group-router';
const router = Router();

router.use('/user', userRouter);
router.use('/group', groupRouter);

export default router;