import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./logo-bolo-1.png')} //*imagem adicionada como logo
        style={styles.logo}
      />
      <Text style={styles.title}>Sejam Bem-Vindas!</Text>
      <Text style={styles.login}>Login</Text>
      <Button 
        title="Login" 
        onPress={() => navigation.navigate('Login')} 
        style={styles.button} 
        color="#FFB6C1" // Cor do botão
      />
      <Text style={styles.cadastro}>Caso não tenho o login... se cadastre!</Text>
      <Button 
        title="Cadastre-se" 
        onPress={() => navigation.navigate('Cadastro')} 
        style={styles.button} 
        color="#FFB6C1" // Cor do botão
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'MistyRose', // Fundo preto
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 20,
    resizeMode: 'cover', // Ajustado ao tamanho da imagem desejado
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white', // Texto branco
    marginBottom: 45,
    width: 300,
    alignItems: 'center'
  },
  login: {
    fontSize: 25,
    marginTop: 20,
    color: 'black',
  },
  cadastro: {
    fontSize: 20,
    marginTop: 20,
    color: 'black'
  },
  button: {
    width: 300, // Largura do botão
    height: 50, // Altura do botão
    marginBottom: 10, // Espaçamento inferior
    borderRadius: 20, // Borda arredondada
    justifyContent: 'center', // Centraliza o texto dentro do botão
    alignItems: 'center', // Centraliza o texto dentro do botão
    backgroundColor: 'white', // Cor de fundo do botão
  }
});

export default Home;