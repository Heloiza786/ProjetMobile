import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Home from '../Home/index';
import Header from '../Header/header';

export default function Volta() {
  const { navigate } = useNavigation<NavigationProp<any>>();

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.textStyle}>
{/* TESTE VOLTA */}
  {/* name:
  lastName: 
  cpf: 
  email: 
  horario: 
  pelagem: 
  especie: 
  raca:
       */}
      
      
      </Text>
      <TouchableOpacity onPress={() => navigate("Volta")}>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: 'green', 
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

