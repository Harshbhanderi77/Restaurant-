/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  AsyncStorage,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Mainslider from './src/component/mainslider';
import Heading from './src/component/heading';
import Searchbar from './src/component/searchbar';
import Secondslider from './src/component/secondslider';
import Dishcatagari from './src/component/dishcatagari';
import Seconddish from './src/component/seconddish';
import {useNavigation} from '@react-navigation/native';
import Customheader from './src/component/customheader';

const App: () => Node = () => {
  const navigation = useNavigation();
  const logout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.replace('Login');
    } catch (error) {
      console.log(error);
    }
  };

  // const logout = async () => {
  //   try {
  //     // const keys = ['accessToken', 'otherUserData'];
  //
  //     await AsyncStorage.multiRemove(keys);
  //     navigation.navigate('Login');
  //   } catch (error) {
  //     console.error('Error logging out:', error);
  //   }
  // };

  React.useLayoutEffect(() =>
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            marginRight: 14,
          }}>
          <TouchableOpacity onPress={logout}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: '600',
                backgroundColor: 'red',
                borderRadius: 10,
                paddingVertical: 6,
                paddingHorizontal: 20,
                elevation: 14,
              }}>
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      ),
    }),
  );
  return (
    <View style={styles.sectionContainer}>
      <Customheader />
      <Searchbar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 2}}>
        <Mainslider />
        <Secondslider />
        <Dishcatagari />
        <Seconddish />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    // marginTop: 0,
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default App;
