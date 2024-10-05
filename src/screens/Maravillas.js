import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListaMaravillas from "./ListaMaravilla";
import DetalleMaravillas from "./DetalleMaravillas";

const Stack = createStackNavigator();

const Maravillas = () => {
    return (

        <Stack.Navigator initialRouteName="Maravillas">
          <Stack.Screen name="Maravillas" component={ListaMaravillas}  options={{ headerShown: false }} />
          <Stack.Screen name="Consejos" component={DetalleMaravillas}  options={{ headerShown: false }} />
        </Stack.Navigator>
  
    );  
}

export default Maravillas;