import {createStackNavigator} from "@react-navigation/stack";
import Comment from "../screens/Comment";
import People from "../screens/People";
import PeopleView from "../screens/PeopleView";
import Techees from "../screens/Techies";
import YbnlMafia from "../screens/YbnlMafia";

const Stack = createStackNavigator();

const PeopleStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={"PeopleStack"} component={People} />
      <Stack.Screen name={"PeopleView"} component={PeopleView} />
      <Stack.Screen name={"Techees"} component={Techees} /> 
      <Stack.Screen name={"YbnlMafia"} component={YbnlMafia} />
      <Stack.Screen name={"Comment"} component={Comment} />
    </Stack.Navigator>
  );
};

export default PeopleStack;
