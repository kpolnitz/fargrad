import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import TypeWriter from 'react-native-typewriter'
import SignUpScreen from './register'
import SignInScreen from './login'
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
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "AppleSDGothicNeo-Bold",
    color: "#34a4eb",
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
  },

  inputStyleSU: {
    backgroundColor: "white",
    
    paddingTop: 10, 
    paddingBottom: 10,
    paddingLeft: 47,
    paddingRight: 47,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
  },

  inputStyleSI: {
    backgroundColor: "white",
    
    paddingTop: 10, 
    paddingBottom: 10,
    paddingLeft: 50,
    paddingRight: 50,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
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
          <TouchableOpacity
            style={styles.inputStyleSI}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate('Sign In', { name: 'Sign In'}, )
            }>
            <Text style={styles.buttonText} >Sign In</Text>
          </TouchableOpacity>
          <Text></Text>
          <TouchableOpacity
            style={styles.inputStyleSU}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate('Sign Up', { name: 'Sign Up'}, )
            }>
            <Text style={styles.buttonText} >Sign Up</Text>
          </TouchableOpacity>

        {/* </View> */}
        {/*
        <Button title="+" onPress={addState} color="white" />
        <Text>{numClicks}</Text>
        <Button title="-" onPress={deleteState} color="white" />
              */}
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
      <Stack.Navigator   screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen}  />
        <Stack.Screen name="Sign In" component={SignInScreen} />
        <Stack.Screen name="Sign Up" component={SignUpScreen} />
      </Stack.Navigator>
 
    </NavigationContainer>
      
      
    
  );
}

export default YourApp;

