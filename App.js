import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Menu from './src/Menu'
 
export default class App extends Component {
  render(){
    return(
       <Menu />
      
    )
  }
}
//aula 5

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },

  f40:{
    fontSize:40,
    
  }
})

