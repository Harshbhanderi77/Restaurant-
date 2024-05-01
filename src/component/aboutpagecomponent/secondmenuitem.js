import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Images} from '../../assets';
import {color} from '../../style/color';

const Secondmenuitem = () => {
  return (
    <View>
      <View style={styles.secondproductlistone}>
        <Image source={Images.productimaget} />
        <View style={{flexDirection: 'column', marginLeft: 16}}>
          <Text style={styles.secondprodname}>Chai Tea Latte</Text>
          <Text style={styles.proddetail}>
            Black tea infused with cinnamon, clove and other...
          </Text>
          <View style={styles.shoppingbag}>
            <Image source={Images.shoppingbag} />
            <Text style={{color: color.grey}}>$8 USD</Text>
            <Image style={styles.addtocart} source={Images.star} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  secondproductlistone: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 10,
  },
  secondprodname: {
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

export default Secondmenuitem;
