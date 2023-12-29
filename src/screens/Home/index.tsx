import { StatusBar } from 'expo-status-bar';
import {  ScrollView, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
// import Btn from '../../componets/bnt/bnt';
import InputData from '../../componets/card/inputData/InputData';
import Card from '../../componets/card/card/Card';
import Carrossel from '../../componets/carrossel/Carrossel';
import  Header  from '../Header/header';
import Bullets from '../../componets/bullets/Bullets';
import Volta from '../Volta/volta';
import Rodape from '../../componets/rodape/Rodape';
import SearchBar from '../../searchBar/Search';
import ImageCatefory from '../../../assets/category.jpg';
import imagePet2 from '../../../assets/pet2.png';

import { useNavigation, NavigationProp} from '@react-navigation/native';
import { getAllUser,  } from '../../controllers/userController';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';



export default function Home() {
  const { navigate } = useNavigation<NavigationProp<any>>();

  const [usuario, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    // getAllPokemon().then(setPokemons).catch((err) => {console.log(err)});
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Carrossel data={usuario} />
        <Header />
        <Volta></Volta>
        <ScrollView horizontal={true}>
          <View style={styles.scrollNoHeader}></View>
        </ScrollView>

        <TouchableOpacity style={styles.btnContainer} onPress={() => navigate('Teste')}>
          <Image source={require('../../../assets/pet2.png')} style={styles.image} />
        </TouchableOpacity>

      </View>
      <Rodape />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollNoHeader: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 50,
  },
  textText: {
    backgroundColor: 'white',
    fontSize: 24,
    fontFamily: 'Impact, fantasy',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  Statusbar: {
    backgroundColor: 'black',
    color: 'white',
  },
  safeAreaContainer: {
    padding: 15,
  },
  rodapeScreen: {},
  btnContainer: {
    width: '50%', // Defina a largura desejada
    height: 200, // Defina a altura desejada
    alignSelf: 'center', // Para centralizar o botão
    marginVertical: 20, // Adicione um espaçamento vertical
  },
  image: {
    width: '50%', // Ajuste conforme necessário
    height: '60%', // Ajuste conforme necessário
  },
});
