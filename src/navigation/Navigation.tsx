import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootTab from './Tabs/RootTab';

type Props = {};

const Navigation = ({}: Props) => {
  return (
    <NavigationContainer>
      <RootTab />
    </NavigationContainer>
  );
};

export default Navigation;
