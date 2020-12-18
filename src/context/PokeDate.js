import React, {
  useContext,
  createContext,
  useEffect,
  useState,
  useRef,
} from 'react';
import api from '../services/api';
import getAllPoke from '../services/getPoke';
const PokeContext = createContext([]);

export default function PokeDate({children}) {
  const [pokemon, setPokemon] = useState([]);
  const pokemonCache = useRef({});

  useEffect(() => {
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
    <PokeContext.Provider value={{pokemon, getPokemonByName}}>
      {children}
    </PokeContext.Provider>
  );
}

export function usePoke() {
  const context = useContext(PokeContext);
  const {pokemon, getPokemonByName} = context;
  return {pokemon, getPokemonByName};
}
