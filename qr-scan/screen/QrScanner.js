import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Modal,
  TouchableHighlight,
  Image,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";
import { BarCodeScanner } from "expo-barcode-scanner";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

export default function QrScanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(true);
  const [modalVisible, setModalVisible] = useState(true);
  const [uri, setUri] = useState("https://google.com");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setModalVisible(true);
    // console.warn("Scan returned " + data);
    setUri({ uri: data });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setScanned(false);
        }}
      >
        <View style={{ flex: 1 }}>
          <WebView
            style={{ flex: 1 }}
            originWhitelist={["*"]}
            source={{ uri: uri["uri"] }}
          />

          <TouchableHighlight
            style={{
              backgroundColor: "black",
              padding: 15,
              alignItems: "center",
            }}
            onPress={() => {
              setModalVisible(!modalVisible);
              setScanned(false);
            }}
            underlayColor="slategray"
          >
            <Text style={{ color: "white", fontSize: 15 }}>Re Scan</Text>
          </TouchableHighlight>
        </View>
      </Modal>

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ marginBottom: 100 }}>
          <View style={{ alignItems: "center", marginBottom: 5 }}>
            <Image
              style={{
                width: 50,
                height: 100,
                resizeMode: "contain",
                marginBottom: 20,
              }}
              source={{ uri: "http://domain.biz/img/logo_dark.png" }}
            />
          </View>
        </View>
      </BarCodeScanner>
    </View>
  );
}
