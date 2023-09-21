import {createStackNavigator} from "@react-navigation/stack";
import Comment from "../screens/Comment";
import People from "../screens/People";
import PeopleView from "../screens/PeopleView";

const Stack = createStackNavigator();

const PeopleStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={"People"} component={People} />
      <Stack.Screen name={"PeopleView"} component={PeopleView} />
      <Stack.Screen name={"Comment"} component={Comment} />
    </Stack.Navigator>
  );
};

export default PeopleStack;
