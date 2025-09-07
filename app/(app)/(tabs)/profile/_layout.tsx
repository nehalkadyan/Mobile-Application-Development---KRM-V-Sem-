import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="screens/new" options={{ title: "New Page" }} />
    </Stack>
  );
};

export default Layout;
