import React, { Component} from 'react'
import {Text, View, TextInput} from 'react-native'
import Padrao from  '../estilos/Padrao'


export default class Evento extends Component {

    state = {
        texto: '' //para componente  controlado
        //texto: null = para componente não controlado (alem de remover o evento la do TextInput)
    }

    alterarTexto = texto => {
        this.setState({texto}) // ou  ({texto:texto})
    }


    render() {
        return (
            <View>
             <Text style={Padrao.fonte40}>{this.state.texto}</Text>
            <TextInput 
            style={Padrao.input}
            onChangeText={this.alterarTexto} //remover para trabalhar com comp não controlad
            value={this.state.texto} />

           
        </View>
        )
    }
}