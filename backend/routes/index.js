import express from 'express';
//import controller file
import * as noteController from '../controllers';
// get an instance of express router
const router = express.Router();

router.route('/')
  .get(noteController.getNotes)
  .post(noteController.addNote);

router.route('/:id')
  .put(noteController.updateNote)
  .delete(noteController.deleteNote);
  //.get(noteController.getTodo)

export default router;
