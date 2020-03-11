import React from "react";
import {View,Text,Button} from 'react-native';
const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate('GetStarted', {name: 'Jane'})}
      />
    </View>
  )
};
export default Login;
