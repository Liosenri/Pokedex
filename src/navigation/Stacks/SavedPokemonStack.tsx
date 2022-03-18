import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SavedPokemonScreen from '../../screens/SavedPokemonScreen';

type Props = {};

export type SavedPokemonStackParamListType = {
  SavedPokemon: undefined;
};

const Stack = createNativeStackNavigator<SavedPokemonStackParamListType>();

const SavedPokemonStack = ({}: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SavedPokemon"
        component={SavedPokemonScreen}
        options={{title: 'Favoritos', headerShadowVisible: false}}
      />
    </Stack.Navigator>
  );
};

export default SavedPokemonStack;
