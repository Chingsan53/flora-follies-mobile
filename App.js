import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { Link, useRouter } from "expo-router";

export default function App() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="What is your name?"
        ></TextInput>
        <Text style={styles.header}>Daily 3</Text>
        <Text style={styles.header}>083, 830, 308</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: "#EBE8DB",
    padding: 10,
    borderRadius: 10,
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  goalsContainer: {
    flex: 6,
    flexDirection: "column",
  },
  listItems: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "#9ACBD0",
    flexDirection: "column",
  },
});
