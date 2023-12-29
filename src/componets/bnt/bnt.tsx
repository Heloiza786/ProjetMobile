import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Btn(){
    return(
       <View>
        <TouchableOpacity style={style.bntTExt}>
            <Text> Botão teste </Text>
        </TouchableOpacity>
       </View> 
    )
}

const style = StyleSheet.create({
    bntTExt:{
        backgroundColor:'white',
        height: 80,
        borderRadius: 50,
        padding:20,
        margin:50,
        elevation:5,
    }
}

)