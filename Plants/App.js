import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Home from './assets/views/Home.js';
import Plants from './assets/views/Plants.js';
import Login from './assets/views/Login.js';
import Register from './assets/views/Register.js';
import Plant from './assets/views/Plant.js';
import Add from './assets/views/Add.js';
import {Image, View, TouchableOpacity} from 'react-native';
const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{title: '', headerStyle: {elevation: 0}}}>
        <stack.Screen
          name="LoginScreen"
          component={Login}
          options={({navigation}) => ({
            headerTransparent: true,
          })}></stack.Screen>
        <stack.Screen
          name="RegisterScreen"
          component={Register}
          options={({navigation}) => ({
            headerTransparent: true,
          })}></stack.Screen>
        <stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: () => (
              <TouchableOpacity>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="arrow-back"
                    size={25}
                    style={{marginLeft: 20}}
                    color={'black'}
                  />
                </View>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <Image
                source={{
                  uri: 'https://64.media.tumblr.com/470b3c010493f25f4a92268c759c4f6f/2706c30ab40da02d-82/s1280x1920/0d367905b9674ccecdaf07abba245953c973f2a0.jpg',
                }}
                style={{
                  height: 40,
                  width: 40,
                  marginRight: 20,
                  borderRadius: 100,
                }}
              />
            ),
          }}></stack.Screen>
        <stack.Screen
          name="PlantsScreen"
          component={Plants}
          options={({navigation}) => ({
            headerTransparent: true,
          })}></stack.Screen>

        <stack.Screen
          name="PlantScreen"
          component={Plant}
          options={({navigation}) => ({
            headerTransparent: true,
          })}></stack.Screen>

        <stack.Screen
          name="AddScreen"
          component={Add}
          options={({navigation}) => ({
            headerTransparent: true,
          })}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
