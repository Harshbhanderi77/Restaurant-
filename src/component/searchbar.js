import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import {Images} from '../assets';
import {color} from '../style/color';

const Searchbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.slowgan}>Find the best food for you</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  slowgan: {
    fontSize: 26,
    fontWeight: '600',
    color: color.black,
  },
});

export default Searchbar;
