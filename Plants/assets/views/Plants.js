import {
  ImageBackground,
  SafeAreaView,
  FlatList,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Plants = ({route}) => {
  const navigation = useNavigation()

  const {data} = route.params;
  const [plants, setPlants] = useState('');
  const [token, setToken] = useState();

  const handleAddProduct = () => {
    navigation.navigate('AddScreen', {data: data.name, token: token})  
  };

  const getPlants = () => {
    axios
      .get('http://10.0.2.2:9000/api/plants')
      .then(res => {
        setToken(res.data.token);
        setPlants(res.data.data.filter(item => item.type === data.name));
        console.log(res)
      })
      .catch(err => {
        console.log('Error', err);
      });
  };

  useEffect(() => {
    //Cuando el componente se monta
    getPlants();
  });

  const PlantsList = ({content, index}) => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: 'row',
        }}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
          {'0' + (index + 1)}
        </Text>
        <View style={{paddingHorizontal: 20, flex: 1}}>
          <Text
            style={{
              fontSize: 20,
              color: '#A0A5BD',
              fontWeight: '500',
            }}>
            {content.name}
          </Text>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            {'S/. ' + content.price}
          </Text>
        </View>
        <View>
          <Icon name="edit" style={{fontSize: 25, color: 'black'}} />
          <TouchableOpacity onPress={() => handleAddProduct()}>
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <ImageBackground
        source={data.image}
        style={{
          height: 400,
          paddingTop: 40,
          paddingRight: 20,
          paddingLeft: 20,
        }}>
        <Text
          style={{color: 'black', fontSize: 25, fontWeight: 'bold', top: 10}}>
          {data.name}
        </Text>
        <View style={{top: 15, flexDirection: 'row'}}>
          <Icon
            name="people"
            size={25}
            style={{color: 'black', marginRight: 5}}
          />
          <Text style={{color: 'black', fontWeight: 'bold'}}>75</Text>
        </View>
        <View style={{flexDirection: 'row', top: 20}}>
          <Icon
            name="star"
            size={25}
            style={{color: 'black', marginRight: 5}}
          />
          <Text style={{color: 'black', fontWeight: 'bold'}}>{data.stars}</Text>
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          marginTop: -35,
          backgroundColor: '#fff',
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          height: '100%',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 25,
            paddingHorizontal: 25,
          }}>
          <Text
            style={{
              marginBottom: 20,
              fontSize: 21,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Productos
          </Text>
          <TouchableOpacity
            onPress={() => {
              handleAddProduct();
            }}>
            <Icon
              name="add"
              size={25}
              style={{color: 'black', marginRight: 5}}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={plants}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('PlantScreen', {data: item});
              }}>
              <PlantsList index={index} content={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Plants;
