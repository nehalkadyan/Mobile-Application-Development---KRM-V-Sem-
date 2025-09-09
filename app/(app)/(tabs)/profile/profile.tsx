import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

const profile = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Profile Tab</Text>

      <Button
        title="Go to New Page"
        onPress={() => router.push("/(app)/(tabs)/profile/screens/new")}
      ></Button>
    </View>
  );
};

export default profile;
