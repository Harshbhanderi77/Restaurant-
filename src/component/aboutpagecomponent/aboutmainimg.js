import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {Images} from '../../assets';
import {color} from '../../style/color';

const Aboutmainimg = () => {
  return (
    <View
      style={{flex: 1, position: 'relative', justifyContent: 'space-between'}}>
      <View>
        <Image style={styles.mainimage} source={Images.starbuks} />
      </View>
      <Image style={styles.arrow} source={Images.arrowleft} />
    </View>
  );
};

const styles = StyleSheet.create({
  arrow: {
    top: 20,
    left: 30,
    backgroundColor: '#fff',
    position: 'absolute',
    flex: 1,
  },
  star: {
    top: 20,
    left: 30,
    backgroundColor: '#fff',
    position: 'absolute',
    flex: 1,
  },
  mainimage: {
    resizeMode: 'cover',
    borderWidth: 5,
    maxWidth: 375,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: 'transparent',
  },
});

export default Aboutmainimg;
