import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'

function ToDoList(){
    return(
    <ScrollView style={styles.listContainer}>
        <Pressable>
            <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Do Laundry</Text>
                </View>
                </Pressable>
                 <Pressable>
            <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Go to Gym</Text>
                </View>
                </Pressable>
                 <Pressable>
            <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Walk Dog</Text>
                </View>
                </Pressable>
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    listContainer: {
        marginVertical: 20,
    },
    task:{
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc'
    },
    completed: {
        backgroundColor: '@e0e0e0'
    },
    taskText:{
        fontSize: 16,
    },
});

export default ToDoList