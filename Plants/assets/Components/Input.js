import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({value, setValue, placeholder}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '75%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 10,
        marginVertical: 7,
      }}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
