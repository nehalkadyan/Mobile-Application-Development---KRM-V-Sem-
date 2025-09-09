import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const index = () => {
  // state

  const [count, setCount] = useState(100);

  // increment

  const increment = () => {
    setCount((count) => count + 1);
  };

  // decrement

  const decremnt = () => {
    setCount((count) => count - 1);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Counter App</Text>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>{count}</Text>

      <View style={{ flexDirection: "row", gap: 150 }}>
        <Button onPress={increment} title="+"></Button>

        <Button onPress={decremnt} title="-"></Button>
      </View>
    </View>
  );
};

export default index;
