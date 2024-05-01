import React from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';
import {Images} from '../../assets';
import {color} from '../../style/color';

const Thirdmenuitem = () => {
  return (
    <View style={{marginBottom: 20}}>
      <View style={styles.thirdproductlistone}>
        <Image source={Images.productimageh} />
        <View style={{flexDirection: 'column', marginLeft: 16}}>
          <Text style={styles.thirdprodname}>Chocolate caliente</Text>
          <Text style={styles.proddetail}>
            Espresso shots topped with hot water create a light layer...
          </Text>
          <View style={styles.shoppingbag}>
            <Image source={Images.shoppingbag} />
            <Text style={{color: color.grey}}>$6 USD</Text>
            <Image style={styles.addtocart} source={Images.star} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  thirdproductlistone: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
  },
  thirdprodname: {
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

export default Thirdmenuitem;
