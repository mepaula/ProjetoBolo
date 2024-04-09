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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhXiWD63rgNc2oT9rsw8oO1mLFJu1aAh5EFs2Dwh7A-1oLBeoaV7HhOIqjBAMpnV8Wibc&usqp=CAU"
        
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
        preco: 210.95,
        data: "4/4/2024",
        image: "https://guiadacozinha.com.br/wp-content/uploads/2019/10/bolo-chocolate-maracuja.jpg"
    },
    {
        id: "08",
        titulo: "Bolo de Ninho com Nutela",
        preco: 120.95,
        data: "10/10/2024",
        image: "https://delicious.com.br/wp-content/uploads/2020/11/5.png"
    },
    {
        id: "09",
        titulo: "Bolo de Aniversáio",
        preco: 150.53,
        data: "9/9/2024",
        image: "https://www.sabornamesa.com.br/media/k2/items/cache/7a0c9d8bd9eadf879f0011817e8c2396_XL.jpg"
    },
    { 
        id: "10",
        titulo: "Bolo de Pote",
        preco: 55.95,
        data: "20/12/2024",
        image: "https://amoradoceria.com.br/wp-content/uploads/2021/06/sabores-de-bolo-no-pote-para-vender-1-1024x683.png"
    }

]

export default function Home({navigation})
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
            navigation={navigation}           
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