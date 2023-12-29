import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity,  StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';  // Importe useNavigation

import Volta from '../Volta/volta';

export default function Teste() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [horario, setHorario] = useState('');
  const [pelagem, setPelagem] = useState('');
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');

  const { navigate } = useNavigation<NavigationProp<any>>();  // Certifique-se de importar useNavigation

  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <Text >Nome:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text >Sobrenome:</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Cpf:</Text>
          <TextInput
            style={styles.input}
            value={cpf}
            onChangeText={(text) => setCpf(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text >Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Horario:</Text>
          <TextInput
            style={styles.input}
            value={horario}
            onChangeText={(text) => setHorario(text)}
          />
        </View>
        <Text > SOBRE O ANIMAL:</Text>
        <View style={styles.inputContainer}>
          <Text >Pelagem:</Text>
          <TextInput
            style={styles.input}
            value={pelagem}
            onChangeText={(text) => setPelagem(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text >Especie:</Text>
          <TextInput
            style={styles.input}
            value={especie}
            onChangeText={(text) => setEspecie(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Raça:</Text>
          <TextInput
            style={styles.input}
            value={raca}
            onChangeText={(text) => setRaca(text)}
          />
        </View>
      </View>

      <TouchableOpacity onPress={() => navigate('Home')}>
        <Volta />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 100,
    backgroundColor: '#F7F7E3',
    
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 30,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 3,
  },
};

