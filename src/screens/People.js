import React from 'react';
import { View, Text, StyleSheet, FlatList, Platform, StatusBar } from 'react-native';
import ImageCard from '../components/People/ImageCard';
import TextOpen from '../components/TextOpen';
import AppButton from '../components/AppButton';

const People = () => {

  const data = [
    {
      name: 'Ybnl mafia',
      img: require('../../assets/images/ybnlmafia.png')
    },

    {
      name: 'Techies',
      img: require('../../assets/images/techies.png')
    }
  ]

  return (
    <View style={styles.container}>
      <TextOpen 
        style = {styles.header}
        font = {"OpenSans_700Bold"}
      >My People</TextOpen>
      <FlatList
        data={data}
        renderItem={({item}) => <ImageCard data={item}/>}
        ItemSeparatorComponent={()=> <View style={{height: 20}}/>}
      />

      <View style={styles.buttonContainer}>
        <AppButton title={'Add'}/>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    gap: 20,
    display: 'flex',

  },
  
  header: {
    fontWeight: "bold",
    color: "rgba(124, 20, 155, 1)",
    fontSize: 25,
  },

  buttonContainer: {
    marginTop: 25
  }
});

export default People;
