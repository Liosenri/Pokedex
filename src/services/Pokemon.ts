import axios from 'axios';
import {GetPokemonResultType, Pokedex} from '../types';

export const getPokemon = () =>
  axios.get<GetPokemonResultType>(
    'https://pokeapi.co/api/v2/pokemon?limit=151',
  );

export const getPokemonDetail = (url: string) => axios.get<Pokedex>(url);
