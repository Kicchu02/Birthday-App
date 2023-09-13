import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width;
const imageHeight = dimensions.height;

const Images = () => {
  return (
    <View style={styles.container}>
      <Image
        // resizeMode="contain"
        style={styles.photo}
        source={require("./res/photo.jpg")}
      />
    </View>
  );
};

export default Images;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0)",

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 25,

    elevation: 15,
  },

  topmost: {
    marginTop: 100,
  },

  heading: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center",
  },

  content: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  photo: {
    width: imageWidth - 30,
    height: 400,
    marginVertical: 30,
    borderRadius: 50,
  },
});
