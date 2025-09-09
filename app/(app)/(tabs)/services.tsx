import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const services = () => {
  // state for users
  const [users, setUsers] = useState([]);

  console.log("users", users);

  // function to fetch users
  const fetchUsers = async () => {
    // logic
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      // converting response to json

      const data = await response.json();

      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View>
      <Text>Services Tab</Text>
    </View>
  );
};

export default services;
