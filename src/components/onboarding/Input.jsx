import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import TextOpen from "../TextOpen";
import colors from "../../layouts/colors";

export default function Input({
  label,
  placeholder,
  value,
  onChangeText,
  ...props
}) {
  return (
    <View style={styles.input}>
      <TextOpen>{label}</TextOpen>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputText}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
  },
  inputText: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    marginTop: 8,
    borderWidth: 0.5,
    borderColor: "#806987",
  },
});
