import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Onboarding from "../screens/Onboarding";
import Register from "../screens/Register";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
