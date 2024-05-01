import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  AsyncStorage,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import {Images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {fetch} from 'react-native/Libraries/Network/fetch';

const Cartdata = ({minValue = 1, maxValue = 100}) => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      const itemsString = await AsyncStorage.getItem('Items');
      if (itemsString !== null) {
        const cart = JSON.parse(itemsString);
        setCartItems(cart.map(item => ({...item, count: 1})));
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const increaseCount = (item, ItemId) => {
  //   console.log(ItemId);
  //   if (count < maxValue) {
  //     setCount(count + 1);
  //   }
  // };
  // const decreaseCount = () => {
  //   if (count > minValue) {
  //     setCount(count - 1);
  //   }
  // };

  const increaseCount = index => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].count < maxValue) {
      newCartItems[index].count += 1;
      setCartItems(newCartItems);
    }
  };

  const decreaseCount = index => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].count > minValue) {
      newCartItems[index].count -= 1;
      setCartItems(newCartItems);
    }
  };

  const itemtotalprice = item => {
    return item.ItemPrice * item.count;
  };

  const totalitemprice = () => {
    return cartItems
      .reduce((total, item) => total + itemtotalprice(item), 0)
      .toFixed();
  };

  const removeItemFromCart = async ItemId => {
    try {
      const updatedCart = cartItems.filter(item => item.ItemId !== ItemId);
      await AsyncStorage.setItem('Items', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{backgroundColor: 'fff', flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#000', fontSize: 30, fontWeight: '600'}}>
          Selected item
        </Text>
      </View>
      <FlatList
        style={{marginBottom: 80}}
        data={cartItems}
        // keyExtractor={({id}) => id}
        // onRefresh={() => {
        //   removeItemFromCart();
        //   console.log('the');
        // }}
        // refreshing={false}
        renderItem={({item, index}) => (
          <View style={styles.cart}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image style={styles.cartimg} source={{uri: item.ItemImage}} />
            </View>
            <View style={{justifyContent: 'space-between', flex: 1}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                  fontWeight: '600',
                  marginHorizontal: 10,
                }}>
                {item.ItemName}
              </Text>
              <View
                style={{
                  // flexDirection: 'row',
                  // marginTop: 4,
                  marginHorizontal: 10,
                }}>
                <Text style={styles.price}>Rs.{itemtotalprice(item)}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 8,
                  }}>
                  <TouchableOpacity
                    style={styles.quantitybutton}
                    onPress={() => decreaseCount(index)}>
                    <Text style={{color: '#000', fontSize: 14}}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantitynumber}>{item.count}</Text>
                  <TouchableOpacity
                    style={styles.quantitybutton}
                    onPress={() => increaseCount(index)}>
                    <Text style={{color: '#000', fontSize: 14}}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                marginRight: 30,
                justifyContent: 'center',
                // flexDirection: 'row',
              }}>
              <TouchableOpacity
                onPress={() => {
                  removeItemFromCart(item.ItemId);
                  console.log('itemid', item.ItemId);
                }}>
                <Image
                  source={Images.recyclebin}
                  style={{width: 22, height: 22}}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <View style={styles.contentfooter}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#b7bbbb',
            borderRadius: 12,
            paddingVertical: 5,
            paddingHorizontal: 24,
          }}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.rat}>Rs.{totalitemprice()}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 14,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Text style={styles.btn}>Add to cart</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Payment', {totalAmount: totalitemprice()})
            }>
            <Text style={styles.btn}>Place order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    marginTop: 12,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    backgroundColor: '#d2d1d1',
    borderRadius: 15,
    flex: 1,
    elevation: 5,
  },
  cartimg: {
    height: 100,
    width: 100,
    borderRadius: 15,
    marginLeft: 10,
    resizeMode: 'stretch',
  },
  price: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
    // marginLeft: 5,
    // backgroundColor: 'red',
  },
  quantitynumber: {
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    fontWeight: '600',
  },
  quantitybutton: {
    color: '#000',
    fontWeight: 'bold',
    backgroundColor: '#FFA500',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    // marginLeft: 12,
  },
  contentfooter: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#d2d1d1',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 20,
    // paddingHorizontal: 40,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  total: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
  rat: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
  btn: {
    color: '#000',
    backgroundColor: '#FFA500',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 38,
    fontSize: 16,
    fontWeight: '600',
    // marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cartdata;
