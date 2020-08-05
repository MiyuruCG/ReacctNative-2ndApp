import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const NumberContainer = (props) => (
  <View style={style.container}>
    <Text style={style.text}>{props.children}</Text>
  </View>
);

const style = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default NumberContainer;
