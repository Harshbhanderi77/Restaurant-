import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Images} from '../assets';
import {color} from '../style/color';
import Popularitemone from './navigation/popularitemone';
const DishArray = [
  {
    id: 1,
    Name: 'Bajrano-rotlo',
    Imageitem:
      'https://cdn.tarladalal.com/members/9306/big/big_rotla_(_gujarati_recipe),_bajra_na_rotla_recipe-14243.jpg?size=696X905',
  },
];
const Dishcatagari = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#fff', flex: 1, marginTop: 5}}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.therdheading}>Restaurantes Populares</Text>
      </View>
      <FlatList
        data={DishArray}
        renderItem={({item}) => {
          return (
            <View style={styles.popularimg}>
              <Pressable
                style={{alignItems: 'center', elevation: 10}}
                onPress={() => navigation.navigate('Popularitemone')}>
                <Image
                  style={{
                    height: 200,
                    width: '100%',
                    borderRadius: 15,
                    borderWidth: 1,
                    borderColor: '#000',
                  }}
                  source={{uri: item.Imageitem}}
                />
              </Pressable>
              <View>
                <Text style={styles.itemname}>{item.Name}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  therdheading: {
    fontSize: 28,
    color: '#000',
    fontWeight: '700',
    marginTop: 16,
    backgroundColor: '#d2d1d1',
    padding: 4,
    borderRadius: 15,
  },
  popularimg: {
    marginTop: 20,
    marginHorizontal: 5,
  },
  itemname: {
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 5,
    marginLeft: 10,
  },
});

export default Dishcatagari;
