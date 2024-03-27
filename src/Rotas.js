import {View, Text} from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Agendar from "./Agendar";
import Home from "./Home";
import Itens from "./Itens";
import Contatos from "./Contatos";
import { UserContext } from "./Context/UserContext";
import Login from "./Login";

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
            <Tab.Screen name="Agendar" component={Agendar} />
            <Tab.Screen name="Itens" component={Itens} />
            <Tab.Screen name="Contatos" component={Contatos} />
          </Tab.Navigator>
        </NavigationContainer>
      )
}