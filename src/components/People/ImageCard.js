import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../layouts/colors'

const ImageCard = ({data}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.constainerText}>{data.name}</Text>
        <View style={styles.img}>
        <Image source={data.img}/>
    </View>
    </View>
  )
}

export default ImageCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: colors.light   
    },
    constainerText: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 19,
    },
})