import {Image, TextInput, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Plant = ({route, navigation}) => {
  const nav = useNavigation();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const data = route.params.data;
  const id = data._id;

  const Update = () => {
    const headers = {
      'x-auth-token': route.key,
    };
    const content = {
      name: name,
      price: price,
    };

    axios
      .put('http://10.0.2.2:9000/api/plant/' + id, content, {headers: headers})
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const Delete = () => {
    const headers = {
      'x-auth-token': route.key,
    };
    axios
      .delete('http://10.0.2.2:9000/api/plant/' + id, {headers: headers})
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    nav.navigate('Home');
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: 'white',
          height: '100%',
        }}>
        <Image
          source={require('../images/edit.jpg')}
          style={{
            width: '100%',
            height: '43%',
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'black',
              alignSelf: 'center',
            }}>
            Gestionar Producto
          </Text>
          <Text
            style={{
              marginHorizontal: 55,
              textAlign: 'center',
              marginTop: 5,
              color: 'black',
              opacity: 0.4,
            }}>
            Modifica este producto, y deja que el resto lo vea tus cambios en
            nuestra tienda de plantas! :D
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 55,
            borderWidth: 1,
            marginTop: 30,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            borderRadius: 50,
            paddingVertical: 2,
          }}>
          <Text
            style={{
              marginLeft: 15,
              fontWeight: 'bold',
              color: 'black',
              fontSize: 16,
            }}>
            Nombre:{' '}
          </Text>
          <TextInput
            placeholder={data.name}
            placeholderTextColor={'gray'}
            style={{paddingHorizontal: 10, color: 'gray', fontSize: 15}}
            onChangeText={text => setName(text)}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 55,
            borderWidth: 1,
            marginTop: 15,
            paddingHorizontal: 10,
            borderColor: '#00716F',
            borderRadius: 50,
            paddingVertical: 2,
          }}>
          <Text
            style={{
              marginLeft: 15,
              fontWeight: 'bold',
              color: 'black',
              fontSize: 16,
            }}>
            Precio:{' '}
          </Text>
          <TextInput
            placeholder={data.price.toString()}
            placeholderTextColor={'gray'}
            style={{paddingHorizontal: 10, color: 'gray', fontSize: 15}}
            onChangeText={text => setPrice(text)}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            Update();
          }}>
          <View
            style={{
              marginHorizontal: 55,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 25,
              backgroundColor: '#00716F',
              paddingVertical: 10,
              borderRadius: 50,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              Actualizar
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Delete();
          }}>
          <View
            style={{
              marginHorizontal: 55,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
              backgroundColor: '#dc3545',
              paddingVertical: 10,
              borderRadius: 50,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
              }}>
              Eliminar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Plant;
