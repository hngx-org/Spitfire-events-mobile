import {createStackNavigator} from "@react-navigation/stack";
import Comment from "../screens/Comment";
import People from "../screens/People";
import Techees from "../screens/Techies";

const Stack = createStackNavigator();

const PeopleStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={"PeopleStack"} component={People} />
      <Stack.Screen name={"Techees"} component={Techees} /> 
      <Stack.Screen name={"Comment"} component={Comment} />
    </Stack.Navigator>
  );
};

export default PeopleStack;
