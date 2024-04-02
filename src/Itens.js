import { View, FlatList, StyleSheet } from "react-native"
import Produtos from "./Produtos"

const dados = [
    {
        id: "01",
        titulo: "Bolo de Chocolate",
        preco: 39.99,
        data: "30/10/2024",
        image: "https://guiadacozinha.com.br/wp-content/uploads/2019/10/bolo-chocolate-dois-brigadeiros-receita.jpg",       
    },
    {
        id: "02",
        titulo: "Bolo de Morango",
        preco: 59.99,
        data: "5/2/2024",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfwuUOy82AObp9sqn37n9ix3vk8TseBRqF7MBm6Mw_iqy8gUi0XAZ6n3QN4qZuXBTnEAndeFiuUKzU0yDTdMv6ZF3Og3cjgSg9I2khbtaoLDD8Z-oqswMAOM7gNg6yJK7U5ZH30zepDI7NVuvIppDpzQ2SWM2AeJvy9e7Efw2SoOdUDynK3mABtWq3/s1500/bolo-de-iogurte-com-morangos.jpg"
        
    },
    {
        id: "03",
        titulo: "Bolo de Frutas Vermelhas",
        preco: 109.99,
        data: "1/11/2024",
        image: "https://receitinhas.com.br/wp-content/uploads/2023/06/recheio-de-frutas-vermelhas.jpg"
        
    },
    {
        id: "04",
        titulo: "Bolo de Brigadeiro",
        preco: 190.99,
        data: "6/12/2024",
        image: "https://i.ytimg.com/vi/h8Rz6vIwmjY/maxresdefault.jpg"
    },
    {
        id: "05",
        titulo: "Bolo de Casamento",
        preco: 300.99,
        data: "14/2/2024",
        image: "https://blogorganizesuafesta.wordpress.com/wp-content/uploads/2015/05/3xa88lbp7cv2svs2bum8vx86g.jpg?w=646"
    },
    {
        id: "06",
        titulo: "Bolo de Laranja",
        preco: 129.99,
        data: "19/4/2024",
        image: "https://guiadacozinha.com.br/wp-content/uploads/2030/04/bolo-de-laranja-calda-768x619.jpg"
    },
    {
        id: "07",
        titulo: "Bolo de Maracuja",
        preco: 210.90,
        data: "4/4/2024",
        image: "https://guiadacozinha.com.br/wp-content/uploads/2019/10/bolo-chocolate-maracuja.jpg"
    },
    {
        id: "08",
        titulo: "Bolo de Ninho com Nutela",
        preco: 120.90,
        data: "10/10/2024",
        image: "https://delicious.com.br/wp-content/uploads/2020/11/5.png"
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
            image={item.image}             
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
        with: "90%",
        display: "flex",
        justifyContent: "center"
    }
})