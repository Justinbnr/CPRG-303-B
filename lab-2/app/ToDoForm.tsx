import React from "react";
import { Button, StyleSheet, TextInput } from "react-native";

function ToDoForm() {
  return (
    <view style={styles.form}>
      <TextInput style={styles.input} placeholder="Add a new Task..." />
      <Button title="Add Task" onPress={() => alert("Task Added")} />
    </view>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
