import express from 'express';
import * as noteController from '../controllers';

const router = express.Router();

router.route('/')
  .get(noteController.getNotes)
  .post(noteController.addNote);

router.route('/:id')
  .put(noteController.updateNote)
  .delete(noteController.deleteNote);

export default router;
