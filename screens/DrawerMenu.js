import * as React from "react";
import { useState } from "react";
import MenuItem2 from "../components/MenuItem2";
import MenuItem1 from "../components/MenuItem1";
import MenuItem from "../components/MenuItem";
import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";

const DrawerMenu = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([
    <MenuItem2 style={styles.mt28} />,
    <MenuItem1 style={styles.mt28} />,
    <MenuItem style={styles.mt28} />,
  ]);
  const [drawerItemsActive] = useState([
    <MenuItem2 style={styles.mt28} />,
    <MenuItem1 style={styles.mt28} />,
    <MenuItem style={styles.mt28} />,
  ]);
  const stateIndex = !state ? 0 : state.index - 1;
  return (
    <SafeAreaView style={styles.drawerMenuSafeAreaView}>
      <View style={styles.view}>
        <View style={styles.menuView}>
          <View style={styles.profileView}>
            <View style={styles.frameView}>
              <Image
                style={styles.group3Icon}
                resizeMode="cover"
                source={require("../assets/group32.png")}
              />
            </View>
            <View style={[styles.frameView1, styles.ml12]}>
              <Text style={styles.helloText}>Hello</Text>
              <Text style={styles.macyJohnsonText}>Macy Johnson</Text>
            </View>
          </View>
          <View style={[styles.lineView, styles.mt20]} />
          <View style={[styles.drawerMenuItems, styles.mt20]}>
            {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
            {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
            {stateIndex === 2 ? drawerItemsActive[2] : drawerItemsNormal[2]}
            <View style={[styles.menuItemView, styles.mt28]}>
              <Image
                style={styles.ionmailOutlineIcon}
                resizeMode="cover"
                source={require("../assets/ionmailoutline.png")}
              />
              <Text style={[styles.getHelpText, styles.ml16]}>Get Help</Text>
            </View>
            <View style={[styles.menuItemView1, styles.mt28]}>
              <Image
                style={styles.calenderIcon}
                resizeMode="cover"
                source={require("../assets/calender.png")}
              />
              <Text style={[styles.covidAdvisoryText, styles.ml16]}>
                Covid Advisory
              </Text>
            </View>
            <View style={[styles.menuItemView2, styles.mt28]}>
              <Image
                style={styles.rateIcon}
                resizeMode="cover"
                source={require("../assets/rate.png")}
              />
              <Text style={[styles.rateUsText, styles.ml16]}>Rate us</Text>
            </View>
          </View>
        </View>
        <View style={styles.appVersionDetails}>
          <Text style={styles.appVersion101}>App version 1.0.1</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ml12: {
    marginLeft: 12,
  },
  ml16: {
    marginLeft: 16,
  },
  mt28: {
    marginTop: 28,
  },
  mt20: {
    marginTop: 20,
  },
  drawerMenuSafeAreaView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  group3Icon: {
    position: "relative",
    width: 49,
    height: 49,
    flexShrink: 0,
  },
  frameView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  helloText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "left",
  },
  macyJohnsonText: {
    position: "relative",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  profileView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  lineView: {
    alignSelf: "stretch",
    position: "relative",
    borderStyle: "solid",
    borderColor: "#e6e9f0",
    borderTopWidth: 1,
    height: 1,
    flexShrink: 0,
  },
  ionmailOutlineIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  getHelpText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  menuItemView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  calenderIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  covidAdvisoryText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  menuItemView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rateIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  rateUsText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  menuItemView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  drawerMenuItems: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  menuView: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  appVersion101: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "left",
  },
  appVersionDetails: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  view: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    flexDirection: "column",
    paddingHorizontal: 30,
    paddingVertical: 20,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

export default DrawerMenu;
