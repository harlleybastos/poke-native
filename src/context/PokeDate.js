import React, {
  useContext,
  createContext,
  useEffect,
  useState,
  useRef,
} from 'react';
import api from '../services/api';
import getAllPoke from '../services/getPoke';
import getEvolution from '../services/getEvolutions';
const PokeContext = createContext([]);

export default function PokeDate({children}) {
  const [pokemon, setPokemon] = useState([]);
  const [evolution, setEvolution] = useState([]);
  const pokemonCache = useRef({});

  useEffect(() => {
    getEvolution(setEvolution);
    getAllPoke(setPokemon);
  }, []);

  const getPokemonByName = async (name) => {
    if (!pokemonCache.current[name]) {
      const promise = new Promise(async (resolve) => {
        const response = await api.get(`pokemon/${name}/`);
        resolve(response);
      });
      pokemonCache.current[name] = promise;
    }

    return pokemonCache.current[name];
  };

  return (
    <PokeContext.Provider value={{evolution, pokemon, getPokemonByName}}>
      {children}
    </PokeContext.Provider>
  );
}

export function usePoke() {
  const context = useContext(PokeContext);
  const {evolution, pokemon, getPokemonByName} = context;
  return {evolution, pokemon, getPokemonByName};
}
