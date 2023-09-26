import { View, StyleSheet, Pressable, Image} from "react-native"
import AppTextInput from "./AppTextInput"
import TextOpen from "./TextOpen"
import colors from "../layouts/colors"

const CreateEventInputBox = ({
  style,
  iconSrc,
  button = false,
  onPress,
  btnText,
  onChangeText,
  ...props
}) => {
  return (
    <View style = {{
      flexDirection: "row", 
      flex: 1, 
      backgroundColor: "rgba(240, 232, 242, 1)",
      borderRadius: 10,
      ...style
    }}
    >
      <AppTextInput
        onChangeText = {val => onChangeText(val)}
        style = {{borderTopRightRadius: button ? 0 : 10 , borderBottomRightRadius: button ? 0 : 10}}
        
        {...props}
      />
      {button && <Pressable 
        style = {styles.textBtn}
        onPress = {onPress}
      >
        <Image
          source = {iconSrc}
          style = {{width: 20, height: 20}}
        />
        {btnText && <TextOpen 
          style = {styles.label}
          font = {"OpenSans_600SemiBold"}
        >{btnText}</TextOpen>}
      </Pressable>}
    </View>
    
 )
}

export default CreateEventInputBox

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: colors.lightGrey,
    marginBottom: 5,
    
  },
  textBtn: {
    flexDirection: "row",
    gap: 10,
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderWidth: 0.5,
    borderColor: "rgba(244, 198, 255, 1)",
    
  },
})