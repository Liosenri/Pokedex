import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonListScreen from '../../screens/PokemonListScreen';
import PokemonDetailScreen from '../../screens/PokemonDetailScreen';
import {PokemonListItemType} from '../../types';

type Props = {};

export type PokemonStackParamListType = {
  PokemonList: undefined;
  PokemonDetail: {pokemon: PokemonListItemType};
};

const Stack = createNativeStackNavigator<PokemonStackParamListType>();

const PokemonStack = ({}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PokemonList"
        component={PokemonListScreen}
        options={{title: 'Pokemon', headerShadowVisible: false}}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetailScreen}
        options={{
          title: 'Detalles',
          headerBackTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default PokemonStack;
