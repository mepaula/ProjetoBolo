import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Cadastro({navigation})
{
    return(
    <View style={style.container}>
        <Text style={style.title}>Faça o cadastro!</Text>
        <Text style={style.nome}>Nome:</Text>
        <TextInput 
            placeholder=''
            style={style.input} 
        />
        <Text style={style.email}>Email:</Text>
        <TextInput 
            placeholder=''
            style={style.input} 
        />
        <Text style={style.celular}>Telefone</Text>
        <TextInput 
            placeholder=''
            style={style.input} 
        />
        <Text style={style.senha}>Senha:</Text>
        <TextInput 
            placeholder='' 
            style={style.input}
        />
        <TouchableOpacity>
          <Text style={style.btnText} onPress={() => navigation.navigate('Itens')}>Cadastro Feito</Text>
        </TouchableOpacity>
    </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fbcafb', 
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black', // Texto branco
        marginBottom: 15,
        width: 150,
        alignItems: 'center'
    },
    input: {
        width: 300, // Largura do botão
        height: 45, // Altura do botão
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
    nome: {
        fontSize: 25,
        marginTop: 10,
        color: 'black',
    },
    email: {
        fontSize: 25,
        marginTop: 10,
        color: 'black',
    },
    celular: {
        fontSize: 25,
        marginTop: 10,
        color: 'black',
    },
    senha: {
        fontSize: 25,
        marginTop: 10,
        color: 'black',
    },
    btnText: {
        width: 230, // Largura do botão
        height: 45, // Altura do botão
        marginBottom: 15, // Espaçamento inferior
        borderRadius: 15, // Borda arredondada
        justifyContent: 'center', // Centraliza o texto dentro do botão
        alignItems: 'center', // Centraliza o texto dentro do botão
        backgroundColor: '#f6b0f7', // Cor de fundo do botão
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
    },
})