import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

export default function SearchBar(){
    return(
        <View style={styles.searchBarContainer}>
            <Text> SearchBar</Text>
            <Entypo name="magnifying-glass" size={24} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    searchBarContainer:{
        flexDirection: 'row',
        backgroundColor: '#456789',
        borderRadius: 45,
        paddingHorizontal: 15,
        marginHorizontal: 25,
        marginVertical: 25,
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

