import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {PokemonListItemType} from '../types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
type Props = {
  pokemon: PokemonListItemType;
  onPress: (pokemon: PokemonListItemType) => void;
};

const PokemonListItem = ({pokemon, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(pokemon)} style={styles.component}>
      <Text style={styles.nameText}>{pokemon.name.toUpperCase()}</Text>
      <Icon size={22} name="chevron-right" />
    </TouchableOpacity>
  );
};

export default PokemonListItem;

const styles = StyleSheet.create({
  component: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameText: {fontWeight: 'bold'},
});
