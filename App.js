import React from 'react';
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




})
const YourApp = () => {
  return (
    <View style={styles.container}>
      <TypeWriter style={styles.titleText} typing={1}>FarGrad.</TypeWriter>
      <Text style={styles.baseText} >While college may have ended, your connections have not.</Text>
      <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
      <Button title="Sign In" color="white" />
      <Button title="Sign Up" color="white" />

    </View>
  );
}

export default YourApp;

