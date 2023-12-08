import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Home from '../Home';
import Volta from '../Volta/volta';

export default function Teste() {
  const { navigate } = useNavigation<NavigationProp<any>>();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textStyle}>Tela home</Text>
      <TouchableOpacity onPress={() => navigate("Home")}>
        <Volta></Volta>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white', // Set your desired background color
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});

