import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import bg from '../images/bg.jpg';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const {width: WIDTH} = Dimensions.get('window');
const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState();
  const [token, setToken] = useState();

  const Register = () => {
    navigation.navigate('RegisterScreen');
  };

  const Login = () => {
    const content = {
      user: username,
      password: password,
    };
    const headers = {
      'x-auth-token': 'token'
    }

    const coincidences = users.filter(item => (item.user === username))
    if (coincidences.length > 0) {
      if (coincidences[0].password === password) {
        axios.post('http://10.0.2.2:9001/login', content, { headers: headers })
        .then(res => setToken(res.data.token)) //Set the token
        .catch(err => console.log(err))
        navigation.navigate('Home', {data: token})
      } 
    }
  };

  useEffect(() => {
    axios
      .get('http://10.0.2.2:9001/users')
      .then(res => setUsers(res.data.data))
      .catch(err => console.log(err));
  });

  return (
    <ImageBackground
      source={bg}
      style={{
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          alignItems: 'center',
          marginBottom: 25,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 50,
            fontWeight: '500',
            marginTop: 10,
            opacity: 0.5,
          }}>
          GreenFriends
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
        }}>
        <Icon
          name="ios-person-outline"
          size={28}
          color={'white'}
          style={{
            position: 'absolute',
            top: 8,
            left: 37,
            color: 'white',
          }}
        />
        <TextInput
          style={{
            width: WIDTH - 55,
            height: 45,
            borderRadius: 25,
            fontSize: 15,
            paddingLeft: 45,
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            color: 'rgba(255, 255, 255, 0.7)',
            marginHorizontal: 25,
          }}
          placeholder={'Username'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid="transparent"
          onChangeText={text => setUsername(text)}
        />
      </View>

      <View
        style={{
          marginTop: 10,
        }}>
        <Icon
          name="lock-closed-outline"
          size={28}
          style={{
            position: 'absolute',
            top: 8,
            left: 37,
            color: 'white',
          }}
        />
        <TextInput
          style={{
            width: WIDTH - 55,
            height: 45,
            borderRadius: 25,
            fontSize: 15,
            paddingLeft: 45,
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            color: 'rgba(255, 255, 255, 0.7)',
            marginHorizontal: 25,
          }}
          placeholder={'Password'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid="transparent"
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: 25,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 50,
            height: 45,
            borderRadius: 25,
            fontSize: 15,
            backgroundColor: '#42522f',
            justifyContent: 'center',
            marginRight: 10,
          }}
          onPress={() => {
            Login();
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingHorizontal: 50,
            height: 45,
            borderRadius: 25,
            fontSize: 15,
            backgroundColor: 'rgba(141,150,92,255)',
            justifyContent: 'center',
            marginLeft: 10,
          }}
          onPress={() => {
            Register();
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({});
