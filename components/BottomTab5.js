import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const BottomTab5 = ({ style }) => {
  return (
    <View style={[styles.bottomTabView, style]}>
      <Image
        style={styles.iconSearchFlights}
        resizeMode="cover"
        source={require("../assets/icon--searchflights1.png")}
      />
      <Text style={[styles.searchText, styles.mt14]}>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt14: {
    marginTop: 14,
  },
  iconSearchFlights: {
    position: "relative",
    width: 20,
    height: 20.06,
    flexShrink: 0,
    opacity: 0.8,
  },
  searchText: {
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#10579b",
    textAlign: "center",
  },
  bottomTabView: {
    flex: 1,
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default BottomTab5;
