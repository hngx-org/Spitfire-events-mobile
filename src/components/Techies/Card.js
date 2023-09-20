import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/FontAwesome'

const Card = () => {
  return (
    <View style={styles.container}>
        <View style={styles.detailsContainer}>
            <View style={styles.flexBetween}>
                <Text>😊 Football game</Text>
                <View style={styles.date}>May 20</View>
            </View>
            <View>
                <View>
                    <Icon name='location'/>
                </View>

                <View>
                    <Icon name='time'/>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text>I will join</Text>
            </TouchableOpacity>
        </View>
      
        <View>
            
        </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        borderWidth: 0.5,
        borderBlockColor: 'black',
        borderRadius: 5
    },

    button: {
        padding: 5,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: 'purple'
    }, 

    detailsContainer: {
        padding: 10,
        gap: 8,
        display: 'flex'
    },

    flexBetween: {
        display: 'flex',
        justifyContent: 'space-between'
    },

    date: {
        padding: 2,
        borderWidth: 0.5,
        borderRadius: 5
    }
})