import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {fetch} from 'react-native/Libraries/Network/fetch';
import Ordernumberbox from '../countbox/ordernumberbox';

const Customheader = () => {
  // const [orderCount, setOrderCount] = useState(0);
  // const [isLoading, setLoading] = useState(true);
  // const navigation = useNavigation();
  //
  // const fetchOrderCount = async () => {
  //   try {
  //     const response = await fetch(
  //       'http://192.168.144.23:8585/unique-orders-count',
  //     );
  //     const data = await response.json();
  //     setOrderCount(data.count);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log('Error fetching order count:', error);
  //   }
  // };
  //
  // useEffect(() => {
  //   fetchOrderCount();
  //   const interval = setInterval(fetchOrderCount, 7000);
  //   return () => clearInterval(interval);
  // }, []);

  const navigation = useNavigation();

  const logout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.replace('Login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.mainconteiner}>
      <View style={styles.contentheader}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.screentotal}>Home</Text>
        </View>
        <Ordernumberbox />
        <TouchableOpacity
          onPress={logout}
          style={{
            backgroundColor: '#ff0015',
            borderRadius: 10,
            paddingVertical: 8,
            paddingHorizontal: 16,
          }}>
          <Text style={styles.logoutbtn}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainconteiner: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 70,
  },
  contentheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#c7c6c6',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    position: 'absolute',
    // bottom: 0,
    elevation: 10,
    shadowColor: '#000',
  },
  screentotal: {
    color: '#000',
    fontSize: 20,
    fontWeight: '600',
  },
  logoutbtn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  box: {
    backgroundColor: '#FFA500',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  orderCountText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  orderText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
  },
});

export default Customheader;
