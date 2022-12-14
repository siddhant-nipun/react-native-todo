import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export const TodoInput = ({ addTask, visible, onCancel }) => {
  const [enteredText, setEnteredText] = useState("");

  const handleTaskInput = (e) => {
    setEnteredText(e);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your task"
          onChangeText={handleTaskInput}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Add Task"
            onPress={() => {
              addTask(enteredText);
              setEnteredText("");
            }}
            color="#b180f0"
          />
          <Button
            title="Cancel"
            onPress={() => {
              setEnteredText("");
              onCancel();
            }}
            color="#f31282"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
    width: "100%",
    color: "#120438",
    padding: 4,
  },
  buttonContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
