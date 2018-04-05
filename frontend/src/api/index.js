import axios from 'axios';
//
import { apiPrefix } from '../../../etc/config.json';

// export default {
//     listNotes() {
//         return axios.get(`${apiPrefix}/notes`);
//     },
//
//     createNote(data) {
//         return axios.post(`${apiPrefix}/notes`, data);
//     },
//
//     deleteNote(noteId) {
//         return axios.delete(`${apiPrefix}/notes/${noteId}`);
//     }
// }

// const getNotes = () => dispatch => {
//   fetch(`${apiPrefix}/api`)
//           .then(response => {
//             response.json().then(
//               data => {
//                 console.log(data.Notes[0]);
//                 dispatch({ type: 'FETCH_NOTES', payload: data.Notes[0]});
//               }
//             );
//           });
// };
export default {
  getNotesFromAPI() {
    return axios.get(`${apiPrefix}/api`);
    // return fetch(`${apiPrefix}/api`).then(response => {response.json().then(data => {return data.Notes}) });
  },

  addNotesAPI(Note) {
    console.log("from api", Note);
    return axios.post(`${apiPrefix}/api`, Note);
  },

  changeTaskStatusAPI(id, newNote) {
    return axios.put(`${apiPrefix}/api/${id}`, newNote);
  },

  deleteTaskAPI(id) {
    return axios.delete(`${apiPrefix}/api/${id}`);
  }
  //{sdas: "dsad", dad:"mom"}
  // getNotesFromAPI() {
  //   return fetch(`${apiPrefix}/apip`)
  //          .then(response => { return response.json() })
  //          .catch(err => {console.log(err);});
  //   // return fetch(`${apiPrefix}/api`).then(response => {response.json().then(data => {return data.Notes}) });
  // }

}
