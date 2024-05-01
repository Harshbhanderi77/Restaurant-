import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, FlatList} from 'react-native';
import {Images} from '../assets';
import {color} from '../style/color';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Popularitemtwo from './navigation/popularitemtwo';
const SecondDishArray = [
  {
    ItemId: 5,
    CategoryId: 1,
    ItemName: 'Khela Khela Khaman',
    ItemPrice: '100.00',
    ItemQuentity: '250gm',
    ItemImage:
      'https://t3.ftcdn.net/jpg/02/06/86/30/240_F_206863003_stXo7KdJv0Wx4FaE690dvgR6bT4H4Zan.jpg',
  },
];

const Seconddish = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#fff', flex: 1, marginBottom: 20}}>
      <FlatList
        data={SecondDishArray}
        renderItem={({item}) => {
          return (
            <View style={styles.popularimg}>
              <Pressable
                style={{alignItems: 'center', elevation: 20}}
                onPress={() => navigation.navigate('Popularitemtwo')}>
                <Image
                  style={{
                    height: 200,
                    width: '100%',
                    borderRadius: 15,
                    resizeMode: 'stretch',
                    borderWidth: 1,
                    borderColor: '#000',
                  }}
                  source={{uri: item.ItemImage}}
                />
              </Pressable>
              <View>
                <Text style={styles.itemname}>{item.ItemName}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Seconddish;
