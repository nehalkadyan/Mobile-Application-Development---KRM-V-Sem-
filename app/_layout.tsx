import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* screens */}
      <Stack.Screen name = "index" options  = {{ title : "Home"}} />
      <Stack.Screen name = "screens/Search" options  = {{ title : "Search"}} />
      <Stack.Screen name = "screens/Profile" options  = {{ title : "Profile"}} />
    </Stack>
  );
}
