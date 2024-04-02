import { View, Text, StyleSheet,Image } from "react-native"

export default function Produto({titulo, preco, categoria, data,image}) {
    return(
    <View style={css.caixa}>
        <Text style={css.titulo}>{titulo}</Text>
        <Text style={css.preco}>{preco}</Text>
        <Text style={css.categoria}>{categoria}</Text>
        <Text style={css.data}>{data}</Text>     
        <View style={css.img2}>
            <Image style={{ height: 80, width: 120 }}
                                source={{ uri: image }} />
        </View>       
    </View>
    )
    
}
    
const css = StyleSheet.create({
    caixa: {
        width: "40%",
        height: 190,
        backgroundColor: "pink",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 15
    },
    titulo: {
        fontSize: 15
    },
    preco: {
        padding: 5,
        borderWidth: 1,
        marginBottom: 5,
        color: "black",        
    },   
})