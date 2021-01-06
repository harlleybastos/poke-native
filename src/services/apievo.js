import axios from 'axios';

const apiEvo = axios.create({baseURL: 'https://pokeapi.glitch.me/v1/'});

export default apiEvo;
