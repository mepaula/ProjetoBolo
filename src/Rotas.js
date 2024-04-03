import {View, Text} from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Agendar from "./Agendar";
import Home from "./Home";
import Itens from "./Itens";
import Pagamento from "./Pagamento";
import Cadastro from "./Cadastro";
import { UserContext } from "./Context/UserContext";
import Login from "./Login";
import Notas from "./Notas";

const Tab = createBottomTabNavigator();

export default function Rotas() {

    const {logado} = useContext( UserContext );

    if( logado == false ) {
        return( <Login />)
    }

    return (
        <NavigationContainer>
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Cadastro" component={Cadastro} />
            <Tab.Screen name="Agendar" component={Agendar} />
            <Tab.Screen name="Itens" component={Itens} />
            <Tab.Screen name="Pagamento" component={Pagamento} />
            <Tab.Screen name="Notas" component={Notas} />
          </Tab.Navigator>
        </NavigationContainer>
      )
}