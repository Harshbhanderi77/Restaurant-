import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import {Images} from '../assets';
import {color} from '../style/color';
const SecondsliderArray = [
  {
    Id: 1,
    CategoryImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgkAk5PUJWgGvbiINJo6hcsmMQAGVOLlKYQ&usqp=CAU',
  },
  {
    Id: 2,
    CategoryImage:
      'http://4.bp.blogspot.com/-bhWaxeN35Ko/VW2EvX09LLI/AAAAAAAAvM8/lqShy5ECZNg/s640/IMG_9759-001.JPG',
  },
  {
    Id: 3,
    CategoryName: 'Chaines',
    CategoryImage:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSrl2gVFi9Du1gJ2isjGwpP6L-wckbJNxP4A&usqp=CAU',
  },
];
const Secondslider = () => {
  return (
    <View style={{backgroundColor: '#fff', flex: 1, marginTop: 5}}>
      <FlatList
        data={SecondsliderArray}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={{marginLeft: 5, marginTop: 20}}>
              <Image
                style={{height: 280, width: 300, borderRadius: 15}}
                source={{uri: item.CategoryImage}}
              />
            </View>
          );
        }}
      />
    </View>
  );

  // return (
  //   <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  //     <View style={styles.mainitemimg}>
  //       <Image style={styles.sliderimg} source={Images.PromotionCard} />
  //       <Image style={styles.sliderimg} source={Images.PromotionCard} />
  //       <Image style={styles.sliderimg} source={Images.PromotionCard} />
  //       <Image style={styles.sliderimg} source={Images.PromotionCard} />
  //     </View>
  //   </ScrollView>
  // );
};

const styles = StyleSheet.create({
  mainitemimg: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
  },
  sliderimg: {
    marginRight: 10,
  },
});

export default Secondslider;
