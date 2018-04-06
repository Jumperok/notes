import axios from 'axios';
import { apiPrefix } from '../../../etc/config.json';

export default {

  getNotesFromAPI() {
    return axios.get(`${apiPrefix}/api`);
  },

  addNotesAPI(Note) {
    return axios.post(`${apiPrefix}/api`, Note);
  },

  changeTaskStatusAPI(id, newNote) {
    return axios.put(`${apiPrefix}/api/${id}`, newNote);
  },

  deleteTaskAPI(id) {
    return axios.delete(`${apiPrefix}/api/${id}`);
  }

}
