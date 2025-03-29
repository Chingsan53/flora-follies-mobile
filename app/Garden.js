import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
const Garden = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>This is Garden Tab</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    color: "#27391C",
    paddingBottom: 10,
  },
});

export default Garden;
