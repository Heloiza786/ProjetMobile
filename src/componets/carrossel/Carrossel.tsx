import { Text, View, StyleSheet, TouchableOpacityProps, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import ImageFundo from '../../../assets/paisagem.jpg';
// import bullets from '../../services/bullets';

type Props = {
    data: Pokemon[];
} & TouchableOpacityProps

export default function Carrossel({data, ...rest} : Props){
    const poke = data.map((item) => {
        return item
    })

    return(

        <View>
            <Carousel 
            containerCustomStyle={{ overflow: 'visible' }}
            data={poke}
            renderItem={({item}) => {
                    return(
                        <View style={styles.itemView}>
                            <ImageBackground source={ImageFundo} 
                            style={styles.backgroundImg}
                            blurRadius={80}
                            borderRadius={20}
                            >
                                <Text style={styles.backgroundText}>{item.name}</Text>
                            </ImageBackground>
                        </View>
                    )}
                }
            inactiveSlideOpacity={0.75} // opacidade de ítens inativos
            inactiveSlideScale={0.77} // tamanho dos ítens inativos
            sliderWidth={400} // tamanho do slider
            itemWidth={200} // tamanho do ítem
            slideStyle={{ display: 'flex', alignItems: 'center' }}            
            />
        </View>
    );
}

const styles = StyleSheet.create({
    itemView: {
        flex: 1,
        backgroundColor: 'white',
        width: 200,
        height: 300,
        borderRadius: 20        
    },
    backgroundImg: {
        flex: 1,
        blur: 0.75,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'        
    },
    backgroundText: {
        color: 'white',
        fontSize: 20,
        padding: 10
    }
})