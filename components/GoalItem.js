import { StyleSheet, View, Text, Pressable } from "react-native";
const GoalItem = (props) => {
  return (
    <Pressable onPress={props.onDeleteItem.bind()}>
      <View style={styles.listItems}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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
  goalText: { color: "white" },
});
