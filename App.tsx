import 'react-native-gesture-handler';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Teste from './src/screens/Teste';


type StackNavigatorParamsList ={
  Home: undefined
  Teste: undefined
  Volta: undefined
  headerTitleAlign: undefined
};

const Stack = createStackNavigator<StackNavigatorParamsList>();

export default function App() {
    return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{
          headerShown: false,


        }}/>
        <Stack.Screen name='Teste' component={Teste} options={{
          title: 'Cadastro'

        }}/>
        </Stack.Navigator>
       </NavigationContainer>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'gray',
      padding: 100,
      borderRadius:45,
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
    }
  });