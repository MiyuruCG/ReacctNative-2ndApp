import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./componetns/Header";

export default function App() {
  return (
    <View style={styles.screen}>
      <Header title="Guess Number" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
