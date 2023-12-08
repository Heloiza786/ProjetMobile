import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacityProps, SafeAreaView} from 'react-native';


type Props = {
  data: Pokemon;
} & TouchableOpacityProps

export default function Card({data, ...rest} : Props) {
  return (
    <View style={styles.container}>
      <Text>{data.name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius:45,
    backgroundColor: '#6B8E23',
    alignItems: 'center',
   
    padding:100
   
  },card:{
fontSize:10,
backgroundColor: '#808080',
margin: 8,
width:50,
height:50,
padding: 100 ,
color: '#808080',


  },
});
