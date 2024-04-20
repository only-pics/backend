import express from 'express';

import {
  createPost,
  getPost,
  getPosts,
  updatePost,
  deletePost,
  addBettor,
  patchPost
} from '../Controllers/backControllers.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/new', createPost);
router.get('/post/:id', getPost);
router.put('/update/:id', updatePost);
router.put('/add-bettor/:id', addBettor);
router.patch('/patch-post/:id', patchPost);
router.delete('/delete/:id', deletePost);

export default router;