import { View, Text, Button, StyleSheet } from "react-native"

const Login = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Faça o seu Login!</Text>
        <Text style={styles.email}>Email ou CPF:</Text>
        <Button 
          title="Email" 
          onPress={() => navigation.navigate('Email')} 
          style={styles.button} 
          color="#FFB6C1" // Cor do botão
        />
        <Text style={styles.telefone}>Telefone:</Text>
        <Button 
          title="Telefone" 
          onPress={() => navigation.navigate('Telefone')} 
          style={styles.button} 
          color="#FFB6C1" // Cor do botão
        />
        <Text style={styles.senha}>Senha:</Text>
        <Button 
          title="Senha" 
          onPress={() => navigation.navigate('Senha')} 
          style={styles.button} 
          color="#FFB6C1" // Cor do botão
        />
        <Button 
          title="Acessar" 
          onPress={() => navigation.navigate('Acessar')} 
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
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'black', // Texto branco
      marginBottom: 45,
      width: 300,
      alignItems: 'center'
    },
    email: {
      fontSize: 25,
      marginTop: 20,
      color: 'black',
    },
    telefone: {
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
    },
    senha: {
        fontSize: 20,
        marginTop: 20,
        color: 'black'
    },
    acessar: {
        fontSize: 20,
        marginTop: 20,
        color: 'black'
    },
  });

export default Login;