import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import NumberContainer from "../components/NumberContainer";
import Cards from "../components/Cards";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNo = Math.floor(Math.random() * (max - min)) + min;
  if (rndNo === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNo;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );

  return (
    <View style={style.screen}>
      <Text>Opponents Guess </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Cards style={style.buttonContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="GREATER" onPress={() => {}} />
      </Cards>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default GameScreen;
