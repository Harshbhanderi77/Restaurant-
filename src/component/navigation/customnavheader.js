import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Images} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const Customnavheader = ({label}) => {
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: '#fff', height: 50}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View
            style={{
              backgroundColor: '#c7c6c6',
              paddingVertical: 6,
              paddingHorizontal: 6,
              borderRadius: 20,
              elevation: 4,
            }}>
            <Image source={Images.leftarrow} style={{height: 24, width: 24}} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 22,
          }}>
          <Text style={styles.screenname}>{label}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFA500',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 18,
    width: '100%',
    position: 'absolute',
    elevation: 20,
    shadowColor: '#000',
  },
  screenname: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Customnavheader;
