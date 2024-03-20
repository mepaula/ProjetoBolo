import { View, Text, StyleSheet } from "react-native"

export default function Produto({titulo, preco, categoria, data}) {
    return(
    <View style={css.caixa}>
        <Text style={css.titulo}>{titulo}</Text>
        <Text style={css.preco}>{preco}</Text>
        <Text style={css.categoria}>{categoria}</Text>
        <Text style={css.data}>{data}</Text>
    </View>
    )
    
}
    
const css = StyleSheet.create({
    caixa: {
        width: "40%",
        height: 180,
        backgroundColor: "lightgray",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 15
    },
    titulo: {
        fontSize: 18
    },
    preco: {
        padding: 10,
        bodecolor: "blue",
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        color: "blue"
        
    }
})