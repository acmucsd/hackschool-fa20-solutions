import axios from 'axios';

const serverUrl = 'http://localhost:3000/api';

export default {
  getPokemon: function() {
    return axios.get(`${serverUrl}/pokemon`);
  },
  createPokemon: function(pokemon) {
    return axios.post(`${serverUrl}/pokemon`, pokemon);
  }
}
