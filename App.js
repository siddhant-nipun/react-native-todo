import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { TodoInput, TodoItem } from "./components";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [openInput, setOpenInput] = useState(false);

  const addTask = (enteredText) => {
    setTaskList((prev) => [...prev, enteredText]);
    setOpenInput(false);
  };

  const handleDeleteTask = (task) => {
    setTaskList((prev) => prev.filter((todo) => task !== todo));
  };

  return (
    <>
    <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={{ marginVertical: 20 }}>
          <Button
            title="Add New Goal"
            color="#5e0acc"
            onPress={() => setOpenInput(true)}
          />
        </View>
        <TodoInput
          addTask={addTask}
          visible={openInput}
          onCancel={() => setOpenInput(false)}
        />
        <View style={styles.todoContainer}>
          <FlatList
            data={taskList}
            keyExtractor={(item, index) => {
              return index;
            }}
            renderItem={(itemData) => {
              return (
                <TodoItem
                  item={itemData.item}
                  onDeleteItem={handleDeleteTask}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 16,
    // backgroundColor: "#1e085a",
  },
  todoContainer: {
    flex: 5,
  },
});
