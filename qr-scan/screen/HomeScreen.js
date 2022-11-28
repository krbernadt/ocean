import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";

import * as SplashScreen from "expo-splash-screen";

import TitleText from "../components/TitleText";
import CardMenu from "../components/CardMenu";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "hoca-bold": require("../assets/fonts/hoca-bold.ttf"),
    "exo-2": require("../assets/fonts/exo2-normal.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.rootContainer} onLayout={onLayoutRootView}>
      <View style={styles.titleContainer}>
        <TitleText />
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.menuImage}
          source={require("../assets/images/menu-image.jpg")}
        />
      </View>
      <View style={styles.menuCard}>
        <ScrollView>
          <View style={styles.cardContainer}>
            <CardMenu>{"test 1"}</CardMenu>
            <CardMenu>{"test 2"}</CardMenu>
          </View>
          <View style={styles.cardContainer}>
            <CardMenu>{"test 1"}</CardMenu>
            <CardMenu>{"test 2"}</CardMenu>
          </View>
          <View style={styles.cardContainer}>
            <CardMenu>{"test 1"}</CardMenu>
            <CardMenu>{"test 2"}</CardMenu>
          </View>
          <View style={styles.cardContainer}>
            <CardMenu>{"test 1"}</CardMenu>
            <CardMenu>{"test 2"}</CardMenu>
          </View>
          <View style={styles.cardContainer}>
            <CardMenu>{"test 1"}</CardMenu>
            <CardMenu>{"test 2"}</CardMenu>
          </View>
          <View style={styles.cardContainer2}>
            <CardMenu>{"test 1"}</CardMenu>
          </View>
        </ScrollView>
      </View>
      <View style={styles.navigationBar}></View>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    marginTop: "8%",
    marginBottom: "2%",
  },
  menuImage: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: "110%",
    height: deviceWidth < 800 ? 130 : 150,
    overflow: "hidden",
  },
  menuCard: {
    paddingTop: 20,
    paddingHorizontal: "10%",
    height: "48%",
    overflow: "hidden",
    marginBottom: 200,
    width: "100%",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  cardContainer2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
});
