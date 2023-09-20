import { StyleSheet, Text, FlatList, SafeAreaView, Platform, StatusBar, View } from 'react-native'
import React from 'react'
import { Card } from '../components/Techies'
import colors from '../layouts/colors'

const Techies = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.date}>
        <Text>Today</Text>
      </View>
      <FlatList
        data={[1, 2]}
        renderItem={({item})=> <Card/>}
        ItemSeparatorComponent={()=> <View style={{height: 20}}/>}
      />
    </SafeAreaView>
  )
}

export default Techies

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        paddingHorizontal: 20,
        gap: 10
    },

    date: {
        alignSelf: 'center',
        backgroundColor: colors.screen5n6.secondary,
        paddingHorizontal: 10,
        borderRadius: 50
    }
})