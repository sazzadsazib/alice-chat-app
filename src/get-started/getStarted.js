import React from "react";
import {View,Text,Button} from 'react-native';
const GetStarted = ({navigation}) => {
  return (
    <View>
    <Text>Hello Get Started Here</Text>
      <Button
        title="Go to James"
        onPress={() => navigation.navigate('Login', {name: 'Jane'})}
      />
    </View>
  )
};
export default GetStarted;
