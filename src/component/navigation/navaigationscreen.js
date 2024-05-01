import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  AsyncStorage,
  Alert,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import App from '../../../App';
import Mainslider from '../mainslider';
import Popularitemone from './popularitemone';
import Seconddish from '../seconddish';
import Popularitemtwo from './popularitemtwo';
import Panjabicategori from './panjabicategori';
import Itemcategori from './itemcategori';
import {Images} from '../../assets';
import Cart from './cart';
import Payment from './payment';
import Splashscreen from './splashscreen';
import Ordercount from '../header/ordercount';
import Ordernumberbox from '../../countbox/ordernumberbox';

const Login = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [name, setName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validation = () => {
    let isValid = true;

    if (!name) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }

    if (!phonenumber || phonenumber.length !== 10) {
      setPhoneNumberError(true);
      isValid = false;
    } else {
      setPhoneNumberError(false);
    }

    if (!password || password.length < 8) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }
    return isValid;
  };

  const loginform = async () => {
    if (!validation()) {
      return;
    }

    try {
      const response = await fetch('http://192.168.125.23:1411/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          phoneNumber: phonenumber,
          password: password,
        }),
      });

      if (response.ok) {
        clearLoginData();
        navigation.replace('App');
        console.log('login');
      } else {
        const errorData = await response.json();
        console.log(errorData.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearLoginData = () => {
    setName('');
    setPhoneNumber('');
    setPassword('');
  };
  useEffect(() => {
    clearLoginData();
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text style={styles.home}>Login screen</Text>

      <View style={{width: '80%'}}>
        <View style={styles.enterdetail}>
          <TextInput
            style={{color: '#000', marginLeft: 14}}
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
            placeholderTextColor={'#423f3f'}
          />
        </View>
        {nameError ? (
          <Text style={styles.inputerror}>
            Please enter your Name
            {typeof name === 'string' ? name : ''}
          </Text>
        ) : null}
      </View>

      <View style={{width: '80%'}}>
        <View style={styles.enterdetail}>
          <TextInput
            style={{color: '#000', marginLeft: 14}}
            placeholder="Phone No."
            // textContentType="telephoneNumber"
            keyboardType="phone-pad"
            value={phonenumber}
            maxLength={10}
            onChangeText={text => setPhoneNumber(text)}
            placeholderTextColor={'#423f3f'}
          />
        </View>
        {phoneNumberError ? (
          <Text style={styles.inputerror}>Please enter your PhoneNumber</Text>
        ) : null}
      </View>

      <View style={{width: '80%'}}>
        <View
          style={{
            backgroundColor: '#d2d1d1',
            borderRadius: 15,
            marginTop: 20,
            // padding: 2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            elevation: 4,
          }}>
          <TextInput
            style={{
              color: '#000',
              marginLeft: 14,
              width: '75%',
            }}
            placeholder="Password"
            value={password}
            maxLength={8}
            textContentType={password}
            secureTextEntry={!showPassword}
            onChangeText={text => setPassword(text)}
            placeholderTextColor={'#423f3f'}
          />
          <TouchableOpacity onPress={toggleShowPassword}>
            <Image
              source={showPassword ? Images.hiddenss : Images.showss}
              style={{width: 20, height: 20, marginRight: 24}}
            />
          </TouchableOpacity>
        </View>
        {passwordError ? (
          <Text style={styles.inputerror}>Please enter your Password</Text>
        ) : null}
      </View>

      <View style={{marginTop: 30}}>
        <TouchableOpacity onPress={loginform}>
          {/*<TouchableOpacity onPress={() => navigation.replace('App')}>*/}
          <Text style={styles.login}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginTop: 50, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('App')}>
          <Image
            source={Images.google}
            style={{height: 30, width: 30, marginRight: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={Images.instagram}
            style={{height: 30, width: 30, marginRight: 20}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Images.youtube} style={{height: 30, width: 30}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    fontSize: 30,
    fontWeight: '600',
    color: '#000',
    marginTop: 50,
  },
  login: {
    color: '#000',
    backgroundColor: '#FFA500',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 60,
    fontSize: 18,
    fontWeight: '600',
    // marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enterdetail: {
    backgroundColor: '#d2d1d1',
    borderRadius: 15,
    marginTop: 20,
    // padding: 2,
    elevation: 4,
  },
  inputerror: {
    color: 'red',
    marginLeft: 10,
    marginTop: 2,
    fontSize: 14,
  },
});

const Navaigationscreen = () => {
  const Stack = createNativeStackNavigator();

  const myoptions = {
    title: 'Home',
    headerTintColor: '#000',
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#FFA500',
      borderBottomRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderColor: 'red',
      borderWidth: 4,
    },
    headerTitleStyle: {
      fontSize: 20,
    },
    headerTitleContainerStyle: {
      borderBottomWidth: 4,
      borderBottomColor: '#000',
    },
  };

  return (
    <NavigationContainer initialRoutname={Splashscreen}>
      <Stack.Navigator
        screenOptions={{headerTintColor: '#000', headerShown: false}}>
        {/*<Stack.Screen name="Ordernumberbox" component={Ordernumberbox} />*/}
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Navaigationscreen" component={Navaigationscreen} />
        <Stack.Screen
          name="App"
          component={App}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Mainslider" component={Mainslider} />
        <Stack.Screen
          name="Itemcategori"
          component={Itemcategori}
          options={{...myoptions, title: 'Itemcategori', headerShown: false}}
        />
        <Stack.Screen
          name="Popularitemone"
          component={Popularitemone}
          options={{...myoptions, title: 'Popularitemone'}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{...myoptions, title: 'Cart'}}
        />
        <Stack.Screen name="Seconddish" component={Seconddish} />
        <Stack.Screen
          name="Popularitemtwo"
          component={Popularitemtwo}
          options={{...myoptions, title: 'Popularitemtwo'}}
        />
        <Stack.Screen name="Panjabicategori" component={Panjabicategori} />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{...myoptions, title: 'Payment'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navaigationscreen;
