import express from 'express';
import 'express-async-errors';
import {
    dislikeVideo,
    getMe,
    getUserById,
    likeVideo,
    listUsers,
    subscribe,
    unsubscribe,
    updateUser
} from "../controllers/user.js";
import {auth} from "../utils/auth.js";

const router = express.Router()

 // CRUD User Operations
router.put('/:id', auth, updateUser)
router.get('/me', auth, getMe)
router.get('/:id', getUserById)
router.get('/', auth, listUsers)

 // Subscribe to a User
router.put('/sub/:id', auth, subscribe)

 // Unsubscribe to a user
router.put('/unsub/:id', auth, unsubscribe)

 // Like a video
router.put('/like/:videoId', auth, likeVideo)

 // Unlike a video
router.put('/dislike/:videoId', auth, dislikeVideo)

export default router;