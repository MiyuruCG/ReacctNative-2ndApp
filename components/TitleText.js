import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TitleText = (props) => (
  <Text style={{ ...style.title, ...props.style }}>{props.children}</Text>
);

const style = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
});

export default TitleText;
