import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  FlatList,
  Pressable,
  AsyncStorage,
} from 'react-native';
import {Images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import Cart from './cart';
import Customnavheader from './customnavheader';

const PopularitemArray = [
  {
    ItemId: 1,
    CategoryId: 1,
    ItemName: 'Bajrano-rotlo',
    ItemPrice: '50.00',
    ItemQuentity: '1',
    ItemImage:
      'https://cdn.tarladalal.com/members/9306/big/big_rotla_(_gujarati_recipe),_bajra_na_rotla_recipe-14243.jpg?size=696X905',
  },
];
const Popularitemone = () => {
  const navigation = useNavigation();

  const addtoCart = async itemId => {
    try {
      const itemsString = await AsyncStorage.getItem('Items');
      let cart = [];

      if (itemsString !== null) {
        cart = JSON.parse(itemsString);
      }

      const existingItemIndex = cart.findIndex(item => item.ItemId === itemId);

      if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1;
      } else {
        const selectedItem = PopularitemArray.find(
          item => item.ItemId === itemId,
        );
        selectedItem.quantity = 1;
        cart.push(selectedItem);
      }

      await AsyncStorage.setItem('Items', JSON.stringify(cart));
      console.log(cart);
      navigation.navigate('Cart');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Customnavheader label={'Item'} />
      <FlatList
        data={PopularitemArray}
        // keyExtractor={({id}) => id}
        renderItem={({item}) => {
          return (
            <View style={styles.maincontainer}>
              <View style={styles.secondcontainer}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    style={styles.itemimage}
                    source={{uri: item.ItemImage}}
                  />
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={styles.heading}>{item.ItemName}</Text>
                  <Text style={styles.description}>Description</Text>
                  <Text style={styles.details}>
                    The Bajrano-rotlo are thickly rolled, cooked on a tava then
                    roast over open flam till brown spots appear. Traditionally
                    white butter also known as makhan is smeared on it use. This
                    bajrano-rotlo is a very famous recipe from Gujrat.
                  </Text>
                  <View style={styles.contentfooter}>
                    <View
                      style={{alignItems: 'center', width: 100, height: 65}}>
                      <Text style={styles.price}>Price</Text>
                      <Text style={styles.rat}>Rs.{item.ItemPrice}</Text>
                    </View>
                    <Pressable onPress={() => addtoCart(item.ItemId)}>
                      <Text style={styles.additem}>Add item</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#ccd2d2',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    marginTop: 10,
  },
  secondcontainer: {
    marginHorizontal: 12,
    marginTop: 10,
    marginBottom: 10,
  },
  itemimage: {
    height: 350,
    width: '100%',
    borderRadius: 15,
    // resizeMode: 'contain',
  },
  heading: {
    color: '#000',
    fontSize: 26,
    fontWeight: '600',
  },
  description: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  details: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  contentfooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#b7bbbb',
    borderRadius: 15,
  },
  price: {
    color: '#000',
    fontSize: 16,
    marginTop: 5,
  },
  rat: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
  additem: {
    color: '#000',
    backgroundColor: '#FFA500',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 60,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Popularitemone;
