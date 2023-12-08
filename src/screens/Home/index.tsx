import { StatusBar } from 'expo-status-bar';
import {  ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Btn from '../../componets/card/btn/Btn';
import InputData from '../../componets/card/inputData/InputData';
import Card from '../../componets/card/Card';
import { useNavigation, NavigationProp} from '@react-navigation/native';
import { getAllPokemon } from '../../controllers/pokemonController';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';


export default function Home() {

    const { navigate } = useNavigation<NavigationProp<any>>();

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() =>{
      getAllPokemon().then(setPokemons).catch((err) => {console.log(err)});
    })
  
    return (

          <View style= {styles.container}>
             <Btn></Btn>
          <Text style= {styles.textText}>HELOIZA CUSTODIO</Text>
          <Text style= {styles.scroll}>Heloiza</Text>
         <InputData />
          <TouchableOpacity onPress= {() => navigate("Teste")}>
            <Text> Ir para a tela teste</Text>
          </TouchableOpacity>
          <FlatList 
          data={pokemons}
          keyExtractor={pokemon => pokemon.name}
          renderItem={({item: pokemons}) => (
            <Card data={pokemons} />
          )}/>
        
            
          {/* </FlatList> */}
          {/* <Card/>
          <Card/>
          <Text style={styles.textText}> Rodape </Text> */}
        </View>
       
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'gray',
 
   
    },
    scroll:{
     flex:1,
     padddiingLeft:15,
     paddingRight: 15,
     paddingBootom: 50,
     },
      textText:{
      backgroundColor:'black',
  
  
    },
     Statusbar:{
     backgroundColor:'black',
     color: 'white',
     },
     safeAreaContainer:{
     padding:15,
    },
   
  });