import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import {Images} from '../../assets';
import {color} from '../../style/color';
import Cart from './cart';
import Customnavheader from './customnavheader';
// import {Modal} from 'react-native-modal';
const Payment = ({route}) => {
  const {totalAmount} = route.params;
  const [modelVisible, setModalVisible] = useState(false);

  return (
    <View style={{flex: 1}}>
      <Modal
        transparent={true}
        animationType={'slide'}
        visible={modelVisible}
        onPress={() => setModalVisible(!modelVisible)}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              paddingHorizontal: 35,
              paddingVertical: 25,
              elevation: 20,
            }}>
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
                // backgroundColor: 'red',
              }}>
              <TouchableOpacity onPress={() => setModalVisible(!modelVisible)}>
                <Image
                  source={Images.closebutton}
                  style={{height: 24, width: 20}}
                />
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image
                source={Images.completepay}
                style={{width: 150, height: 150, marginVertical: 10}}
              />
              <Text
                style={{
                  color: '#000',
                  fontWeight: '600',
                  fontSize: 22,
                  marginTop: 10,
                }}>
                Paymeny Complete
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      <View>
        <Customnavheader label={'Payment'} />
        <View
          style={{
            flexDirection: 'row',
            // alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 14,
            marginLeft: 12,
            marginRight: 12,
            backgroundColor: '#c3c7c7',
            borderRadius: 10,
            paddingVertical: 12,
            paddingHorizontal: 24,
            elevation: 10,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              fontWeight: '600',
              // marginLeft: 10,
            }}>
            Total
          </Text>
          <Text
            style={{
              color: '#000',
              fontSize: 20,
              fontWeight: '600',
              // marginRight: 12,
            }}>
            Rs.{totalAmount}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginRight: 10,
            marginLeft: 10,
            marginTop: 14,
            borderRadius: 15,
            paddingLeft: 16,
            elevation: 8,
          }}>
          <Image source={Images.googlepay} style={{width: 50, height: 50}} />
        </View>
        <View style={{marginTop: 30, alignItems: 'center'}}>
          <Pressable
            style={{
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.paynow}>Pay now</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paynow: {
    color: '#000',
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    fontWeight: '600',
    borderRadius: 15,
    elevation: 2,
  },
});

export default Payment;
