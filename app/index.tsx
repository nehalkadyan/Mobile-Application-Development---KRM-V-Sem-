import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity } from "react-native";
import reactLogo from "../assets/images/react-logo.png";

export default function Index() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>This is my App!</Text>

      {/* Image */}

      <Image
        style={{ height: 200, width: 400 }}
        source={{
          uri: "https://images.unsplash.com/photo-1754597302822-4b96f3442d3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
      ></Image>

      <Image source={reactLogo}></Image>

      {/* Text Input */}

      <TextInput
        placeholderTextColor="gray"
        placeholder="Enter here..."
      ></TextInput>

      {/* Buttons */}

      <Button title = "Submit"></Button>

      {/* TouchableOpacity */}

      <TouchableOpacity>
        <Text>Register</Text>
      </TouchableOpacity>


      {/* Touchable Highlight */}

      <TouchableHighlight>
        <Text>Highlighted button</Text>
      </TouchableHighlight>


    </SafeAreaView>
  );
}

// stylesheet
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    color: "purple",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
