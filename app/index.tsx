import { useRouter } from "expo-router";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const array = [
    {
      id: 1,
      firstName: "Rohan",
      gender: "male",
      age: 20,
    },
    {
      id: 1,
      firstName: "Sohan",
      gender: "male",
      age: 20,
    },
    {
      id: 1,
      firstName: "Harris",
      gender: "male",
      age: 20,
    },
    {
      id: 1,
      firstName: "James",
      gender: "male",
      age: 20,
    },
    {
      id: 1,
      firstName: "Rohan",
      gender: "male",
      age: 20,
    },
    {
      id: 1,
      firstName: "Sohan",
      gender: "male",
      age: 20,
    },
    {
      id: 1,
      firstName: "Harris",
      gender: "male",
      age: 20,
    },
    {
      id: 1,
      firstName: "James",
      gender: "male",
      age: 20,
    },
  ];

  return (
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.heading}>This is my App!</Text>

    //   {/* Image */}

    //   <Image
    //     style={{ height: 200, width: 400 }}
    //     source={{
    //       uri: "https://images.unsplash.com/photo-1754597302822-4b96f3442d3f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     }}
    //   ></Image>

    //   <Image source={reactLogo}></Image>

    //   {/* Text Input */}

    //   <TextInput
    //     placeholderTextColor="gray"
    //     placeholder="Enter here..."
    //   ></TextInput>

    //   {/* Buttons */}

    //   <Button title = "Submit"></Button>

    //   {/* TouchableOpacity */}

    //   <TouchableOpacity>
    //     <Text>Register</Text>
    //   </TouchableOpacity>

    //   {/* Touchable Highlight */}

    //   <TouchableHighlight>
    //     <Text>Highlighted button</Text>
    //   </TouchableHighlight>

    // </SafeAreaView>

    <SafeAreaView style={{ padding: 10 }}>
      {/* <Text style={{ fontWeight: "bold", fontSize: 20 }}>FlatList Element</Text> */}

      <View style={{ alignItems: "center" }}>
        {/* <FlatList
        numColumns={3}
        data={array}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style = {{width: 100, padding: 10, borderColor : "black", borderWidth: 1, margin: 20, borderRadius : 15}}>
            <Text>{item.firstName}</Text>
            <Text>{item.gender}</Text>
            <Text>{item.age}</Text>
          </View>
        )}
      /> */}

        {/* Stack Navigation,   Tab Navigation */}

        <Text>Home Page</Text>

        <Button
          title="Go to Profile Page"
          onPress={() =>
            router.push({
              pathname: "/screens/Profile",
              params: { universityName: "KRM" },
            })
          }
        ></Button>
        <Button
          title="Go to Search Page"
          onPress={() =>
            router.push({
              pathname: "/screens/Search",
              params: { location: "Gurgaon" },
            })
          }
        ></Button>
      </View>
    </SafeAreaView>
  );
}

// stylesheet
const styles = StyleSheet.create({
  // heading: {
  //   fontSize: 20,
  //   color: "purple",
  // },

  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },

  searchBox: {
    padding: 15,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 17,
  },

  imgContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  subtitle: {
    fontWeight: "bold",
    fontSize: 15,
  },

  itemContainer: {
    flex: 1,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  itemImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },

  itemName: {
    fontSize: 14,
  },
});
