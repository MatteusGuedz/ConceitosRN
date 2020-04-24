import React from 'react';
import { Button, Alert, ToastAndroid, Platform, View } from 'react-native';



export default  props => {
   const Notificar = msg => {
       if(Platform.OS === 'android'){
           ToastAndroid.show(msg, ToastAndroid.LONG)
       } else {
           Alert.alert('Informção', msg)
       }
   }

   return (
       <View>
        <Button  title="Plataforma?" onPress={() => Notificar('Parabens')} >Platform </Button>
    </View>
   )
}
