import { StyleSheet, Text, FlatList, SafeAreaView, Platform, StatusBar, View, Pressable } from 'react-native'
import React from 'react';
import { Card } from '../components/Techies';
import colors from '../layouts/colors';
import TechiesHeader from '../components/Techies/techiesHeader';
import { useRoute, useNavigation } from '@react-navigation/native';

const Techies = () => {

  const route = useRoute();


  return (
    <SafeAreaView style={styles.container}>
      <TechiesHeader title={route.params.name} member={route.params.members} />
      
        <View style={styles.today}>
        <Text style={styles.todaytext}>Today</Text>
        
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({item})=> <Card/>}
        ItemSeparatorComponent={()=> <View style={{height: 20}}/>}
      />
    </SafeAreaView>
  )
}

export default Techies

const styles = StyleSheet.create({
  pressable:{

  },
    container: {
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
        paddingHorizontal: 20,
        gap: 10,
        backgroundColor: 'white',
    },

    today: {
      alignItems: 'center',
  },

  todaytext: {
    fontSize: 10,
    borderRadius: 50,
    paddingHorizontal: 7,
    paddingVertical: 3,
    backgroundColor: '#ffeeda',
    color: 'orange',
},

    date: {
        alignSelf: 'center',
        backgroundColor: colors.screen5n6.secondary,
        paddingHorizontal: 10,
        borderRadius: 50
    }
})