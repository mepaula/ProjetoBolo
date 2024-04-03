import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";


export default function Notas({navigation}) 
{
    return(
    <View style={style.container}>
        <Text style={style.title}>Antes de finalizar, de uma nota e comente o que achou do nosso atendimento...</Text>
        <Text style={style.comentar}>Comentários: </Text>
        <TextInput 
            placeholder=''
            style={style.input}
        />
        <Image source={require('../assets/comentarios.jpg')} style={style.notas} />
        <TouchableOpacity>
          <Text style={style.btnText} onPress={() => navigation.navigate('Home')}>Avaliado</Text>
        </TouchableOpacity>
    </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fbcafb', 
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black', // Texto branco
        marginBottom: 5,
        width: 230,
        alignItems: 'center'
    },
    comentar: {
        fontSize: 25,
        marginTop: 15,
        color: 'black',
    },
    input: {
        width: 300, // Largura do botão
        height: 55, // Altura do botão
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
    notas : {
        width: 300,
        height: 290,
        marginBottom: 60,
        resizeMode: 'cover', // Ajustado ao tamanho da imagem desejado
    },
    btnText: {
        width: 230, // Largura do botão
        height: 40, // Altura do botão
        marginBottom: 15, // Espaçamento inferior
        borderRadius: 15, // Borda arredondada
        justifyContent: 'center', // Centraliza o texto dentro do botão
        alignItems: 'center', // Centraliza o texto dentro do botão
        backgroundColor: '#f6b0f7', // Cor de fundo do botão
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
    }
})