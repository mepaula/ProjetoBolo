import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"

export default function Agendar({navigation})
{
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Faça o seu peddido aqui!...</Text>
        <Text style={styles.massa}>Massa do seu bolo:</Text>
        <TextInput 
            placeholder=''
            style={styles.input} 
        />
        <Text style={styles.recheio}>Recheio do seu bolo:</Text>
        <TextInput 
            placeholder=''
            style={styles.input} 
        />
        <Text style={styles.junto}>Acompanhamento</Text>
        <TextInput 
            placeholder=''
            style={styles.input} 
        />
        <Text style={styles.decorado}>Decoração do bolo:</Text>
        <TextInput 
            placeholder='' 
            style={styles.input}
        />
        <Text style={styles.data}>Data de retirada:</Text>
        <TextInput 
            placeholder='' 
            style={styles.input}
        />
        <TouchableOpacity>
          <Text style={styles.btnText} onPress={() => navigation.navigate('Pagamento')}>Feito</Text>
        </TouchableOpacity>
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black', // Texto branco
        marginBottom: 10,
        width: 190,
        alignItems: 'center'
    },
    massa: {
        fontSize: 20,
        marginTop: 10,
        color: 'black',
    },
    input: {
        width: 300, // Largura do botão
        height: 40, // Altura do botão
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
    recheio: {
        fontSize: 20,
        marginTop: 10,
        color: 'black',
    },
    junto: {
        fontSize: 20,
        marginTop: 10,
        color: 'black',
    },
    decorado: {
        fontSize: 20,
        marginTop: 10,
        color: 'black',
    },
    btnText: {
        width: 210, // Largura do botão
        height: 45, // Altura do botão
        marginBottom: 20, // Espaçamento inferior
        borderRadius: 15, // Borda arredondada
        justifyContent: 'center', // Centraliza o texto dentro do botão
        alignItems: 'center', // Centraliza o texto dentro do botão
        backgroundColor: '#f6b0f7', // Cor de fundo do botão
        textAlign: 'center',
        fontSize: 30,
        color: 'white',
    },
    data: {
        fontSize: 20,
        marginTop: 10,
        color: 'black',
    }
});