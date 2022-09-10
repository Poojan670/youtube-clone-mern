import express from "express";
import {auth} from "../utils/auth.js";
import {deleteComment, getComments, postComment} from "../controllers/comment.js";

const router = express.Router();

router.post('/', auth, postComment)
router.delete('/:id', auth, deleteComment)
router.get('/:videoId', auth, getComments)

export default router;
