import { StyleSheet, View, Text, Pressable } from "react-native";
const GoalItem = (props) => {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
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

    margin: 5,
    borderRadius: 10,
    backgroundColor: "#9ACBD0",
    flexDirection: "column",
  },
  pressedItem: { opacity: 0.5 },
  goalText: { color: "black", padding: 10 },
});
