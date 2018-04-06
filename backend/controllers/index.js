import mongoose from 'mongoose';
import Note from '../models';

export const getNotes = (req,res) => {
  Note.find().exec((err, Notes) => {
    if(err){
      return res.json({'success':false, 'message':'Some Error'});
    }
    return res.json({'success':true, 'message':'Notes fetched successfully', Notes});
  });
}

export const addNote = (req,res) => {

  const newNote = new Note(req.body);

  newNote.save((err, Note) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':'Note added successfully', Note});
  })
}

export const updateNote = (req,res) => {
  Note.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, Note) => { // new:true - return the modified document rather than the original
    if(err){
      return res.json({'success':false,'message':'Some Error','error': err});
    }
    return res.json({'success':true,'message':'Updated successfully', Note});
  })
}

export const deleteNote = (req,res) => {
  Note.findByIdAndRemove(req.params.id, (err,Note) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':Note+' deleted successfully'});
  })
}
