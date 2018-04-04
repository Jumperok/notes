import express from 'express';
//import controller file
import * as noteController from '../controllers';
// get an instance of express router
const router = express.Router();

router.route('/')
  .get(noteController.getNotes)
  .post(noteController.addNote)
  .put(noteController.updateNote);

// router.route('/:id')
//   .get(noteController.getTodo)
//   .delete(noteController.deleteTodo);

export default router;
