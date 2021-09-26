import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {

  const friends = [
  {  name: 'Greg'   ,age: 21},
  {  name: 'Luke'   ,age: 22},
  {  name: 'Taylor' ,age: 23},
  {  name: 'Jeremy' ,age: 24},
  {  name: 'Kate'   ,age: 25},
  {  name: 'April'  ,age: 26},
  {  name: 'Jasper' ,age: 27},
  {  name: 'Luna'   ,age: 28},
  {  name: 'Nox'    ,age: 29}

  ];

  return (
    <FlatList
      //horizontal
      //showsHorizontalScrollIndicator = {false}
      keyExtractor = {(friend) => friend.name}
      data = {friends}
      renderItem = { ( { item } ) => {
        //element === {item: name : 'Friend#1'}, index:0
        //item === {name: friend#1}
        return <Text style = {styles.textStyle}> Name {item.name} - Age {item.age}</Text>
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 30
  }

});

export default ListScreen;
