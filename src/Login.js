import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from "./Context/UserContext";

export default function Login({ navigation }) {

  const[ email, setEmail ] = useState("");
  const[ senha, setSenha ] = useState("");
  const[ erro, setErro ] = useState( false );

  const {Login} = useContext( UserContext );

  async function realizaLogin()
  {
      Login( email, senha );
  }

    return (
      <View style={styles.container}>
        <Image
        source={require('../assets/foto-login.jpg')} //*imagem adicionada como logo
        style={styles.foto}
      />
        <Text style={styles.title}>Faça o seu Login!</Text>
        <Text style={styles.email}>Email ou CPF:</Text>
        <TextInput 
        placeholder='Email ou CPF' 
        style={styles.input}
        value={email}
        onChangeText={ (digitado) => setEmail( digitado )}
        />
        <Text style={styles.senha}>Senha:</Text>
        <TextInput
        placeholder='Senha'
        style={styles.input}
        value={senha}
        onChangeText={ (digitado) => setSenha( digitado)}
        />
        <TouchableOpacity onPress={realizaLogin}>
          <Text style={styles.btnText} onPress={() => navigation.navigate('Home')}>Login Feito</Text>
        </TouchableOpacity>
        {erro && <Text>Email ou senha está incorreta</Text>}
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
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'black', // Texto branco
      marginBottom: 45,
      width: 200,
      alignItems: 'center'
    },
    email: {
      fontSize: 20,
      marginTop: 20,
      color: 'black',
    },
    input: {
      width: 300, // Largura do botão
      height: 50, // Altura do botão
      marginBottom: 10, // Espaçamento inferior
      borderRadius: 20, // Borda arredondada
      justifyContent: 'center', // Centraliza o texto dentro do botão
      alignItems: 'center', // Centraliza o texto dentro do botão
      backgroundColor: 'white', // Cor de fundo do botão
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 20,
      color: "black",
    },
    senha: {
        fontSize: 20,
        marginTop: 20,
        color: 'black',
    },
    btnText: {
      width: 220, // Largura do botão
      height: 50, // Altura do botão
      marginBottom: 30, // Espaçamento inferior
      borderRadius: 50, // Borda arredondada
      justifyContent: 'center', // Centraliza o texto dentro do botão
      alignItems: 'center', // Centraliza o texto dentro do botão
      backgroundColor: 'black', // Cor de fundo do botão
      color: 'white',
      textAlign: 'center',
      fontSize: 30
    },
    foto: {
      width: 200,
      height: 150,
      marginBottom: 20,
      resizeMode: 'contain', // Ajustado ao tamanho da imagem desejado
    }
  });
