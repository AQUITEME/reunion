import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Reunions from './components/Reunions';
import Home from './components/Home';
import AddReunions from './components/AddReunions';



const Stack = createStackNavigator();

export default function App ()  {
  
    return (
      
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Liste des Reunions" component={Reunions} />
            <Stack.Screen name="Ajouter une Reunion" component={AddReunions} />
          </Stack.Navigator>
        </NavigationContainer>
     
      
    );
}
