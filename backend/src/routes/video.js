import express from "express";
import {auth} from "../utils/auth.js";
import {
    deleteVideo, getByTags,getRandomVideos, getSubbedVideos,
    getTrendingVideos, getVideo,
    postVideo, search, updateVideo, updateViews
} from "../controllers/video.js";

const router = express.Router()

router.post('/', auth, postVideo)
router.put('/:id', auth, updateVideo)
router.delete('/:id', auth, deleteVideo)

router.get('/find/:id', getVideo)
router.put('/view/:id', updateViews)
router.get('/trending', getTrendingVideos)
router.get('/random', getRandomVideos)

router.get('/sub', auth, getSubbedVideos)

router.get('/tags', getByTags)
router.get('/search', search)

export default router;