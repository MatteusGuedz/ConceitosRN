import React from 'react';
import {  View } from 'react-native';
import { MegaSena, Inverter } from './src/components/Multi'
import Simples from './src/components/Simples'
import Parimpar from './src/components/Parimpar'
import Contador from './src/components/Contador'
import Platform from './src/components/Platform'
import ValidarProps from './src/components/ValidarProps'
import Evento from './src/components/Eventos'
import {Avo} from './src/components/ComunicacaoDireta'
import Textosincronizado from  './src/components/ComunicacaoIndireta'
import ListaFlex from './src/components/ListaFlex'
import Flex from './src/components/Flex'


function Flexscreen({ navigation }) {
  return (

      <Flex />
     
 
  );
}

function Listaflexscreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between',  paddingVertical:100}}>
      <ListaFlex />
     
    </View>
  );
}

function ComunicacaoIndiscreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between',  paddingVertical:100}}>
      <Textosincronizado />
     
    </View>
  );
}

function Comunicandoscreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between',  paddingVertical:100}}>
      <Avo nome="Sebastiao" sobrenome="Espetrop" />
     
    </View>
  );
}

function Eventosscreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between',  paddingVertical:100}}>
      <Evento />
     
    </View>
  );
}
function Validandoscreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between',  marginTop: 60}}>
      <ValidarProps label="Periodo" ano={20} />
     
    </View>
  );
}

function Platformscreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between',  marginTop: 60}}>
      <Platform />
     
    </View>
  );
}
function Contadorscreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between',}}>
      <Contador/>
     
    </View>
  );
}

function Megascreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <MegaSena numeros={8}/>
       
      </View>
    );
  }
  
function Inverterscreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <Inverter texto="React-Native!"/>
       
      </View>
    );
  }

  function Parimparscreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <Parimpar numero={33}/>
       
      </View>
    );
  }
  
  function Simplesscreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <Simples texto="Flexivel!!!"/>
       
      </View>
    );
  }
  

export {
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

};
