import {View, Text} from "react-native";
import React, { useContext } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

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
            <Icons name="home" color={color} size={size} />
            ),
          }}
        />
            <Tab.Screen name="Cadastro" 
            component={Cadastro} 
            options={{
            tabBarLabel: 'Cadastro',
            tabBarIcon: ({ color, size }) => (
              <Icons name="account-circle" color={color} size={size} />
              ),
            }}
          />
            <Tab.Screen name="Agendar" 
            component={Agendar} 
            options={{
            tabBarLabel: 'Agendar',
            tabBarIcon: ({ color, size }) => (
              <Icons name="notebook-edit" color={color} size={size} />
              ),
            }}
          />
            <Tab.Screen name="Itens" 
            component={Itens} 
            options={{
            tabBarLabel: 'Itens',
            tabBarIcon: ({ color, size }) => (
              <Icons name="format-list-bulleted" color={color} size={size} />
              ),
            }}
            />
            <Tab.Screen name="Pagamento" 
            component={Pagamento} 
            options={{
            tabBarLabel: 'Pagamento',
            tabBarIcon: ({ color, size }) => (
              <Icons name="sack" color={color} size={size} />
              ),
            }}
            />
            <Tab.Screen name="Notas" 
            component={Notas} 
            options={{
            tabBarLabel: 'Notas',
            tabBarIcon: ({ color, size }) => (
              <Icons name="star-circle" color={color} size={size} />
              ),
            }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      )
}