import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  Dimensions,
  Image,
} from "react-native";

const ImageItem = (props) => {
  return (
    <View style={styles.container}>
      <Image source={props.imageURL} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
  },
});

export default ImageITem;
