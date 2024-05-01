import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Images} from '../assets';
import {color} from '../style/color';
import {fetch} from 'react-native/Libraries/Network/fetch';

const Heading = () => {
  const [orderCount, setOrderCount] = useState(101);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrderCount(orderCount + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [orderCount]);

  //   const fecthordercount = async () => {
  //     try {
  //       const response = await fetch(
  //         'http://192.168.108.23:8585/unique-orders-count',
  //       );
  //       const data = await response.json();
  //       setOrderCount(data.count);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //
  //   fecthordercount();
  //   const interval = setInterval(fetchOrderInProgress, 60000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const fetchOrderCount = async () => {
      try {
        const response = await fetch(
          'http://192.168.108.23:8585/unique-orders-count',
        );
        const data = await response.json();
        setOrderCount(data.count);
      } catch (error) {
        console.log(error);
      }
    };

    const interval = setInterval(() => {
      fetchOrderCount();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#f3f3f3',
      }}>
      <View style={styles.container}>
        <Text style={styles.logoname}>Inicio</Text>
        <View style={styles.box}>
          <Text style={styles.orderCountText}>1234{orderCount}</Text>
          <Text style={styles.orderText}>Orders in Progress</Text>
        </View>
        {/*<Image source={Images.avatar} />*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoname: {
    fontSize: 46,
    color: color.gray2,
    fontWeight: '700',
  },
  box: {
    backgroundColor: '#FFA500',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 8,
  },
  orderCountText: {
    fontSize: 10,
    fontWeight: '500',
    color: '#000',
  },
  orderText: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
  },
});

export default Heading;
