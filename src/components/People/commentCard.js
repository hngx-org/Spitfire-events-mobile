import { StyleSheet, Text, TouchableOpacity, View, Pressable, } from 'react-native';
import React,{useState} from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '../../layouts/colors';
import { useNavigation } from '@react-navigation/native';
import AppButton from '../AppButton';
import { Fontisto } from '@expo/vector-icons';

const Card = ({display, onPresser}) => {
const[check, setCheck]=useState(false);



  //This below is essential for editing the header and all other setOptions where useLayoutEffect helps display certain items before the screen loads
  const navigation = useNavigation();


  



  return (
    <View style={[styles.container, {display: display,}]}>
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
            
        </View>

        <Pressable onPress={()=>{setCheck(!check)}} style={styles.checkbox}>
        <Fontisto name={check?'checkbox-active':'checkbox-passive'} size={15}/>
        <Text style={{paddingHorizontal: 3,}}>Check box to invite Techies</Text>
        </Pressable>

        <Pressable style={styles.pressable}>
        <AppButton title={'Share'} onPress={onPresser}/>
      </Pressable>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        marginHorizontal: 19,
        backgroundColor: "rgba(240, 232, 242, 1)",
        marginVertical: 10,
    },
    pressable: {
        paddingHorizontal: 15,        
        paddingVertical: 5,        
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

    checkbox: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },

    date: {
        padding: 2,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: colors.primary
    },
    buttontext: {
        color: colors.primary
    }, 

    headingText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.primary
    }
})