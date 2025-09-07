import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const profile = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Profile Tab</Text>

      <Button
        title="Go to New Page"
        onPress={() => router.push("screens/new")}
      ></Button>
    </View>
  );
};

export default profile;
