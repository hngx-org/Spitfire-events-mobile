import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageCard = () => {
  return (
    <View style={styles.container}>
        <Text>YBNL MAFIA</Text>
        <Image source={require('../../../assets/images/ybnlmafia.png')}/>
    </View>
  )
}

export default ImageCard

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        height: '25%'   
    }
})