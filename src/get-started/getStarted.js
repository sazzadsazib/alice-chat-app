import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  Text,
} from 'react-native';

const GetStarted = ({navigation}) => {
  const x = Dimensions.get('window').width;
  const y = Dimensions.get('window').height;

  return (
    <SafeAreaView>
      <View>
        <Image
          style={{height: y / 2.5, width: x}}
          source={require('./images/drawable-xxxhdpi/bg.png')}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});
export default GetStarted;
