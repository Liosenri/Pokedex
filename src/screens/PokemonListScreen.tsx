import {StyleSheet, SafeAreaView, FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getPokemon} from '../services/Pokemon';
import {PokemonListItemType} from '../types';
import PokemonListItem from '../components/PokemonListItem';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PokemonStackParamListType} from '../navigation/Stacks/PokemonStack';
import SearchBar from '../components/SearchBar';

type NavigationType = NativeStackNavigationProp<
  PokemonStackParamListType,
  'PokemonList'
>;

type Props = {
  navigation: NavigationType;
};

const PokemonListScreen = ({navigation}: Props) => {
  const [pokemon, setPokemon] = useState<PokemonListItemType[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<PokemonListItemType[]>(
    [],
  );
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemon();
      setPokemon(response.data.results);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = pokemon.filter(p =>
      p.name.toUpperCase().includes(query.toUpperCase()),
    );
    setFilteredPokemon(filtered);
  }, [query, pokemon]);

  const onPressPokemonItem = (selectedPokemon: PokemonListItemType) =>
    navigation.navigate('PokemonDetail', {pokemon: selectedPokemon});

  return (
    <SafeAreaView>
      <SearchBar value={query} onChangeText={setQuery} />
      <FlatList
        data={filteredPokemon.length > 0 ? filteredPokemon : pokemon}
        renderItem={({item}) => (
          <PokemonListItem onPress={onPressPokemonItem} pokemon={item} />
        )}
        keyExtractor={(item, index) => item.name + index}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

export default PokemonListScreen;

const styles = StyleSheet.create({
  separator: {height: 0.5, backgroundColor: 'silver'},
});
