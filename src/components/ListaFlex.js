import React from 'react'
import {ScrollView, Text, View, FlatList} from 'react-native'


const alunos = [
    {id: 1, nome: 'Mateus', nota:9.4},
    {id: 2, nome: 'jandira', nota:93.4},
    {id: 3, nome: 'Sexyzonaldo', nota:5.4},
    {id: 4, nome: 'Merilin', nota:9.4},
    {id: 5, nome: 'LinkCity', nota:9.4},
    {id: 6, nome: 'Proriquenga', nota:9.4},
    {id: 7, nome: 'Deeede', nota:9.4},
    {id: 8, nome: 'Jhon Bovi', nota:9.4},
    {id: 9, nome: 'rissibora', nota:9.4},

    {id: 11, nome: 'Mateus', nota:9.4},
    {id: 12, nome: 'jandira', nota:93.4},
    {id: 13, nome: 'Sexyzonaldo', nota:5.4},
    {id: 14, nome: 'Merilin', nota:9.4},
    {id: 15, nome: 'LinkCity', nota:9.4},
    {id: 16, nome: 'Proriquenga', nota:9.4},
    {id: 17, nome: 'Deeede', nota:9.4},
    {id: 18, nome: 'Jhon Bovi', nota:9.4},
    {id: 19, nome: 'rissibora', nota:9.4},
    
]



const itemEstilo = {
        paddingHorizontal: 15,
        height: 50,
        backgroundColor: '#ddd', 
        borderColor: '#222', 
        borderWidth: 0.5,


        //flex

        alignItems: 'center', 
        flexDirection: 'row', 
        justifyContent: 'space-between'
}


export const Aluno = props =>
            <View style={itemEstilo}>
                <Text>Nome: {props.nome} </Text>
                <Text style={{fontWeight:'bold'}}>Nota: {props.nota}</Text>
            </View>

export default props => {
    const renderItem = ({item}) => {
        return <Aluno {...item}/>
    }

    return (
      
 <FlatList data={alunos} renderItem={renderItem} keyExtractor={(_, index) => index.toString()} />
       
    )
}           