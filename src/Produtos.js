import { View, Text, StyleSheet,Image, Button } from "react-native"

export default function Produto({titulo, preco, categoria, data,image, navigation }) {
    return(
    <View style={css.caixa} >
        <Text style={css.titulo}>{titulo}</Text>
        <Text style={css.preco}>{preco}</Text>
        <Text style={css.data}>{data}</Text>     
        <View style={css.img2}>
            <Image style={{ height: 80, width: 110 }}
                                source={{ uri: image }} />
        </View>
        <Button title="Agendar" onPress={() => navigation.navigate( "Agendar" )} />       
    </View>
    )
    
}
    
const css = StyleSheet.create({
    caixa: {
        width: "40%",
        height: 190,
        backgroundColor: "#fbcafb",
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
        color: "black", 
        textAlign: "center" ,
        margin: 10     
    },   
})