import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import colors from '../../layouts/colors'

const Card = () => {
  return (
    <View style={styles.container}>
        <View style={styles.detailsContainer}>
            <View style={styles.flexBetween}>
                <Text style={styles.headingText}>😊 Football game</Text>
                <View style={styles.date}>
                    <Text>May 20</Text>
                </View>
            </View>
            <View style={styles.flexRowContainer}>
                <View style={styles.flexRow}>
                    <Icon name='map-marker-outline' size={15}/>
                    <Text>Teslim Balogun Stadium</Text>
                </View>

                <View style={styles.flexRow}>
                    <Icon name='clock-outline' size={15}/>
                    <Text style={{color: colors.lightGrey, fontSize: 12}}>Friday 4 - 7 PM</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>I will join</Text>
            </TouchableOpacity>
        </View>
      
        <View style={[styles.flexBetween, {padding: 10, borderTopWidth: 0.5, borderColor: colors.screen5n6.primary}]}>
            <View style={[styles.flexRow, {alignItems: 'center'}]}>
                <Icon style={{color: colors.lightGrey}} name='message'/>
                <Text style={{color: colors.lightGrey}}>leave a comment</Text>
            </View>

            <Icon color={colors.lightGrey} name='chevron-right' size={20} />
        </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        borderWidth: 0.5,
        borderColor: colors.screen5n6.primary,
        borderRadius: 10
    },

    button: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.screen5n6.primary,
        backgroundColor: colors.screen5n6.secondary,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
        
    }, 

    detailsContainer: {
        padding: 10,
        gap: 15,
        display: 'flex'
    },

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },

    flexBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    flexRowContainer: {
        display: 'flex',
        gap: 5
    },

    date: {
        padding: 2,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: colors.screen5n6.primary
    },

    buttontext: {
        color: colors.screen5n6.primary
    }, 

    headingText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.screen5n6.primary
    }
})