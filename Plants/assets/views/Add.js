import {StatusBar, Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const Add = ({route}) => {
    const {data} = route.params; //Nombre de la categoria
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const addPlant = () => {
        const headers = {
            'x-auth-token': route.key
        }
        const content = {
            name: name,
            type: route.params.data,
            price: price
        }
        
        console.log(name, price)

        //Petición
        axios.post('http://10.0.2.2:9000/api/plant', content, { headers: headers })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        setName('')
        setPrice('')
    }

  return (
    <View style={{flex: 1, backgroundColor: '#42522f'}}>
      <StatusBar backgroundColor="#42522f" barStyle="light-content" />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: 20,
          paddingBottom: 50,
        }}>
        <Text
          style={{
            color: '#efefef',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          Añadir Producto
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingHorizontal: 65,
          paddingVertical: 50,
        }}>
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#42522f',
                fontSize: 20,
                marginRight: 10,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Nombre:
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 50,
              paddingHorizontal: 10,
              marginVertical: 8,
              marginBottom: 15,
            }}>
            <TextInput
              placeholder="Nombre de la plantita..."
              placeholderTextColor="#666666"
              autoCapitalize="none"
              onChangeText={text => setName(text)}
            />
          </View>
          <Text
            style={{
              color: '#42522f',
              fontSize: 20,
              marginRight: 10,
              fontWeight: 'bold',
            }}>
            Precio:
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              borderColor: 'black',
              borderWidth: 1,
              borderRadius: 50,
              paddingHorizontal: 10,
              marginVertical: 8,
              marginBottom: 25,
            }}>
            <TextInput
              placeholder="Precio de la plantita..."
              placeholderTextColor="#666666"
              autoCapitalize="none"
              onChangeText={text => setPrice(text)}
            />
          </View>
        </View>
        <TouchableOpacity
          style={{
            paddingHorizontal: 50,
            height: 45,
            borderRadius: 25,
            fontSize: 15,
            backgroundColor: '#42522f',
            justifyContent: 'center',
          }}
          onPress={() => {
            addPlant();
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
            Añadir Producto
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Add;
