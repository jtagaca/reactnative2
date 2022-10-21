import * as React from "react";
import {
  View,
  SafeAreaView,
  StyleProp,
  ViewStyle,
  Pressable,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.headerSafeAreaView, style]}>
      <View style={styles.view}>
        <Pressable style={styles.iconBack} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon--back.png")}
          />
        </Pressable>
        <View style={styles.bookingsView}>
          <Text style={styles.bookingsText}>Bookings</Text>
        </View>
        <View style={styles.iconKebab}>
          <View style={styles.frameView}>
            <Image
              style={styles.ellipseIcon}
              resizeMode="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.ellipseIcon1, styles.mt4]}
              resizeMode="cover"
              source={require("../assets/ellipse-2.png")}
            />
            <Image
              style={[styles.ellipseIcon2, styles.mt4]}
              resizeMode="cover"
              source={require("../assets/ellipse-3.png")}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  headerSafeAreaView: {
    backgroundColor: "#fff",
  },
  icon: {
    width: 32,
    height: 32,
    flexShrink: 0,
    overflow: "hidden",
  },
  iconBack: {
    position: "relative",
  },
  bookingsText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  bookingsView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  ellipseIcon: {
    position: "relative",
    width: 4.6,
    height: 4.6,
    flexShrink: 0,
  },
  ellipseIcon1: {
    position: "relative",
    width: 4.6,
    height: 4.6,
    flexShrink: 0,
  },
  ellipseIcon2: {
    position: "relative",
    width: 4.6,
    height: 4.6,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 5.1,
    left: 13.7,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconKebab: {
    position: "relative",
    width: 32,
    height: 32,
    flexShrink: 0,
    overflow: "hidden",
  },
  view: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Header1;
