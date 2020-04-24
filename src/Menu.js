import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {
  Megascreen, 
  Simplesscreen, 
  Inverterscreen, 
  Parimparscreen, 
  Contadorscreen,
  Platformscreen,
  Validandoscreen,
  Eventosscreen,
  Comunicandoscreen,
  ComunicacaoIndiscreen,
  Listaflexscreen,
  Flexscreen
  } from '../Routes'




const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
   <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Flex" component={Flexscreen} />
        <Drawer.Screen name="Lista de Alunos" component={Listaflexscreen} />
        <Drawer.Screen name="Comunicaçao Indireta" component={ComunicacaoIndiscreen} />
        <Drawer.Screen name="Comunicaçao Direta" component={Comunicandoscreen} />
        <Drawer.Screen name="Eventos" component={Eventosscreen} />
        <Drawer.Screen name="Validar Props" component={Validandoscreen} />
        <Drawer.Screen name="Platafoma" component={Platformscreen} />    
        <Drawer.Screen name="Contador" component={Contadorscreen} />
        <Drawer.Screen name="Mega Sena" component={Megascreen} />
        <Drawer.Screen name="Simples" component={Simplesscreen} />
        <Drawer.Screen name="Inverter" component={Inverterscreen} />
        <Drawer.Screen name="Par ou Impar" component={Parimparscreen} />
     </Drawer.Navigator>
    </NavigationContainer>
  );
}