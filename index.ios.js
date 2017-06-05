//Import Libraries
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Component
const App = () => (
    <Header />
);

//Render
AppRegistry.registerComponent('album', () => App);
