import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over</TitleText>
      <View style={styles.imgContainer}>
        <Image
          fadeDuration={1000}
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resText}>
          The Number Of Rounds it took the Guess the Number{" "}
          <Text style={styles.heighlight}> {props.roundsNumber} </Text>to guess
          the Number <Text style={styles.heighlight}> {props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPressProp={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%%",
    height: "100%",
  },
  heighlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
