import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function InputData() {
  const [inputValue, setInputValue] = useState('');

  return (
    <View>
    
      <TextInput style = {styles.setText}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
    
      />
      <TextInput></TextInput>

      <Text style = {styles.text}>{inputValue}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
setText: {
    fontSize:16,
    backgroundColor:'#dcdcdc',
    elevation:5,
    borderRadius:45,

},  text:{
    fontSize:25,
    padding:10,
}
})





  
    
    


