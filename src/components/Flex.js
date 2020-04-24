import React from 'react'
import {View, StyleSheet} from 'react-native'



const styles =  StyleSheet.create({

    container:{
        height:'100%'
    },
    
    Norte: {
            flex:1,
            alignItems: 'center',
            justifyContent: 'center', 
            backgroundColor: '#bd09ff'
    },

    Centro: {
            flex: 2,
            flexDirection:'row', 
            backgroundColor: "#bdbdff",
            alignItems: 'center',
            justifyContent: 'space-between'
    },

    Sul: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#bd09ff'

    },

    Circle:{
        width:100,
        height:100,
        backgroundColor:'#f00',
        borderRadius:50
    }
    

})


const Circule = props => 
        <View style={styles.Circle}></View>

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.Norte}>
                <Circule />
            </View>

            <View style={styles.Centro}>
                <Circule />
                <Circule />
                <Circule />
            </View>

            <View style={styles.Sul}>
                <Circule />
            </View>
        </View>
    )
}        

