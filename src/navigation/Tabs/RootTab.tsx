import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PokemonStack from '../Stacks/PokemonStack';
import SavedPokemonStack from '../Stacks/SavedPokemonStack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type RootTabParamListType = {
  PokemonStack: undefined;
  SavedPokemonStack: undefined;
};

const TAB = createBottomTabNavigator<RootTabParamListType>();

const RootTab = () => {
  return (
    <TAB.Navigator screenOptions={{headerShown: false}}>
      <TAB.Screen
        name="PokemonStack"
        component={PokemonStack}
        options={{
          title: 'Pokemon',
          tabBarIcon: props => <Icon name="bookmark" {...props} />,
        }}
      />
      <TAB.Screen
        name="SavedPokemonStack"
        component={SavedPokemonStack}
        options={{
          title: 'Favoritos',
          tabBarIcon: props => <Icon name="heart" {...props} />,
        }}
      />
    </TAB.Navigator>
  );
};

export default RootTab;

const styles = StyleSheet.create({});
