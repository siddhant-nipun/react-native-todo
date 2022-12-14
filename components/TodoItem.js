import { Pressable, StyleSheet, Text, View } from "react-native";

export const TodoItem = ({ item, onDeleteItem }) => {
  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: "black" }}
        onPress={onDeleteItem.bind(this, item)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.todoText}>{item}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "#5e0acc",
    margin: 8,
    borderRadius: 8,
  },
  todoText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
