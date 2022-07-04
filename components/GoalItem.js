import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ item, setGoals }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() =>
          setGoals((old) => old.filter((goal) => goal.id !== item.id))
        }
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressed: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
    fontSize: 20,
  },
});

export default GoalItem;
