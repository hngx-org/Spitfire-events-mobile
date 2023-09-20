import { View, TextInput, StyleSheet } from "react-native"
import colors from "../layouts/colors"

const AppTextInput = ({
  style,
  ...props
}) => {
  return (
    <View style = {{flex: 1}}>
      <TextInput
        style = {{
          borderColor: colors.inputBorder,
          borderWidth: 0.5,
          paddingVertical: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
          fontSize: 16,
          fontWeight: "bold",
          ...style,
        }}
        {...props}
      />
    </View>
  )
}

export default AppTextInput