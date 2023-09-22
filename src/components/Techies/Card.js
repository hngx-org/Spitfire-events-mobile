import { StyleSheet, Text, View, Pressable, Platform, Image, TouchableOpacity, } from 'react-native';
import React, {useState} from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import colors from '../../layouts/colors';
import { useNavigation } from '@react-navigation/native';

const Card = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
      setIsClicked(!isClicked);
    };
  
    const buttonColor = isClicked ? colors.primary : 'rgba(240, 232, 242, 1)';
    const textColor = isClicked ? 'white' : colors.primary;

  //This below is essential for editing the header and all other setOptions where useLayoutEffect helps display certain items before the screen loads
  const navigation = useNavigation();





  return (
    <View style={styles.container}>
        <View style={styles.detailsContainer}>
            <View style={styles.flexBetween}>
                <Text style={styles.headingText}><Image
          source={require("../../../assets/images/cartoon.png")}
          style={{width: 30, height: 30}}
        /> Football game</Text>
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
            <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor, }]} onPress={handleButtonClick}>
                <Text style={[styles.buttontext,{color: textColor}]}>{isClicked ? 'Joined' : 'I Will Join'}</Text>
            </TouchableOpacity>
        </View>
        <Pressable onPress={()=>
        navigation.navigate('Comment')
      }>
        <View style={[styles.flexBetween, {padding: 10, borderTopWidth: 0.5, borderColor: colors.primary}]}>
        
            <View style={[styles.flexRow, {alignItems: 'center'}]}>
                <Icon style={{color: colors.lightGrey}} name='message'/>
                
                <Text style={{color: colors.lightGrey}}>leave a comment</Text>
                
            </View>

            <Icon color={colors.lightGrey} name='chevron-right' size={20} />
        </View>
        </Pressable>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        borderRadius: 10,
        marginHorizontal: Platform.OS==='ios' ? 25 : 0,
        backgroundColor: "rgba(240, 232, 242, 1)",
    },

    button: {
        padding: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.primary,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
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
        borderColor: colors.primary
    },

    buttontext: {
        color: colors.primary,
    }, 

    headingText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.primary
    }
})