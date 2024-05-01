import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {fetch} from 'react-native/Libraries/Network/fetch';
import {useNavigation} from '@react-navigation/native';
import {AsyncStorage} from 'react-native';
import Cart from './cart';
import Customnavheader from './customnavheader';

// const ItemcaategoriArray = [
//   {
//     ItemId: 1,
//     CategoryId: 1,
//     ItemName: 'Bajrano-rotlo',
//     ItemPrice: '50.00',
//     ItemQuentity: '1',
//     ItemImage:
//       'https://cdn.tarladalal.com/members/9306/big/big_rotla_(_gujarati_recipe),_bajra_na_rotla_recipe-14243.jpg?size=696X905',
//   },
//   {
//     ItemId: 10,
//     CategoryId: 1,
//     ItemName: 'Dal Tadka',
//     ItemPrice: '80.00',
//     ItemQuentity: '150gm',
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
//       'https://t3.ftcdn.net/jpg/02/06/86/30/240_F_206863003_stXo7KdJv0Wx4FaE690dvgR6bT4H4Zan.jpg',
//   },
//   {
//     ItemId: 4,
//     CategoryId: 2,
//     ItemName: 'Cheez butter masala',
//     ItemPrice: '150.00',
//     ItemQuentity: '250gm',
//     ItemImage:
//       'https://cdn.tarladalal.com/members/9306/big/big_rotla_(_gujarati_recipe),_bajra_na_rotla_recipe-14243.jpg?size=696X905',
//   },
//   // {
//   //   ItemId: 6,
//   //   CategoryId: 2,
//   //   ItemName: 'Shahi Paneer',
//   //   ItemPrice: '180.00',
//   //   ItemQuentity: '250gm',
//   //   ItemImage: '',
//   // },
//   // {
//   //   ItemId: 7,
//   //   CategoryId: 3,
//   //   ItemName: 'Chaines Bhel',
//   //   ItemPrice: '120.00',
//   //   ItemQuentity: '225gm',
//   //   ItemImage: '',
//   // },
//   // {
//   //   ItemId: 8,
//   //   CategoryId: 3,
//   //   ItemName: 'Dry Manchurian',
//   //   ItemPrice: '150.00',
//   //   ItemQuentity: '15 N',
//   //   ItemImage: '',
//   // },
//   // {
//   //   ItemId: 9,
//   //   CategoryId: 3,
//   //   ItemName: 'Gravy Manchurian',
//   //   ItemPrice: '150.00',
//   //   ItemQuentity: '15 N',
//   //   ItemImage: '',
//   // },
//   // {
//   //   ItemId: 11,
//   //   CategoryId: 2,
//   //   ItemName: 'Butter Nan',
//   //   ItemPrice: '40.00',
//   //   ItemQuentity: '1 N',
//   //   ItemImage: '',
//   // },
//   // {
//   //   ItemId: 12,
//   //   CategoryId: 4,
//   //   ItemName: 'Masala Dhosa',
//   //   ItemPrice: '110.00',
//   //   ItemQuentity: '1 N',
//   //   ItemImage: '',
//   // },
//   // {
//   //   ItemId: 13,
//   //   CategoryId: 4,
//   //   ItemName: 'Uttapam',
//   //   ItemPrice: '120.00',
//   //   ItemQuentity: '4 N',
//   //   ItemImage: '',
//   // },
//   // {
//   //   ItemId: 14,
//   //   CategoryId: 4,
//   //   ItemName: 'Maisur Masala',
//   //   ItemPrice: '150.00',
//   //   ItemQuentity: '1 N',
//   //   ItemImage: '',
//   // },
//   // {
//   //   ItemId: 15,
//   //   CategoryId: 5,
//   //   ItemName: 'Cauliflower Tacos',
//   //   ItemPrice: '180.00',
//   //   ItemQuentity: '4 N',
//   //   ItemImage: '',
//   // },
//   // {
//   //   ItemId: 16,
//   //   CategoryId: 5,
//   //   ItemName: 'Crispy Avocado Tacos',
//   //   ItemPrice: '180.00',
//   //   ItemQuentity: '4 N',
//   //   ItemImage: '',
//   // },
//   // {
//   //   ItemId: 17,
//   //   CategoryId: 5,
//   //   ItemName: 'Vegetarian Tortilla Soup',
//   //   ItemPrice: '170.00',
//   //   ItemQuentity: '150ml',
//   //   ItemImage: '',
//   // },
// ];

