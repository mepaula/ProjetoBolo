import { View, FlatList, StyleSheet } from "react-native"
import Produtos from "./Produtos"

const dados = [
    {
        id: "01",
        titulo: "Bolo de Chocolate",
        preco: 39.99,
        data: "30/10/2024"
        
        
    },
    {
        id: "02",
        titulo: "Bolo de Morango",
        preco: 59.99,
        data: "5/2/2024"
        
    },
    {
        id: "03",
        titulo: "Bolo de Frutas Vermelhas",
        preco: 109.99,
        data: "1/11/2024"
        
    },
    {
        id: "04",
        titulo: "Bolo de Brigadeiro",
        preco: 190.99,
        data: "6/12/2024"
    },
    {
        id: "05",
        titulo: "Bolo de Laranja",
        preco: 300.99,
        data: "14/2/2024"
    },
    {
        id: "06",
        titulo: "Bolo de Casamento",
        preco: 129.99,
        data: "19/4/2024"
    },
    {
        id: "07",
        titulo: "Bolo de Maracuja",
        preco: 210.90,
        data: "4/4/2024",
    },
    {
        id: "08",
        titulo: "Bolo de Ninho com Nutela",
        preco: 120.90,
        data: "10/10/2024",
    }

]

export default function Home()
{
    return(
        <View>
            <FlatList 
            data={dados}
            renderItem={({item}) => 
            <Produtos titulo={item.titulo} 
            preco={item.preco}
            categoria={item.categoria}
            data={item.data}
            />
        }
            keyExtractor={item => item.id}
            contentContainerStyle={css.container}
            horizontal={false}
            numColumns={2}   
        />
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        with: "100%",
        display: "flex",
        justifyContent: "center"
    }
})