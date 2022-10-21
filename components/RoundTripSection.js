import * as React from "react";
import { useState } from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const RoundTripSection = ({ style }) => {
  const [outlinedTextOnlyNoIcon4, setOutlinedTextOnlyNoIcon4] =
    useState("1 Adult");
  const [outlinedTextOnlyNoIcon5, setOutlinedTextOnlyNoIcon5] =
    useState("Economy");
  const navigation = useNavigation();

  return (
    <View style={[styles.roundTripSection, style, styles.topTabContent]}>
      <View style={styles.formView}>
        <View style={styles.outlinedTextOnlyNoIcon}>
          <View style={styles.outlinedLabeledView}>
            <View style={styles.dpBorder} />
            <View style={styles.dpBorder1} />
            <Text style={styles.textData}>Select Departure</Text>
            <Text style={styles.labelCaptionText}>From</Text>
            <View style={styles.airplaneTakeoffView}>
              <Image
                style={styles.airplaneTakeOff}
                resizeMode="cover"
                source={require("../assets/airplane-take-off.png")}
              />
            </View>
          </View>
        </View>
        <RNPTextInput
          style={[
            styles.outlinedTextOnlyNoIcon1,
            styles.outlinedTextOnlyNoIcon1Value,
            styles.mt18,
          ]}
          placeholder="Select Arrival"
          label="To"
          mode="outlined"
          left={
            <RNPTextInput.Icon
              style={{ marginTop: "50%" }}
              name="airplane-landing"
            />
          }
          placeholderTextColor="#dcdedf"
          outlineColor="#dcdedf"
          activeOutlineColor="#7f7f7f"
          theme={{
            fonts: { fontFamily: "Roboto", fontWeight: "Regular" },
            colors: { text: "#191919", background: "#fff" },
          }}
        />
        <View style={[styles.inputsRowView, styles.mt18]}>
          <RNPTextInput
            style={[
              styles.outlinedTextOnlyNoIcon2,
              styles.outlinedTextOnlyNoIcon2Value,
            ]}
            placeholder="Select Date"
            label="Departure"
            mode="outlined"
            left={
              <RNPTextInput.Icon
                style={{ marginTop: "50%" }}
                name="calendar-blank"
              />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: { fontFamily: "Roboto", fontWeight: "Regular" },
              colors: { text: "#191919", background: "#fff" },
            }}
          />
          <RNPTextInput
            style={[
              styles.outlinedTextOnlyNoIcon3,
              styles.outlinedTextOnlyNoIcon3Value,
              styles.ml13,
            ]}
            placeholder="Select Date"
            label="Return"
            mode="outlined"
            left={
              <RNPTextInput.Icon
                style={{ marginTop: "50%" }}
                name="calendar-blank"
              />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: { fontFamily: "Roboto", fontWeight: "Regular" },
              colors: { text: "#191919", background: "#fff" },
            }}
          />
        </View>
        <View style={[styles.inputsRowView1, styles.mt18]}>
          <RNPTextInput
            style={[
              styles.outlinedTextOnlyNoIcon4,
              styles.outlinedTextOnlyNoIcon4Value,
            ]}
            placeholder="Select Pax"
            label="Passengers"
            mode="outlined"
            value={outlinedTextOnlyNoIcon4}
            onChangeText={setOutlinedTextOnlyNoIcon4}
            left={
              <RNPTextInput.Icon
                style={{ marginTop: "50%" }}
                name="account-multiple"
              />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: { fontFamily: "Roboto", fontWeight: "Regular" },
              colors: { text: "#191919", background: "#fff" },
            }}
          />
          <RNPTextInput
            style={[
              styles.outlinedTextOnlyNoIcon5,
              styles.outlinedTextOnlyNoIcon5Value,
              styles.ml13,
            ]}
            placeholder="Select Class"
            label="Class"
            mode="outlined"
            value={outlinedTextOnlyNoIcon5}
            onChangeText={setOutlinedTextOnlyNoIcon5}
            left={
              <RNPTextInput.Icon style={{ marginTop: "50%" }} name="thumb-up" />
            }
            placeholderTextColor="#dcdedf"
            outlineColor="#dcdedf"
            activeOutlineColor="#7f7f7f"
            theme={{
              fonts: { fontFamily: "Roboto", fontWeight: "Regular" },
              colors: { text: "#191919", background: "#fff" },
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.buttonPrimary, styles.mt13]}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("SearchResults")}
      >
        <Text style={styles.viewDetailsText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  outlinedTextOnlyNoIcon1Value: {
    fontFamily: "Roboto",
  },
  outlinedTextOnlyNoIcon2Value: {
    fontFamily: "Roboto",
  },
  outlinedTextOnlyNoIcon3Value: {
    fontFamily: "Roboto",
  },
  ml13: {
    marginLeft: 13,
  },
  outlinedTextOnlyNoIcon4Value: {
    fontFamily: "Roboto",
  },
  outlinedTextOnlyNoIcon5Value: {
    fontFamily: "Roboto",
  },
  mt18: {
    marginTop: 18,
  },
  mt13: {
    marginTop: 13,
  },
  dpBorder: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#263238",
    borderWidth: 1,
    opacity: 0.16,
  },
  dpBorder1: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#0e4da4",
    borderWidth: 2,
    display: "none",
  },
  textData: {
    position: "absolute",
    top: 10,
    right: 12.31,
    bottom: 10,
    left: 41.14,
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 24,
    fontFamily: "Roboto",
    color: "#9eaab6",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
  },
  labelCaptionText: {
    position: "absolute",
    top: -7,
    right: 0,
    left: 12,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
    height: 16,
  },
  airplaneTakeOff: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 20,
    height: 20,
  },
  airplaneTakeoffView: {
    position: "absolute",
    top: 15,
    left: 12,
    width: 20,
    height: 20,
  },
  outlinedLabeledView: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  outlinedTextOnlyNoIcon: {
    position: "relative",
    width: 313,
    height: 56,
    flexShrink: 0,
  },
  outlinedTextOnlyNoIcon1: {
    position: "relative",
    width: 313,
    height: 56,
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  outlinedTextOnlyNoIcon2: {
    position: "relative",
    width: 150,
    height: 56,
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  outlinedTextOnlyNoIcon3: {
    position: "relative",
    width: 150,
    height: 56,
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  inputsRowView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  outlinedTextOnlyNoIcon4: {
    position: "relative",
    width: 150,
    height: 56,
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  outlinedTextOnlyNoIcon5: {
    position: "relative",
    width: 150,
    height: 56,
    flexShrink: 0,
    alignSelf: "flex-start",
  },
  inputsRowView1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  formView: {
    width: 313,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viewDetailsText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 120,
  },
  buttonPrimary: {
    borderRadius: 5,
    backgroundColor: "#f99a0e",
    width: 313,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  roundTripSection: {
    flex: 1,
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: "#fff",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default RoundTripSection;
