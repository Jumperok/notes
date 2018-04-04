import mongoose from 'mongoose';
//import models
import Note from '../models';

export const getNotes = (req,res) => {
  console.log("GETNOTES");
  Note.find().exec((err, Notes) => {
    if(err){
      return res.json({'success':false, 'message':'Some Error'});
    }
    return res.json({'success':true, 'message':'Notes fetched successfully', Notes});
  });
}

export const addNote = (req,res) => {
  // console.log(req);
  // console.log("BODY!", req.body);
  //console.log(req.headers);

  // const newNote = new Note(req.body);
  //
  // newNote.save((err, Note) => {
  //   if(err){
  //     return res.json({'success':false,'message':'Some Error'});
  //   }
  //   return res.json({'success':true,'message':'Note added successfully', Note});
  // })
}

export const updateNote = (req,res) => {
  console.log(req.params.id);
  console.log(req.body);
  Note.findOneAndUpdate({ _id:req.params.id }, req.body, { new:true }, (err, Note) => { // new:true - return the modified document rather than the original
    if(err){
      return res.json({'success':false,'message':'Some Error','error': err});
    }
    console.log(Note);
    return res.json({'success':true,'message':'Updated successfully', Note});
  })
}

// export const getNote = (req,res) => {
//   Note.find({_id:req.params.id}).exec((err,Note) => {
//     if(err){
//     return res.json({'success':false,'message':'Some Error'});
//     }
//     if(Note.length){
//       return res.json({'success':true,'message':'Note fetched by id successfully',Note});
//     }
//     else{
//       return res.json({'success':false,'message':'Note with the given id not found'});
//     }
//   })
// }
export const deleteNote = (req,res) => {
  Note.findByIdAndRemove(req.params.id, (err,Note) => {
    if(err){
      return res.json({'success':false,'message':'Some Error'});
    }
    return res.json({'success':true,'message':Note+' deleted successfully'});
  })
}
