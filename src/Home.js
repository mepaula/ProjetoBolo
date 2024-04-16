import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, StatusBar, Switch } from 'react-native';
import { UserContext } from './Context/UserContext';
import { useBatteryLevel } from "expo-battery";
import * as Newtwork from "expo-network";

export default function Home({ navigation }){

  const { usuario } = useContext(UserContext);
  const [ativado, setAtivado] = useState(false);
  const [cor, setCor] = useState("#fbcafb");
  const [bateria, setBateria] = useState(0);
  const [rede, setRede] = useState(false);

  const batteryLevel = useBatteryLevel();

  async function getStatus() {
    const status = await Newtwork.getNetworkStateAsync();
    if (status.type == "WIFI") {
      setRede(true);
    }
  }

  useEffect(() => {
    getStatus();
  }, []);

  useEffect(() => {
    getStatus();
  }, [rede]);

  useEffect(() => {
    setBateria((batteryLevel * 100).toFixed(0));
  }, [batteryLevel]);

  function CliqueSwitch() {
    setAtivado(!ativado);
    if (!ativado) {
      setCor('white');
    } else {
      setCor('white');
    }
  }

  return (
    <View style={[styles.container, { backgroundColor: cor }]}>
      {bateria > 20 ?
        <Switch
          trackColor={{ false: 'lightgrey', true: 'lightgrey' }}
          thumbColor={ativado ? 'blue' : 'gray'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={CliqueSwitch}
          value={ativado}
        />
        : <Text>Recarregar o celular</Text>
      }
      
      <StatusBar />
      <Text style={styles.title}>Bem-Vinda {usuario}</Text>
      <Image
        source={require('../assets/logo-marca.jpg')}
        style={styles.logo}
      />
      <Text style={styles.login}>Faça o Login</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
        color="#f6b0f7"
      />
      <Text style={styles.cadastro}>Caso não tenho o login... se cadastre!</Text>
      <Button
        title="Cadastre-se"
        onPress={() => navigation.navigate('Cadastro')}
        style={styles.button}
        color="#f6b0f7"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fbcafb',
  },
  logo: {
    width: 240,
    height: 150,
    marginBottom: 15,
    resizeMode: 'cover', // Ajustado ao tamanho da imagem desejado
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black', // Texto branco
    marginBottom: 30,
    width: 170,
    alignItems: 'center'
  },
  login: {
    fontSize: 20,
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