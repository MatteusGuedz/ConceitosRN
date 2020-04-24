import React, { Component} from 'react'
import { Text, View, TextInput} from 'react-native'
import Padrao from '../estilos/Padrao'


export const Entrada = props =>
        <View>
            <TextInput 
              value={props.texto}
              style={Padrao.input}
              onChangeText={props.ChamarQuandoMudar} />
        </View>
export  default class Textosincronizado extends Component {

    state = {
        texto: ''
    }

    alterarTexto = texto =>
    this.setState({texto})



    render(){
        return(
            <View>
                <Text>{this.state.texto}</Text>

                <Entrada texto={this.state.texto} 
                    ChamarQuandoMudar={this.alterarTexto}
                />
            </View>
        )
    }
}