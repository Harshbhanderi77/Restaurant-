import React from 'react';
import {View, StyleSheet, Button, Image, Text} from 'react-native';

const Panjabicategori = ({navigation, route}) => {
  const id = route.params.ItemId;
  console.log(id);
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Text style={{color: '#000'}}>Panjabicategori</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Panjabicategori;
