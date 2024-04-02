import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

export default function Pagamento()
{
    return(
        <View style={style.container}>
        <Text style={style.title}>Formas de Pagar:</Text>
        <Text style={style.input}>Cartão de Crédito e Debito:</Text>
        <Image source={require('../assets/foto-cartao.jpeg')} style={style.cartao} />
        <Text style={style.input}>Pix:</Text>
        <Image source={require('../assets/foto-pix.webp')} style={style.pix}/>
        <Text style={style.input}>Dinheiro:</Text>
        <Image source={require('../assets/foto-dinheiro.jpg')} style={style.dinheiro}/>
        <TouchableOpacity>
          <Text style={style.btnText}>Finalizar</Text>
        </TouchableOpacity>
        </View>
    );
};

const style =  StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'MistyRose', 
    },
    cartao: {
        width: 200,
        height: 100,
        marginBottom: 20,
        resizeMode: 'cover', // Ajustado ao tamanho da imagem desejado
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black', // Texto branco
        marginBottom: 35,
        width: 150,
        alignItems: 'center'
    },
    pix: {
        width: 200,
        height: 100,
        marginBottom: 10,
        resizeMode: 'cover', // Ajustado ao tamanho da imagem desejado
    },
    dinheiro: {
        width: 200,
        height: 120,
        marginBottom: 10,
        resizeMode: 'cover', // Ajustado ao tamanho da imagem desejad
    },
    input: {
        fontSize: 20,
        marginTop: 5,
        color: 'black',
    },
    btnText: {
        width: 230, // Largura do botão
        height: 50, // Altura do botão
        marginBottom: 15, // Espaçamento inferior
        borderRadius: 10, // Borda arredondada
        justifyContent: 'center', // Centraliza o texto dentro do botão
        alignItems: 'center', // Centraliza o texto dentro do botão
        backgroundColor: 'pink', // Cor de fundo do botão
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
    }
})