import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
  Pressable,
  Alert,
  FlatList,
  SafeAreaView,
  Button,
} from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Images} from '../assets';
import {color} from '../style/color';
import secondmenuitem from './aboutpagecomponent/secondmenuitem';
import About from './about';
import {fetch} from 'react-native/Libraries/Network/fetch';
const MainArray = [
  {
    Id: 1,
    CategoryName: 'Gujrati',
    CategoryImage:
      'http://4.bp.blogspot.com/-bhWaxeN35Ko/VW2EvX09LLI/AAAAAAAAvM8/lqShy5ECZNg/s640/IMG_9759-001.JPG',
  },
  {
    Id: 2,
    CategoryName: 'Panjabi',
    CategoryImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgkAk5PUJWgGvbiINJo6hcsmMQAGVOLlKYQ&usqp=CAU',
  },
  {
    Id: 3,
    CategoryName: 'Chaines',
    CategoryImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrl2gVFi9Du1gJ2isjGwpP6L-wckbJNxP4A&usqp=CAU',
  },
  {
    Id: 4,
    CategoryName: 'South Indian',
    CategoryImage:
      'https://t4.ftcdn.net/jpg/02/17/39/75/360_F_217397507_QmlPOR9ASQ0xWLnj4KJcbaw9UFUtR6kh.jpg',
  },
  {
    Id: 5,
    CategoryName: 'Mexican ',
    CategoryImage:
      'https://t4.ftcdn.net/jpg/01/13/63/63/360_F_113636348_FPQO3sUu2ZA3HR9zOzM4lnSiWEdsoqwu.jpg',
  },
];

class Item extends React.Component<{}> {
  render() {
    return null;
  }
}

const Mainslider = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const getMovies = async onPress => {
    try {
      const response = await fetch('http://192.168.125.23:1020/categorys');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(data);
  return (
    <View style={{backgroundColor: '#fff', flex: 1, marginLeft: 5}}>
      <View style={styles.main}>
        <Text style={styles.secondheading}>Categori</Text>
        {data?.length > 0 && (
          <FlatList
            data={data}
            extraData={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={({id}) => id}
            renderItem={({item}) => (
              <View
                style={{
                  marginLeft: 8,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Itemcategori', {
                      itemId: item.CategoryId,
                    })
                  }>
                  <Image
                    source={{uri: item.CategoryImage}}
                    style={{
                      height: 100,
                      width: 100,
                      resizeMode: 'cover',
                      borderRadius: 15,
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: '#000',
                    fontWeight: '600',
                    fontSize: 16,
                  }}>
                  {item.CategoryName}
                </Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

const Data = () => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: '#fff', flex: 1, marginTop: 10}}>
      <Text
        style={{
          fontSize: 28,
          color: '#000',
          fontWeight: '600',
          marginLeft: 5,
        }}>
        Categori
      </Text>
      <FlatList
        data={MainArray}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={{marginLeft: 10, marginTop: 14}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Itemcategori', {itemId: item.CategoryId})
                }>
                <Image
                  style={{height: 100, width: 100, borderRadius: 15}}
                  source={{uri: item.CategoryImage}}
                />
              </TouchableOpacity>

              <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    fontWeight: '600',
                    marginTop: 5,
                  }}>
                  {item.CategoryName}
                </Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.CategoryImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 10,
  },
  secondheading: {
    fontSize: 30,
    color: color.black,
    fontWeight: '900',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Mainslider;
