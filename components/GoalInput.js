import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ setGoals, setModalIsVisible }) => {
  const [goalText, setGoalText] = useState("");

  return (
    <Modal animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />

        <TextInput
          style={styles.textInput}
          value={goalText}
          placeholder="Your Course Goal"
          onChangeText={(e) => setGoalText(e)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="ADD GOAL"
              color={"#b180f0"}
              onPress={() => {
                setGoals((old) => [
                  ...old,
                  { text: goalText, id: Math.random().toString() },
                ]);
                setGoalText("");
                setModalIsVisible(false);
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#f31282"
              onPress={() => setModalIsVisible(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#3116b6",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    marginRight: 8,
    padding: 8,
    fontSize: 20,
    borderRadius: 6,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 16,
    width: 100,
  },
});

export default GoalInput;
