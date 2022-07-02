import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import categorias from '../consts/categorias';
import {useNavigation} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
  const nav = useNavigation()

  const Logout = () => {
    nav.navigate('LoginScreen')
  }

  const CourseCard = ({course}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('PlantsScreen', {data: course})}>
        <ImageBackground
          source={course.image}
          style={{
            marginVertical: 10,
            marginHorizontal: 5,
            borderRadius: 50,
            width: windowWidth / 2 - 30,
            height: windowHeight / 4,
            paddingTop: 25,
            paddingLeft: 20,
            borderRadius: 15,
            overflow: 'hidden',
          }}>
          <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end'
          }}
          >
            <Text
              style={{
                marginTop: 110,
                fontSize: 20,
                fontWeight: 'bold',
                paddingBottom: 5,
                color: 'black',
              }}>
              {course.name}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{backgroundColor: 'white', flex: 1, paddingHorizontal: 20}}>
      <View style={{marginTop: 20}}>
      <TouchableOpacity
          style={{
            width: '20%',
            height: 25,
            borderRadius: 25,
            fontSize: 15,
            backgroundColor: '#dc3545',
            justifyContent: 'center',
            alignSelf: 'flex-end'      
          }}
          onPress={() => {
            Logout();
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 13,
              textAlign: 'center',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: 'black'}}>
          Hey You!,
        </Text>
        <Text style={{fontSize: 22, color: 'gray', marginTop: 10}}>
          Encuentra tu planta favorita
        </Text>
        <View
          style={{
            height: 60,
            marginTop: 35,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 15,
            backgroundColor: '#f5f5f7',
            borderRadius: 30,
            alignContent: 'center',
            flexDirection: 'row',
          }}>
          <Icon name="search" size={30} color={'black'}/>
          <TextInput
            style={{fontSize: 18, marginLeft: 5}}
            placeholder="Busca tu planta"
            placeholderTextColor="gray"
          />
        </View>
        <View
          style={{
            paddingVertical: 25,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Categorias</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: '#6e8afa'}}>
            Ver Todo
          </Text>
        </View>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={categorias}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <CourseCard course={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
