import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
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
      <TextInput
        placeholderTextColor="gray"
        placeholder="Serach for restaurant, item or more..."
        style={styles.searchBox}
      ></TextInput>

      <View style={styles.imgContainer}>
        <Image
          style={{ height: 200, width: "100%", borderRadius: 10 }}
          source={{
            uri: "https://images.unsplash.com/photo-1635526910370-6881e1756fee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        ></Image>
      </View>

      <View style={{ padding: 10 }}>
        <Text style={styles.subtitle}>What's on your mind?</Text>

        <ScrollView horizontal style = {{paddingTop: 10, marginLeft: -10}}>
          <View style={styles.itemContainer}>
            <View>
              <Image
                style={styles.itemImage}
                source={{
                  uri: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=810&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
              ></Image>
            </View>

            <View>
              <Text style = {styles.itemName}>Biryani</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View>
              <Image
                style={styles.itemImage}
                source={{
                  uri: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
              ></Image>
            </View>

            <View>
              <Text  style = {styles.itemName}>Dessert</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View>
              <Image
                style={styles.itemImage}
                source={{
                  uri: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
              ></Image>
            </View>

            <View>
              <Text  style = {styles.itemName}>Dessert</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View>
              <Image
                style={styles.itemImage}
                source={{
                  uri: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
              ></Image>
            </View>

            <View>
              <Text  style = {styles.itemName}>Dessert</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View>
              <Image
                style={styles.itemImage}
                source={{
                  uri: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
              ></Image>
            </View>

            <View>
              <Text  style = {styles.itemName}>Dessert</Text>
            </View>
          </View>
        </ScrollView>
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

  itemName : {
    fontSize : 14
  }
});
