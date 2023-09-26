import { Pressable, StyleSheet } from "react-native"
import colors from "../layouts/colors"
import TextOpen from "./TextOpen"

const AppButton = ({
  onPress,
  title,
  style
}) => {
  return (
    <Pressable
      style = {{...styles.btn, ...style}}
      onPress = {onPress}
    >
      <TextOpen
        style = {styles.btnText}
        font = "OpenSans_600SemiBold"
      >
        {title}
      </TextOpen>
    </Pressable>
  )
}

export default AppButton

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: colors.primary,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: colors.white,
    fontSize: 16,
  }
})