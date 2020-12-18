import api from '../services/api';

const getAllPoke = async (callback) => {
  const resp = await api.get('/pokemon?limit=151/');
  const {data} = resp;
  callback([...data.results]);
};

export default getAllPoke;
