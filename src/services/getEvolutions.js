import api from './api.js';

const getEvolutions = async (id, callback) => {
  const resp = await api.get(`/evolution-chain/${id}`);
  const {data} = resp;
  callback(data.chain);
};

export default getEvolutions;
