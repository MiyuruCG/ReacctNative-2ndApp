import Reac, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

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
};

const style = StyleSheet.create({});

export default GameScreen;
