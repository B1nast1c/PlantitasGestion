import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../Components/Input';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const {height: HEIGHT} = Dimensions.get('window');
const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const Volver = () => {
    const content = {
        "user": username,
        "password": password
    }
    axios.post('http://10.0.2.2:9001/register', content)
    .catch(err => console.log(err))
    setUsername('')
    setPassword('')
    navigation.navigate('LoginScreen');
  };

  return (
    <SafeAreaView>
      <View
        style={{
          height: HEIGHT,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <MaterialCommunityIcons size={125} name="leaf" color={'#607443'} />
        <Text
          style={{
            color: '#607443',
            fontSize: 45,
            fontWeight: 'bold',
            marginBottom: 10,
          }}>
          GreenFriends
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 30,
            opacity: 0.6,
          }}>
          Registrar nuevo usuario
        </Text>
        <Text
          style={{
            alignSelf: 'flex-start',
            marginLeft: 55,
            fontSize: 15,
          }}>
          Usuario
        </Text>
        <Input
          placeholder="Nombre de usuario"
          value={username}
          setValue={setUsername}
        />
        <Text
          style={{
            alignSelf: 'flex-start',
            marginLeft: 55,
            fontSize: 15,
          }}>
          Contraseña
        </Text>
        <Input
          placeholder="Contraseña"
          value={password}
          setValue={setPassword}
        />
        <TouchableOpacity
          style={{
            paddingHorizontal: 50,
            height: 45,
            borderRadius: 25,
            fontSize: 15,
            backgroundColor: '#607443',
            justifyContent: 'center',
            marginLeft: 10,
            marginTop: 25,
          }}
          onPress={() => {Volver()}}
          >
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              textAlign: 'center',
            }}>
            Registrarse
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
