import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import IMAGEM1 from '../../../assets/rodape.jpg';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image source={IMAGEM1} style={styles.backgroundImage1} />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f0f0f0', // Cor de fundo do rodapé
  },
  backgroundImage1: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%', // Ajusta a largura para ocupar toda a largura da tela
    height: 100, // Defina a altura desejada
    resizeMode: 'cover', // Certifique-se de ajustar a propriedade de redimensionamento conforme necessário
  },
});

export default Footer;
