import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BodyText = (props) => (
  <Text style={{ ...style.body, ...props.style }}>{props.children}</Text>
);

const style = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});

export default BodyText;
