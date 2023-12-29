import { StatusBar } from 'expo-status-bar';
import { Image,ImageBackground, StyleSheet, Text, View} from 'react-native';
import{ SafeAreaView } from 'react-native-safe-area-context';
import bullets from '../../services/bullets';
import Bullets from '../../componets/bullets/Bullets';
import ImageFundoBullets from '../../../assets/images.jpg';
import ImagesPets from '../../../assets/Group.jpg';

import { ScrollView } from 'react-native-gesture-handler';
import { SearchBar } from 'react-native-screens';
import { FontAwesome } from '@expo/vector-icons'; 



export default function Header(){
    return(

    <SafeAreaView
    //  style={styles.headerView}
    >
        <StatusBar style='auto'/>
       
        
    
        <View style={styles.headerTopElemnets}>
        {/* <FontAwesome name="user-circle-o" size={24} color="black" /> */}
            {/* <Text> Esse é um teste tela </Text> */}
         <Image source={ImagesPets} style={styles.backgroundImage} />




            {/* <FontAwesome name="bell-o" size={24} color="black" />
        </View>
        <View style={styles.searchBar}> */}
        {/* <Image source={ImageFundoBullets} style={styles.backgroundImage}/> */}
        
   


        </View>
    </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    headerView:{
    backgroundColor:'black',


    },
    backgroundImage:{
       
            // flex: 1,
            // resizeMode: 'cover', 
            // position: 'absolute',
            // width: '100%',
            // height: '400%',
            // zIndex: -1,



            width: 700,  // Ajuste a largura desejada
            height: 200, // Ajuste a altura desejada
            marginLeft: 'auto', // Posiciona a imagem no canto direito
            marginRight: 10,
    },
    searchBar:{
        marginVertical:10,

    },
    headerTopElemnets:{
        marginVertical:10,
    }
});

