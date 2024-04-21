import express from 'express';

import {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
  addBettor,
  getUserPosts,
  patchPost
} from '../Controllers/backControllers.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/new', createPost);
router.get('/post/:id', getPost);
router.put('/update/:id', updatePost);
router.patch('/add-bettor/:id', addBettor);
router.patch('/patch-post/:id', patchPost);
router.get('/get-user-posts/:userId', getUserPosts);
router.delete('/delete/:id', deletePost);

export default router;