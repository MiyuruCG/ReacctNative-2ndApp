import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Cards = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    //ios shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    //android shadow
    elevation: 5,

    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
});

export default Cards;
