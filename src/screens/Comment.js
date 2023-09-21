import { StyleSheet, StatusBar, FlatList, Keyboard, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import colors from '../layouts/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';



const Comment = () => {
  const comments = [
    { id: 1, name: 'John Doe', comment: 'Thank you for showing this Event to me', date: "2023-09-20", },
    { id: 2, name: 'Jane Smith', comment: 'Thank you for showing this Event to me', date: "2023-09-22", },
    { id: 3, name: 'Alice Johnson', comment: 'Thank you for showing this Event to me', date: "2023-09-25", },
    { id: 4, name: 'Bob Brown', comment: 'Thank you for showing this Event to me', date: "2023-09-28", },
    { id: 5, name: 'Ella Davis', comment: 'Thank you for showing this Event to me', date: "2023-10-02", },
    { id: 6, name: 'Mike Wilson', comment: 'Thank you for showing this Event to me', date: "2023-10-05", },
    { id: 7, name: 'Sarah Clark', comment: 'Thank you for showing this Event to me', date: "2023-10-08", },
    { id: 28, name: 'Henry Morgan', comment: 'Thank you for showing this Event to me', date: "2023-10-11", },
    { id: 29, name: 'Sofia Bennett', comment: 'Thank you for showing this Event to me', date: "2023-10-15", },
    { id: 30, name: 'Jack Davis', comment: 'Thank you for showing this Event to me', date: "2023-10-19", },
  ];


  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const handleIconPress = () => {
    // Handle the action when the icon is pressed (e.g., send message)
  };



  return (
    <View style={styles.contactscontainer}>
      <StatusBar style='auto' />
      {/* Event Details */}
      <View style={styles.contactscont}>
      {/* Comments */}
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text style={styles.contacttext}>{item.name}</Text>
            <Text style={styles.contactnum}>{item.comment}</Text>
            <Text style={styles.contactnum}>{item.date}</Text>
          </View>
        )}
      />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>        
        <TextInput
          style={{

            zIndex: 9,
            flex: 1,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 8,
            borderRadius: 20,
            marginLeft: 16,
            backgroundColor: 'white',
          }}
          placeholder={isKeyboardVisible ? 'Send your Comment...' : 'Click to start typing...'}
          onFocus={() => setKeyboardVisible(true)}
          onBlur={() => setKeyboardVisible(false)}
        />
        {isKeyboardVisible ? <TouchableOpacity onPress={() => handleIconPress()}>
          <Icon name={isKeyboardVisible ? 'send' : 'image'} size={40} color={colors.primary} style={{paddingLeft: 7,}} />
        </TouchableOpacity>
        :<><TouchableOpacity onPress={() => handleIconPress()}>
          <Icon name={isKeyboardVisible ? 'send' : 'image-outline'} size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleIconPress()}>
          <Icon name={isKeyboardVisible ? 'send' : 'microphone-outline'} size={24} color="grey" />
        </TouchableOpacity></> }
        
      </View>
    </KeyboardAvoidingView>
    </View>
      {/* Input */}
    </View>
  )
}



const styles = StyleSheet.create({
  inputWrapper: {
    position: "absolute",
  },
  contactscontainer: {
    backgroundColor: '#f5f5f5',
  },
  contactscont: {
    height: '98%',
    paddingTop: 40,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  contactItem: {
    backgroundColor: 'white',
    margin: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: 15,
    boxShadow: 6,
   },
  contacttext: {
    color: colors.purple,
    fontWeight: '900',
    padding: 9,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 50,
  },
  contactnum: {
    color: 'black',
    padding: 9,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    borderRadius: 50,
  },

})

export default Comment;