import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  Dimensions,
  Image,
} from "react-native";

const images = [
  require("./assets/im1.jpg"),
  require("./assets/im2.jpg"),
  require("./assets/im3.jpg"),
  require("./assets/im4.jpg"),
  require("./assets/im5.jpg"),
  require("./assets/im6.jpg"),
  require("./assets/im7.jpg"),
  require("./assets/im8.jpg"),
  require("./assets/im9.jpg"),
  require("./assets/im10.jpg"),
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModaImage] = useState(require("./assets/im1.jpg"));

  const toggleModal = (visible, key) => {
    setModaImage(images[key]);
    setModalVisible(visible);
  };

  const imageItem = (url) => {
    return <Image source={url} style={styles.image} />;
  };
  return (
    <View style={styles.container}>
      <Modal
        style={styles.modal}
        animationType={"fade"}
        transparent
        visible={modalVisible}
        onRequestClose={() => {}}
      >
        <View style={styles.modal}>
          <Text
            style={styles.text}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            CLose
          </Text>
          {imageItem(modalImage)}
        </View>
      </Modal>

      {images.map((val, index) => {
        return (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => {
              toggleModal(true, index);
            }}
          >
            <View style={styles.imagewrap}>{imageItem(val)}</View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#ccc",
  },
  image: {
    flex: 1,
    width: null,
    alignSelf: "stretch",
  },
  imagewrap: {
    padding: 2,
    margin: 2,
    width: Dimensions.get("window").width / 2 - 4,
    height: Dimensions.get("window").height / 3 - 12,
    backgroundColor: "white",
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  text: {
    color: "white",
  },
});