const Itemcategori = ({route, quantity, loginId, status}) => {
  const {itemId} = route.params;
  console.log(itemId);
  const [data, setData] = useState([]);

  console.log('id ==>>', itemId);

  const addtocart = async itemId => {
    try {
      const response = await fetch('http://192.168.125.23:8585/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Loginid: loginId,
          itemId: itemId,
          quantity: quantity,
          Status: status,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }
      const responseData = await response.json();
      console.log('added to cart successfully:', responseData);
    } catch (error) {
      console.error('Error add to cart:', error);
    }
  };

  const getMovies = async () => {
    try {
      const respons = await fetch(`http://192.168.125.23:2525/item/${itemId}`);
      const json = await respons.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(data);

  // const addtoCart = async itemId => {
  //   try {
  //     const itemsString = await AsyncStorage.getItem('Items');
  //     let cart = [];
  //
  //     if (itemsString !== null) {
  //       cart = JSON.parse(itemsString);
  //     }
  //
  //     const existingItemIndex = cart.findIndex(item => item.ItemId === itemId);
  //
  //     if (existingItemIndex !== -1) {
  //       cart[existingItemIndex].quantity += 1;
  //     } else {
  //       const selectedItem = data.find(item => item.ItemId === itemId);
  //       selectedItem.quantity = 1;
  //       cart.push(selectedItem);
  //     }
  //
  //     await AsyncStorage.setItem('Items', JSON.stringify(cart));
  //     console.log(cart);
  //     navigation.navigate('Cart');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <View style={styles.maincontainer}>
      <Customnavheader label={'Items'} />
      {data?.length > 0 && (
        <FlatList
          data={data}
          extraData={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={styles.itemscontainer}>
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  style={styles.itemimage}
                  source={{uri: item.ItemImage}}
                />
              </View>
              <View style={{justifyContent: 'space-between', flex: 1}}>
                <Text style={styles.itemname}>{item.ItemName}</Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '600',
                    marginHorizontal: 10,
                    marginTop: 5,
                  }}>
                  Q: {item.ItemQuentity}
                </Text>
                <View
                  style={{
                    marginHorizontal: 10,
                  }}>
                  <Text style={styles.itemprice}>Rs.{item.ItemPrice}</Text>
                </View>
              </View>
              <View
                style={{
                  marginRight: 16,
                  justifyContent: 'center',
                }}>
                <TouchableOpacity onPress={() => addtocart(itemId)}>
                  <Text style={styles.additem}>Add item</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

const itemdata = () => {
  const navigation = useNavigation();

  const addtoCart = async itemId => {
    try {
      const itemsString = await AsyncStorage.getItem('Items');
      let cartitem = [];

      if (itemsString !== null) {
        cartitem = JSON.parse(itemsString);
      }

      const existingItemIndex = cartitem.findIndex(
        item => item.ItemId === itemId,
      );

      if (existingItemIndex !== -1) {
        cartitem[existingItemIndex].quantity += 1;
      } else {
        const selectedItem = ItemcaategoriArray.find(
          item => item.ItemId === itemId,
        );
        selectedItem.quantity = 1;
        cartitem.push(selectedItem);
      }

      await AsyncStorage.setItem('Items', JSON.stringify(cartitem));
      console.log(cartitem);
      navigation.navigate(Cart);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.maincontainer}>
      <Customnavheader label={'Items'} />
      <FlatList
        data={ItemcaategoriArray}
        renderItem={({item}) => (
          <View style={styles.itemscontainer}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image style={styles.itemimage} source={{uri: item.ItemImage}} />
            </View>
            <View style={{justifyContent: 'space-between', flex: 1}}>
              <Text style={styles.itemname}>{item.ItemName}</Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: 16,
                  fontWeight: '600',
                  marginHorizontal: 10,
                  marginTop: 5,
                }}>
                Q: {item.ItemQuentity}
              </Text>
              <View
                style={{
                  marginHorizontal: 10,
                }}>
                <Text style={styles.itemprice}>Rs.{item.ItemPrice}</Text>
              </View>
            </View>
            <View
              style={{
                marginRight: 16,
              }}>
              <TouchableOpacity onPress={() => addtoCart(item.ItemId)}>
                <Text style={styles.additem}>Add item</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.ItemId.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mainheading: {
    color: '#000',
    fontWeight: '600',
    fontSize: 30,
    marginTop: 10,
  },
  itemscontainer: {
    marginTop: 12,
    marginLeft: 10,
    marginRight: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#d2d1d1',
    borderRadius: 15,
    // elevation: 5,
  },
  itemimage: {
    height: 100,
    width: 100,
    borderRadius: 15,
    marginLeft: 10,
    resizeMode: 'stretch',
  },
  itemname: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 10,
  },
  itemprice: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
  },
  additem: {
    color: '#000',
    backgroundColor: '#FFA500',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
    fontSize: 14,
    fontWeight: '600',
    // elevation: 5,
  },
});

export default Itemcategori;
