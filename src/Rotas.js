import {View, Text} from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@react-native-community/masked-view";

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
          <Tab.Navigator 
          screenOptions={{
            headerShown: false
          }}>
          <Tab.Screen name="Home" 
          component={Home} 
          options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
            <Tab.Screen name="Cadastro" 
            component={Cadastro} 
            options={{
            tabBarLabel: 'Cadastro',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
              ),
            }}
          />
            <Tab.Screen name="Agendar" component={Agendar} />
            <Tab.Screen name="Itens" component={Itens} />
            <Tab.Screen name="Pagamento" component={Pagamento} />
            <Tab.Screen name="Notas" component={Notas} />
          </Tab.Navigator>
        </NavigationContainer>
      )
}