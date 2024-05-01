import React from 'react';
import {Text, View, StyleSheet, Button, Image, ScrollView} from 'react-native';
import {Images} from '../assets';
import {color} from '../style/color';
import Aboutmainimg from './aboutpagecomponent/aboutmainimg';
import Menuitems from './aboutpagecomponent/menuitems';
import Secondmenuitem from './aboutpagecomponent/secondmenuitem';
import Thirdmenuitem from './aboutpagecomponent/thirdmenuitem';

const About = () => {
  return (
    <View style={{marginHorizontal: 5}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.maincontainer}>
          <View>
            <Aboutmainimg />
          </View>
          <View>
            <Menuitems />
          </View>
          <Secondmenuitem />
          <Thirdmenuitem />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#fff',
  },
});

export default About;
