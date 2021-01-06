import apievo from './apievo.js';

const getEvolutions = async (id, callback) => {
  const resp = await apievo.get(`/pokemon/${id}`);
  callback(resp.data);
};

export default getEvolutions;
