import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { client } from "./src/services/apollo";
import { FeedScreen } from "./src/screens/Feed/FeedScreen";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <FeedScreen />
      <StatusBar style="auto" />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
