import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 15,
    paddingLeft: 10,
    backgroundColor: theme.colors.appBar,
  },
  text: {
    color: theme.colors.textLight
  }
});

const AppBar = () => {
  return <View style={styles.container}><Pressable><Text style={styles.text}>Repositories</Text></Pressable></View>;
};

export default AppBar;