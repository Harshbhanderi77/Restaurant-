import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Splashscreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);
  return (
    <View style={styles.mainconteiner}>
      <Text style={{color: '#000', fontSize: 30, fontWeight: '600'}}>
        Wellcome
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainconteiner: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Splashscreen;
