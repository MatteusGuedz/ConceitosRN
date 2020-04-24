import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

// import { Container } from './styles';

export default class Contador extends Component {

    state = {
         numero:0
    }

    // constructor (props){
    //     super(props)
    //     this.MaisUm = this.MaisUm.bind(this)
    // }

    MaisUm(){
        this.setState({numero: this.state.numero + 1})

    }

    Limpar = () => {
        this.setState({numero: 0})
    }
//aula 09
  render() {
  return ( 
      <View style={{flex:1, alignItems: 'center', justifyContent:'center'}}> 
           <Text style={{fontSize:40}}>{this.state.numero}</Text>
           <TouchableHighlight 
               onPress={() => this.MaisUm()}
               onLongPress={this.Limpar}
            >
                <Text>Incrementar / Zerar </Text>
          </TouchableHighlight>
      </View>
  )
  }
}
