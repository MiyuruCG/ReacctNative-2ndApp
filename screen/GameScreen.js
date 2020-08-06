import React, { useState, useRef } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";

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

  const curretnLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie", "the hit is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      curretnLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      curretnLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
  };

  return (
    <View style={style.screen}>
      <Text>Opponents Guess </Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Cards style={style.buttonContainer}>
        <Button title="LOWER" onPress={nextGuessHandler.bind(this, "lower")} />
        <Button
          title="GREATER"
          onPress={nextGuessHandler.bind(this, "greater")}
        />
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
