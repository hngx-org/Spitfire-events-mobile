
import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Platform, StatusBar, Pressable, TextInput, Button, Keyboard } from 'react-native';
import Modal from 'react-native-modal';
import ImageCard from '../components/People/ImageCard';
import TextOpen from '../components/TextOpen';
import AppButton from '../components/AppButton';
import { useNavigation } from '@react-navigation/native';
import colors from '../layouts/colors';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAvoidingView } from 'react-native';

const People = () => {

  //This below is essential for editing the header and all other setOptions where useLayoutEffect helps display certain items before the screen loads
const navigation = useNavigation();

  const [data, setData] = useState([
    {
      name: 'YbnlMafia',
      img: require('../../assets/images/ybnlmafia.jpg'),
      members: '11 members',
    },

    {
      name: 'Techees',
      img: require('../../assets/images/techies.jpg'),
      members: '115 members',
    }
  ])
  const [group, setGroup] = useState('');
  const [num, setNum] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
const imgArray=[require('../../assets/images/1.jpg'),
require('../../assets/images/2.jpg'),
require('../../assets/images/3.jpg'),
require('../../assets/images/4.jpg'),
require('../../assets/images/5.jpg'),
require('../../assets/images/6.jpg'),
require('../../assets/images/7.jpg'),
require('../../assets/images/8.jpg'),
require('../../assets/images/9.jpg'),
require('../../assets/images/10.jpg'),
require('../../assets/images/11.jpg'),
require('../../assets/images/12.jpg'),
require('../../assets/images/13.jpg'),
require('../../assets/images/14.jpg'),
require('../../assets/images/15.jpg'),
]
  const handleAddData = () => {
    setNum(num+1);
    if (group.trim() !== '') {
        const newData = {
        name: group,
        img: imgArray[num],
        members: '0 members',
      }
      setData([...data, newData]);
      setGroup('');    
  };
};
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };


  return (
    <View style={styles.container}>
      <StatusBar style={{color: 'blue',}}/>
      

      <Modal style={styles.modal} 
      isVisible={isModalVisible} 
      onPress={()=>Keyboard.dismiss()}
      // onBackdropPress={closeModal} 
      transparent={false}> 
      <Ionicons name='close' style={styles.modalIcon} size={35} onPress={closeModal}/>
      <View style={{ paddingBottom: 120, }}>
      
      <View style={{ justifyContent: 'center', alignItems: 'center', paddingBottom: 120, }}>
      
        <TextInput
         style={styles.textInput}
          placeholder="Add Private group here..."
          value={group}
          onChangeText={text => setGroup(text)}
          placeholderTextColor= 'grey'
        />        
        
        <KeyboardAvoidingView behavior="padding">
        <Pressable style={styles.modalButton} onPress={()=> {handleAddData();
          closeModal();}}>
          <Text style={styles.modalButtonText}>Add to New Group</Text>
        </Pressable>
        </KeyboardAvoidingView>
      </View>
      </View>
    </Modal>


      <TextOpen 
        style = {styles.header}
        font = {"OpenSans_700Bold"}
      >My People</TextOpen>
      <FlatList
        data={data}
        renderItem={({item}) => <Pressable onPress={()=>navigation.navigate('Techees', item)}><ImageCard data={item}/></Pressable>}
        ItemSeparatorComponent={()=> <View style={{height: 20}}/>}
      />

      <View style={{justifyContent: 'center', alignItems: 'center',}}>
        <Pressable style={{justifyContent: 'center', alignItems: 'center',}}>
        <AppButton title={'Add +'} onPress={toggleModal} style={styles.buttonContainer}/>
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
    flex: 1,
  },

  modal: {
    backgroundColor: 'white',
    width: '100%',
    marginStart: 0,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    bottom: -100, 
  },

  modalIcon: {
    color: colors.primary, 
    top: 30, 
    right: 30, 
    position: 'absolute'
  },

  textInput:{
    borderColor: "#F4C6FF",
    padding: 16,
    backgroundColor: "#F0E8F2",
    borderRadius: 50,
    color: colors.primary,
    width: 200,
    fontWeight: 'bold',
  },

  modalButton: {
    marginTop: 13,
    backgroundColor: colors.primary,
    paddingHorizontal: 55,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
borderRadius: 10,
  },

  modalButtonText: {
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },

  header: {
    paddingTop: 13,
    fontWeight: "bold",
    color: "rgba(124, 20, 155, 1)",
    fontSize: 25,
  },
buttonContainer: {
  position: 'absolute',
    bottom: 0, 
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginEnd: 'auto',
},
});

export default People;
