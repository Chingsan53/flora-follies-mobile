import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { useState } from "react";

export default function App() {
  const router = useRouter();
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [...courseGoals, enteredGoalText]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {/* <Text>{courseGoals} </Text> */}
          {courseGoals.map((goal) => (
            <Text key={goal} style={styles.listItems}>
              {goal}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  header: {
    fontSize: 24,
    color: "#006A71",
    paddingBottom: 10,
    paddingTop: 10,
  },
  textInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#EBE8DB",
    width: "70%",
    marginRight: 8,
    padding: 8,
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
