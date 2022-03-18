import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {PokemonStackParamListType} from '../navigation/Stacks/PokemonStack';
import {getPokemonDetail} from '../services/Pokemon';
import {Pokedex} from '../types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type RoutType = RouteProp<PokemonStackParamListType, 'PokemonDetail'>;
type NavigationType = NativeStackNavigationProp<
  PokemonStackParamListType,
  'PokemonDetail'
>;

type Props = {
  route: RoutType;
  navigation: NavigationType;
};

const PokemonDetailScreen = ({
  route: {
    params: {pokemon},
  },
  navigation,
}: Props) => {
  const [pokedex, setPokedex] = useState<Pokedex | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPokemonDetail(pokemon.url);
      setPokedex(response.data);
    };
    fetchData();
  }, [pokemon.url]);

  useEffect(() => {
    if (pokedex) {
      navigation.setOptions({
        headerRight: () => (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.sprite}
              source={{uri: pokedex.sprites.front_default}}
            />
            <Icon name="heart" size={28} color="blue" />
          </View>
        ),
        title: 'Detalles ' + pokedex.name.toUpperCase(),
      });
    }
  }, [pokedex, navigation]);

  if (pokedex == null) {
    return (
      <View style={styles.loadingView}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={pokedex.moves}
        keyExtractor={(item, index) => item.move.name + index}
        renderItem={({item}) => (
          <Text style={styles.moveItem}>{item.move.name}</Text>
        )}
      />
    </View>
  );
};

export default PokemonDetailScreen;

const styles = StyleSheet.create({
  loadingView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  moveItem: {padding: 8},
  sprite: {height: 30, width: 30},
});
