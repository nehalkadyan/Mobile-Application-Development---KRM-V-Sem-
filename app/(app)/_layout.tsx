import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Home Page", headerShown: false }}
      />
    </Stack>
  );
};

export default Layout;
