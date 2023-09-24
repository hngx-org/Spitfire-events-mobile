import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import React, {useContext} from "react";
import SettingsHeader from "../components/Settings/SettingsHeader";
import TextOpen from "../components/TextOpen";
import {Ionicons} from "@expo/vector-icons";
import {SimpleLineIcons} from "@expo/vector-icons";
import { AuthContext } from "../context/AuthContext";

const Settings = () => {

  // const {userInfo} = useContext(AuthContext);
  
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 24,
        backgroundColor: "#FFFCFD",
      }}
    >
      <SettingsHeader />
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#EEBEFD",
              width: 78,
              height: 78,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 30,
              marginBottom: 10,
            }}
          >
            <Image
              style={{width: 62, height: 62, borderRadius: 40}}
              source={require('../../assets/profile.jpg')}
            />
          </View>
          <TextOpen
            font={"OpenSans_600SemiBold"}
            style={{
              color: "#710193",
              fontSize: 15,
            }}
          >
            {/* {userInfo.name} */}
Salome
          </TextOpen>
          <TextOpen
            style={{
              color: "#AD99B2",
              fontSize: 12,
            }}
          >
            {/* {userInfo.email} */}
salome357@gmail.com
          </TextOpen>
        </View>
      </View>
      <View
        style={{
          marginTop: 30,
          borderRadius: 10,
          borderWidth: 0.5,
          borderColor: "#F4C6FF",
          padding: 16,
          backgroundColor: "#F0E8F2",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 13,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#87748C"
              style={{
                marginRight: 10,
              }}
            />
            <TextOpen
              style={{
                fontSize: 14,
                color: "#87748C",
              }}
            >
              Notification
            </TextOpen>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#87748C" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 13,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="md-lock-closed-outline"
              size={24}
              color="#87748C"
              style={{
                marginRight: 10,
              }}
            />
            <TextOpen
              style={{
                fontSize: 14,
                color: "#87748C",
              }}
            >
              Privacy
            </TextOpen>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#87748C" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 13,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="md-color-palette-outline"
              size={24}
              color="#87748C"
              style={{
                marginRight: 10,
              }}
            />
            <TextOpen
              style={{
                fontSize: 14,
                color: "#87748C",
              }}
            >
              Appearance
            </TextOpen>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#87748C" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 13,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="globe-outline"
              size={24}
              color="#87748C"
              style={{
                marginRight: 10,
              }}
            />
            <TextOpen
              style={{
                fontSize: 14,
                color: "#87748C",
              }}
            >
              Language and Region
            </TextOpen>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#87748C" />
        </View>
      </View>
      <View
        style={{
          marginTop: 30,
          borderRadius: 10,
          borderWidth: 0.5,
          borderColor: "#F4C6FF",
          padding: 16,
          backgroundColor: "#F0E8F2",
          marginBottom: 30
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 13,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="help-circle-outline"
              size={24}
              color="#87748C"
              style={{
                marginRight: 10,
              }}
            />
            <TextOpen
              style={{
                fontSize: 14,
                color: "#87748C",
              }}
            >
              Help and Support
            </TextOpen>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#87748C" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="#87748C"
              style={{
                marginRight: 10,
              }}
            />
            <TextOpen
              style={{
                fontSize: 14,
                color: "#87748C",
              }}
            >
              Privacy
            </TextOpen>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#87748C" />
        </View>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
        }}
      >
        <SimpleLineIcons name="logout" size={24} color="#EA3131" style={{
          marginLeft: 10,
          marginRight: 10
        }} />
        <TextOpen
          style={{
            fontSize: 16,
            color: "#EA3131",
          }}
        >
          Logout
        </TextOpen>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
