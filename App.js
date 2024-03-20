import "react-native-gesture-handler";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Agendar from "./src/Agendar";
import Home from "./src/Home";
import Itens from "./src/Itens";
import Contatos from "./src/Contatos";
import Login from "./src/Login";

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Agendar" component={Agendar} />
        <Tab.Screen name="Itens" component={Itens} />
        <Tab.Screen name="Contatos" component={Contatos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



