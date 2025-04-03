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
          placeholder="What is your goal?"
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  header: {
    fontSize: 24,
    color: "#006A71",
    paddingBottom: 10,
  },
  textInput: {
    fontSize: 18,
    backgroundColor: "#EBE8DB",
    padding: 10,
    borderRadius: 10,
  },
  button1: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#C1CFA1",
  },
  textButton: {
    fontSize: 18,
  },
});
