import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import TypeWriter from 'react-native-typewriter'
const styles = StyleSheet.create({
  titleText: {
    fontFamily: "AppleSDGothicNeo-Bold",
    fontSize: 50,
    color: "white"
  },
  baseText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "AppleSDGothicNeo-Bold",
    color: "white",
    textAlign: "center"
  }, 
  container: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#34a4eb"
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }




})
const YourApp = () => {

  const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TypeWriter style={styles.titleText} typing={1}>FarGrad.</TypeWriter>
        <Text style={styles.baseText} >While college may have ended, your connections have not.</Text>
        <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
        {/*<View style={styles.buttons}> */}
          <Button title="Sign In" color="white"       onPress={() =>
        navigation.navigate('Sign In', { name: 'Jane' })
      }/>
          <Button title="Sign Up" color="white"       onPress={() =>
        navigation.navigate('Sign Up', { name: 'Jane' })
      }/>
        {/* </View> */}
        {/*
        <Button title="+" onPress={addState} color="white" />
        <Text>{numClicks}</Text>
        <Button title="-" onPress={deleteState} color="white" />
              */}
      </View>
    );
  };

  const SignUpScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TypeWriter style={styles.titleText} typing={1}>Sign Up.</TypeWriter>
      </View>
    );
  };

  const SignInScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TypeWriter style={styles.titleText} typing={1}>Sign In.</TypeWriter>
      </View>
    );
  };


  addState = () => {
    setNumClicks(numClicks+1)
  }
  deleteState = () => {
    setNumClicks(numClicks-1)
  }
  const [numClicks,setNumClicks] = useState(0);

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
      </Stack.Navigator>
 
    </NavigationContainer>
      
      
    
  );
}

export default YourApp;

