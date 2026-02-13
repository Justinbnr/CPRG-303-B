import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View
} from "react-native";
import ToDoForm from "./ToDoForm";
import ToDoList from "./TodoList";

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContent}>
        <ToDoList />
      </View>
      <ToDoForm />
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
});

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
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
