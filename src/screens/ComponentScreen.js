import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = () => {
  const greeting = "My name is Nick";
  const test = <Text>This is another test</Text>
  return (
    <View>
      <Text style = {styles.textStyle}>Getting started with React Native!</Text>
      <Text style = {styles.secondTextStyle }>{greeting}</Text>
      {test}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },

  secondTextStyle: {
    fontSize: 20
  }
});


export default ComponentScreen;
