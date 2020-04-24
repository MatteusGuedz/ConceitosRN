import React from 'react'
import {Text, View} from  'react-native'
import Padrao from  '../estilos/Padrao'



function parOUimpar(num){
    // if(num  % 2 == 0){
    //     return  <Text style={Padrao.ex}>Par</Text>
    // } else {
    //     return  <Text style={Padrao.ex}>Impar</Text>
    // }

    const v = num % 2 == 0 ? 'Par' : 'Impar'
return   <Text style={Padrao.ex}>{v}</Text>
}

export default props => 

    <View>

        {parOUimpar(props.numero)}
        {/* {
            props.numero % 2 == 0 
            ? <Text style={Padrao.ex}>Par</Text>
            : <Text style={Padrao.ex}>Impar</Text>
        } */}
    </View>
