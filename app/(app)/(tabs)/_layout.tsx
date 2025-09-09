import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";
import React from "react";

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* Home Tab */}

      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="home" size={30} color="black" />
          ),
        }}
      />

      {/* Profile Tab */}

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="user" size={size} color="#000000" />
          ),
        }}
      />

      {/* Contact */}

      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="contacts" size={size} color="#000000" />
          ),
        }}
      />

      {/* Services Tab */}

      <Tabs.Screen
        name="services"
        options={{
          title: "Services",
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="customerservice" size={size} color="#000000" />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
