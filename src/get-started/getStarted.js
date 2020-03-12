import React from 'react';
import {color} from './../../resources';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

const GetStarted = ({navigation}) => {
  const x = Dimensions.get('window').width;
  const y = Dimensions.get('window').height;

  return (
    <SafeAreaView>
      <View style={{height: y}}>
        <Image
          style={{height: y / 2.5, width: x}}
          source={require('./images/drawable-xxxhdpi/bg.png')}
        />
       <View style={styles.centerContainer}>
         <Image
           style={styles.logo}
           source={require('./images/drawable-xxxhdpi/alicelogo.png')}
         />
         <Text style={styles.description}>Manage your customer fast & simple with our CRM</Text>
       </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.actionButton}
            onPress={()=>navigation.navigate('Login')}
          >
            <Text style={styles.actionButtonText}> Get Started </Text>
          </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  centerContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  logo: {
    width: '30%',
    height: undefined,
    aspectRatio: 2.902,
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  description: {
    color: color.secondary4,
    fontWeight: "500",
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  actionButton: {
    width: '90%',
    backgroundColor: color.primary,
    padding: 20,
    position: 'absolute',
    bottom: 80,
    margin: '5%',
    borderRadius: 10,
  },
  actionButtonText: {
    color: color.white,
    textAlign: 'center',
    fontSize: 20,
  }
});
export default GetStarted;
