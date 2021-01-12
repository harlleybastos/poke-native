import apievo from './apievo.js';

const getEvolutions = async (id, callback) => {
  try {
    const resp = await apievo.get(`/pokemon/${id}`);
    callback(resp?.data);
  } catch (e) {
    console.log(e);
  }
};

export default getEvolutions;
