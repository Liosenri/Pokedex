import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

const SearchBar = (props: Props) => {
  return (
    <View style={styles.component}>
      <TextInput
        {...props}
        placeholder="Busca un pokemon..."
        style={styles.input}
        clearButtonMode="while-editing"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  component: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 8,
  },
});
