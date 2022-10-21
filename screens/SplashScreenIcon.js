import * as React from "react";
import { Image, StyleSheet, View, ImageBackground } from "react-native";

const SplashScreenIcon = () => {
  return (
    <ImageBackground
      style={styles.splashScreenIcon}
      resizeMode="cover"
      source={require("../assets/splashscreen.png")}
    >
      <View style={styles.logoSectionView}>
        <Image
          style={styles.logoIcon}
          resizeMode="cover"
          source={require("../assets/logo2.png")}
        />
      </View>
      <Image
        style={[styles.cloudsGraphicsIcon, styles.mt154]}
        resizeMode="cover"
        source={require("../assets/frame-2446.png")}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mt154: {
    marginTop: 154,
  },
  logoIcon: {
    position: "absolute",
    height: "100.71%",
    width: "100.3%",
    top: "-0.35%",
    right: "0.03%",
    bottom: "-0.35%",
    left: "-0.32%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  logoSectionView: {
    position: "relative",
    width: 285.16,
    height: 89.37,
    flexShrink: 0,
    zIndex: 0,
  },
  cloudsGraphicsIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    maxWidth: "100%",
    overflow: "hidden",
    height: 252,
    flexShrink: 0,
    zIndex: 1,
  },
  splashScreenIcon: {
    position: "relative",
    flex: 1,
    width: "100%",
    height: 1082,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SplashScreenIcon;
