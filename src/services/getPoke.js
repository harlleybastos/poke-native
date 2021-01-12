import api from '../services/api';

const getAllPoke = async (callback) => {
  try {
    const resp = await api.get('/pokemon?limit=151/');
    const {data} = resp;
    callback([...data?.results]);
  } catch (e) {
    console.log(e);
  }
};

export default getAllPoke;
