import express from 'express';
import { getUser,updateUser , deleteUser,followUser ,  getAllUsers, unfollowUser} from '../Controllers/UserController.js';
import authMiddleware from '../Middleware/authMiddleware.js';

const router = express.Router();

router.get('/',getAllUsers);
router.get('/:id',getUser);
router.put('/:id',authMiddleware,updateUser);
router.delete('/:id',authMiddleware,deleteUser);
router.put('/:id/follow',authMiddleware,followUser);
router.put('/:id/unfollow',authMiddleware,unfollowUser);


export default router;