import axios from 'axios';

const serverUrl = 'http://localhost:5000/api';

const API =  {
  getPokemon: function() {
    return axios.get(`${serverUrl}/pokemon`);
  },
  createPokemon: function(pokemon) {
    return axios.post(`${serverUrl}/pokemon`, pokemon);
  }
}

export default API;