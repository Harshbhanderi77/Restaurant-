import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
} from 'react-native';
import {Images} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {fetch} from 'react-native/Libraries/Network/fetch';
import {AsyncStorage} from 'react-native';
import Customnavheader from './customnavheader';

// const CartArray = [
//   {
//     ItemId: 1,
//     CategoryId: 1,
//     ItemName: 'Bajrano-rotlo',
//     ItemPrice: '50.00',
//     ItemQuentity: '1 N',
//     ItemImage:
//       'https://cdn.tarladalal.com/members/9306/big/big_rotla_(_gujarati_recipe),_bajra_na_rotla_recipe-14243.jpg?size=696X905',
//   },
//   {
//     ItemId: 4,
//     CategoryId: 2,
//     ItemName: 'Cheez butter masala',
//     ItemQuentity: '250gm',
//     ItemPrice: '250.00',
//     ItemImage:
//       'https://cdn.tarladalal.com/members/9306/big/big_rotla_(_gujarati_recipe),_bajra_na_rotla_recipe-14243.jpg?size=696X905',
//   },
//   {
//     ItemId: 5,
//     CategoryId: 1,
//     ItemName: 'Khela Khela Khaman',
//     ItemPrice: '100.00',
//     ItemQuentity: '250gm',
//     ItemImage:
//       'https://cdn.tarladalal.com/members/9306/big/big_rotla_(_gujarati_recipe),_bajra_na_rotla_recipe-14243.jpg?size=696X905',
//   },
//   {
//     ItemId: 6,
//     CategoryId: 2,
//     ItemName: 'Shahi Paneer',
//     ItemPrice: '180.00',
//     ItemQuentity: '250gm',
//     ItemImage: '',
//   },
//   {
//     ItemId: 7,
//     CategoryId: 3,
//     ItemName: 'Chaines Bhel',
//     ItemPrice: '120.00',
//     ItemQuentity: '225gm',
//     ItemImage: '',
//   },
//   {
//     ItemId: 8,
//     CategoryId: 3,
//     ItemName: 'Dry Manchurian',
//     ItemPrice: '150.00',
//     ItemQuentity: '15 N',
//     ItemImage: '',
//   },
//   {
//     ItemId: 9,
//     CategoryId: 3,
//     ItemName: 'Gravy Manchurian',
//     ItemPrice: '150.00',
//     ItemQuentity: '15 N',
//     ItemImage: '',
//   },
//   {
//     ItemId: 10,
//     CategoryId: 1,
//     ItemName: 'Dal Tadka',
//     ItemPrice: '80.00',
//     ItemQuentity: '150gm',
//     ItemImage: '',
//   },
//   {
//     ItemId: 11,
//     CategoryId: 2,
//     ItemName: 'Butter Nan',
//     ItemPrice: '40.00',
//     ItemQuentity: '1 N',
//     ItemImage: '',
//   },
//   {
//     ItemId: 12,
//     CategoryId: 4,
//     ItemName: 'Masala Dhosa',
//     ItemPrice: '110.00',
//     ItemQuentity: '1 N',
//     ItemImage: '',
//   },
//   {
//     ItemId: 13,
//     CategoryId: 4,
//     ItemName: 'Uttapam',
//     ItemPrice: '120.00',
//     ItemQuentity: '4 N',
//     ItemImage: '',
//   },
//   {
//     ItemId: 14,
//     CategoryId: 4,
//     ItemName: 'Maisur Masala',
//     ItemPrice: '150.00',
//     ItemQuentity: '1 N',
//     ItemImage: '',
//   },
//   {
//     ItemId: 15,
//     CategoryId: 5,
//     ItemName: 'Cauliflower Tacos',
//     ItemPrice: '180.00',
//     ItemQuentity: '4 N',
//     ItemImage: '',
//   },
//   {
//     ItemId: 16,
//     CategoryId: 5,
//     ItemName: 'Crispy Avocado Tacos',
//     ItemPrice: '180.00',
//     ItemQuentity: '4 N',
//     ItemImage: '',
//   },
//   {
//     ItemId: 17,
//     CategoryId: 5,
//     ItemName: 'Vegetarian Tortilla Soup',
//     ItemPrice: '170.00',
//     ItemQuentity: '150ml',
//     ItemImage: '',
//   },
// ];
const Cart = ({minValue = 1, maxValue = 100}) => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchitems();
  }, []);
  const fetchitems = async () => {
    try {
      const response = await fetch(
        'http://192.168.125.23:8585/get-cart-items-by-cartid',
      );
      if (!response.ok) {
        throw new Error('not fetch item');
      }
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  const removeitems = async ItemId => {
    try {
      const response = await fetch(
        `http://192.168.125.23:8585/delete-from-cart/:LoginId/${ItemId}`,
        {
          method: 'DELETE',
        },
      );
      if (response.ok) {
        const updatedCart = await response.json();
        setCount(updatedCart);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   cartitems();
  // }, []);

  // const loadCartItems = async () => {
  //   try {
  //     const itemsString = await AsyncStorage.getItem('Items');
  //     if (itemsString !== null) {
  //       const cart = JSON.parse(itemsString);
  //       setCartItems(cart.map(item => ({...item, count: 1})));
  //     }
  //   } catch (error) {
  //     console.error(error);
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
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Customnavheader label={'Cart'} />
      <FlatList
        style={{marginBottom: 80}}
        data={cartItems}
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
                // onPress={() => {
                //   removeitems(item.ItemId);
                //   console.log('itemid', item.ItemId);
                // }}
                onPress={removeitems}>
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
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#b7bbbb',
            borderRadius: 15,
            paddingVertical: 5,
            paddingHorizontal: 26,
          }}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.rat}>Rs.{totalitemprice()}</Text>
        </View>
        <Pressable
          onPress={() =>
            navigation.navigate('Payment', {totalAmount: totalitemprice()})
          }>
          <Text style={styles.pay}>Pay Bill</Text>
        </Pressable>
      </View>
    </View>
  );
};

const cartitem = ({minValue = 0, maxValue = 100, route}) => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);

  const increaseCount = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };
  const decreaseCount = () => {
    if (count > minValue) {
      setCount(count - 1);
    }
  };
  const itemtotalprice = item => {
    return item.ItemPrice * count;
  };
  const totalitemprice = () => {
    return CartArray.reduce(
      (total, item) => total + itemtotalprice(item),
      0,
    ).toFixed();
  };
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Customnavheader label={'Cart'} />
      {data?.length > 0 && (
        <FlatList
          data={data}
          extraData={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
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
                      onPress={decreaseCount}>
                      <Text style={{color: '#000', fontSize: 14}}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantitynumber}>{count}</Text>
                    <TouchableOpacity
                      style={styles.quantitybutton}
                      onPress={increaseCount}>
                      <Text style={{color: '#000', fontSize: 14}}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginRight: 26,
                  justifyContent: 'center',
                  // flexDirection: 'row',
                }}>
                <TouchableOpacity>
                  <Image
                    source={Images.recyclebin}
                    style={{width: 20, height: 20}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
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
    backgroundColor: '#d2d1d1',
    borderRadius: 15,
    flex: 1,
    // elevation: 5,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#d2d1d1',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    // paddingHorizontal: 40,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  total: {
    color: '#000',
    fontSize: 16,
    marginTop: 5,
  },
  rat: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    // paddingLeft: 5,
    // paddingRight: 5,
  },
  pay: {
    color: '#000',
    backgroundColor: '#FFA500',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 70,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Cart;
