import React from 'react';
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import bullets from "../../services/bullets";
import { Image, Text, View, StyleSheet } from 'react-native';

export default function Bullets() {
  return (
    <View style={styles.bulletView}>
      {bullets.map((item, index) => {
        return (
          <TouchableOpacity style={styles.touchableBtn} key={index}>
            <Text style={styles.touchText}>{item.name}</Text>
            <Text style={styles.touchText}>{item.lastName}</Text>
            <Text style={styles.touchText}>{item.cpf}</Text>
            <Text style={styles.touchText}>{item.email}</Text>
            <Text style={styles.touchText}>{item.horario}</Text>
            <Text style={styles.touchText}>{item.pelagem}</Text>
            <Text style={styles.touchText}>{item.especie}</Text>
            <Text style={styles.touchText}>{item.raca}</Text>
            
          </TouchableOpacity>
        );
      })}
    </View>
  );

}

const styles = StyleSheet.create({
  bulletView: {
    flexDirection: 'row',
  },
  touchableBtn: {
    backgroundColor: 'white',
    borderRadius: 45,
    padding: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchText: {
    fontSize: 20,
  },
  backgroundImage: {
    width: 50, // Ajuste o tamanho conforme necessário
    height: 50, // Ajuste o tamanho conforme necessário
    marginVertical: 5,
  },
});
