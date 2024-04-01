import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';

function ToDoList({ tasks }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Pressable>
                    <View style={[styles.task, styles.completed]}>
                        <Text style={styles.taskText}>Do laundry</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={[styles.task]}>
                        <Text style={styles.taskText}>Go to gym</Text>
                    </View>
                </Pressable>
                <Pressable>
                    <View style={[styles.task, styles.completed]}>
                        <Text style={styles.taskText}>Walk dog</Text>
                    </View>
                </Pressable>
                
                {tasks.map((task, index) => (
                    <Pressable key={index}>
                        <View style={[styles.task]}>
                            <Text style={styles.taskText}>{task}</Text>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 80 : 0,
    },
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
});

export default ToDoList;