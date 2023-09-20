import { Image, StyleSheet, Text, TouchableOpacity, Platform } from "react-native";
import twitter from "../../../assets/icons/tweet.png";
import google from "../../../assets/icons/google.png";
import TextOpen from "../TextOpen";

export default function CustomBouton({ label, provider, ...props }) {
  return (
    <TouchableOpacity style={styles.bouton} {...props}>
      {provider === "twitter" ? (
        <Image source={twitter} style={styles.img} />
      ) : (
        <Image source={google} style={styles.img} />
      )}
      <TextOpen style={styles.texteBouton}>{label}</TextOpen>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bouton: {
    display: "flex",
    paddingVertical: 16,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "#571FCD",
    borderWidth: 1,    
    backgroundColor: "#fff",
    gap: 15,
    borderRadius: 5,
    ...Platform.select({
      ios: {
        marginHorizontal: 25,
      },
      android: {
        marginHorizontal: 0,
      },
      default: {
        // other platforms, web for example
        marginHorizontal: 0,
      },
    }),
  },
  texteBouton: {
    fontSize: 18,
  },
});
