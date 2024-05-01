import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {Images} from '../../assets';
import {color} from '../../style/color';

const Menuitems = () => {
  return (
    <View>
      <Text style={styles.heading}>Menú</Text>
      <View style={styles.productlistone}>
        <Image source={Images.productimage} />
        <View style={{flexDirection: 'column', marginLeft: 16}}>
          <Text style={styles.prodname}>Café Americano</Text>
          <Text style={styles.proddetail}>
            Steamed milk and mocha sauce topped with sweeten...
          </Text>
          <View style={styles.shoppingbag}>
            <Image source={Images.shoppingbag} />
            <Text style={{color: color.grey}}>$4 USD</Text>
            <Image style={styles.addtocart} source={Images.star} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    color: color.black,
    fontWeight: '700',
    marginTop: 20,
    marginLeft: 10,
  },
  productlistone: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: color.black,
  },
  prodname: {
    fontSize: 20,
    color: color.gray4,
    fontWeight: '600',
  },
  proddetail: {
    fontSize: 14,
    color: color.gray5,
    maxWidth: 230,
    marginTop: 5,
  },
  shoppingbag: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addtocart: {
    marginLeft: 20,
  },
});

export default Menuitems;
