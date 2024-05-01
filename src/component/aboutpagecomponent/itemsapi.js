import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Image, FlatList} from 'react-native';
import {fetch} from 'react-native/Libraries/Network/fetch';

const ItemsapiArray = [
  {
    ItemId: 1,
    CategoryId: 1,
    ItemName: 'Bajrano-rotlo',
    ItemPrice: '50.00',
    ItemQuentity: '1',
    ItemImage:
      'https://cdn.tarladalal.com/members/9306/big/big_rotla_(_gujarati_recipe),_bajra_na_rotla_recipe-14243.jpg?size=696X905',
  },
  {
    ItemId: 4,
    CategoryId: 2,
    ItemName: 'Cheez butter masala',
    ItemPrice: '150.00',
    ItemQuentity: '250gm',
    ItemImage:
      'https://cdn.tarladalal.com/members/9306/big/big_rotla_(_gujarati_recipe),_bajra_na_rotla_recipe-14243.jpg?size=696X905',
  },
  {
    ItemId: 5,
    CategoryId: 1,
    ItemName: 'Khela Khela Khaman',
    ItemPrice: '100.00',
    ItemQuentity: '250gm',
    ItemImage: '',
  },
  {
    ItemId: 6,
    CategoryId: 2,
    ItemName: 'Shahi Paneer',
    ItemPrice: '180.00',
    ItemQuentity: '250gm',
    ItemImage: '',
  },
  {
    ItemId: 7,
    CategoryId: 3,
    ItemName: 'Chaines Bhel',
    ItemPrice: '120.00',
    ItemQuentity: '225gm',
    ItemImage: '',
  },
  {
    ItemId: 8,
    CategoryId: 3,
    ItemName: 'Dry Manchurian',
    ItemPrice: '150.00',
    ItemQuentity: '15 N',
    ItemImage: '',
  },
  {
    ItemId: 9,
    CategoryId: 3,
    ItemName: 'Gravy Manchurian',
    ItemPrice: '150.00',
    ItemQuentity: '15 N',
    ItemImage: '',
  },
  {
    ItemId: 10,
    CategoryId: 1,
    ItemName: 'Dal Tadka',
    ItemPrice: '80.00',
    ItemQuentity: '150gm',
    ItemImage: '',
  },
  {
    ItemId: 11,
    CategoryId: 2,
    ItemName: 'Butter Nan',
    ItemPrice: '40.00',
    ItemQuentity: '1 N',
    ItemImage: '',
  },
  {
    ItemId: 12,
    CategoryId: 4,
    ItemName: 'Masala Dhosa',
    ItemPrice: '110.00',
    ItemQuentity: '1 N',
    ItemImage: '',
  },
  {
    ItemId: 13,
    CategoryId: 4,
    ItemName: 'Uttapam',
    ItemPrice: '120.00',
    ItemQuentity: '4 N',
    ItemImage: '',
  },
  {
    ItemId: 14,
    CategoryId: 4,
    ItemName: 'Maisur Masala',
    ItemPrice: '150.00',
    ItemQuentity: '1 N',
    ItemImage: '',
  },
  {
    ItemId: 15,
    CategoryId: 5,
    ItemName: 'Cauliflower Tacos',
    ItemPrice: '180.00',
    ItemQuentity: '4 N',
    ItemImage: '',
  },
  {
    ItemId: 16,
    CategoryId: 5,
    ItemName: 'Crispy Avocado Tacos',
    ItemPrice: '180.00',
    ItemQuentity: '4 N',
    ItemImage: '',
  },
  {
    ItemId: 17,
    CategoryId: 5,
    ItemName: 'Vegetarian Tortilla Soup',
    ItemPrice: '170.00',
    ItemQuentity: '150ml',
    ItemImage: '',
  },
];

const Itemsapi = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const respons = await fetch('http://192.168.173.23:2525/items');
      const json = await respons.json();
      setData(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <View>
      {data?.length > 0 && (
        <FlatList
          data={data}
          extraData={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <View style={styles.itemscontainer}>
              <Image style={styles.itemimage} source={{uri: item.ItemImage}} />
              <View style={{marginLeft: 20}}>
                <View>
                  <Text style={styles.itemname}>{item.ItemName}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.itemprice}>{item.ItemPrice}</Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
      <FlatList
        data={ItemsapiArray}
        renderItem={({item}) => (
          <View style={styles.itemscontainer}>
            <Image style={styles.itemimage} source={{uri: item.ItemImage}} />
            <View style={{marginLeft: 20}}>
              <View>
                <Text style={styles.itemname}>{item.ItemName}</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.itemprice}>{item.ItemPrice}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemscontainer: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    height: 120,
    flexDirection: 'row',
    backgroundColor: '#d2d1d1',
    alignItems: 'center',
    borderRadius: 10,
  },
  itemimage: {
    height: 100,
    width: 100,
    borderRadius: 15,
    marginLeft: 10,
  },
  itemname: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
  itemprice: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 5,
    marginRight: 10,
  },
});

export default Itemsapi;
