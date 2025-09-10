import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";

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
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      {/* <Text>Services Tab</Text> */}

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          padding: 20,
        }}
      >
        Users List:
      </Text>

      <Text
        style={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: 17,
          padding: 10,
        }}
      >
        Total Users : {users.length}
      </Text>

      {/* Displaying List of users */}

      <FlatList
        data={users}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              gap: 10,
              backgroundColor: "#E3DEDC",
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 15,
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 19, fontWeight: "600" }}>
              Name : {item.name}
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "400" }}>
              Email : {item.email}
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "400" }}>
              Company : {item.company.name}
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "400" }}>
              Website : {item.website}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default services;
