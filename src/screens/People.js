
import React from 'react';
import { View, Text, StyleSheet, FlatList, Platform, StatusBar, Pressable } from 'react-native';
import ImageCard from '../components/People/ImageCard';
import TextOpen from '../components/TextOpen';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';

const People = () => {

  //This below is essential for editing the header and all other setOptions where useLayoutEffect helps display certain items before the screen loads
const navigation = useNavigation();

  const data = [
    {
      name: "Ybnl mafia",
      img: require("../../assets/images/ybnlmafia.png"),
    },

    {
      name: 'Techees',
      img: require('../../assets/images/techies.png')
    }
  ]

  return (
    <View style={styles.container}>
      <StatusBar style={{color: 'blue',}}/>
      <TextOpen 
        style = {styles.header}
        font = {"OpenSans_700Bold"}
      >My People</TextOpen>
      <FlatList
        data={data}
        renderItem={({item}) => <Pressable onPress={()=>navigation.navigate(item.name)}><ImageCard data={item}/></Pressable>}
        ItemSeparatorComponent={()=> <View style={{height: 20}}/>}
      />

      <View style={styles.buttonContainer}>
        <Pressable>
        <AppButton title={'Add'}/>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 35,
    paddingHorizontal: 20,
    gap: 20,
    display: "flex",
  },

  header: {
    fontWeight: "bold",
    color: "rgba(124, 20, 155, 1)",
    fontSize: 25,
  },

  buttonContainer: {
    marginTop: 25,
  },
});

export default People;
