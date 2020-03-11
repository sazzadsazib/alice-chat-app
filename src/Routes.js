import React from "react";

//navigation import
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//component import
import GetStarted from "./get-started/getStarted";
import Login from "./login/Login";

const Routes = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'white' },
      }}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={() => ({ headerShown: true })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Routes;
