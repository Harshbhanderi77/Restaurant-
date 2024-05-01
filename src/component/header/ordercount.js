import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {fetch} from 'react-native/Libraries/Network/fetch';

const Ordercount = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const OrdersCount = async () => {
    try {
      const response = await fetch(
        'http://192.168.50.23:8585/unique-orders-count',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    OrdersCount();
  }, []);
  console.log(data);
  return (
    <View style={styles.box}>
      <Text style={styles.orderCountText}>{Ordercount}</Text>
      <Text style={styles.orderText}>Orders in Progress</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Ordercount;
