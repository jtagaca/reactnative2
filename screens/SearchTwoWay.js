import * as React from "react";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const SearchTwoWay = () => {
  const [outlinedTextOnlyNoIcon4, setOutlinedTextOnlyNoIcon4] =
    useState("1 Adult");
  const [outlinedTextOnlyNoIcon5, setOutlinedTextOnlyNoIcon5] =
    useState("Economy");
  const navigation = useNavigation();

  return (
    <View style={styles.searchTwoWayView}>
      <View style={styles.statusBarLight}>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/icons.png")}
        />
        <Text style={styles.timeText}>9:41</Text>
      </View>
      <View style={styles.group4View}>
        <Image
          style={styles.iconBack}
          resizeMode="cover"
          source={require("../assets/icon--back.png")}
        />
        <View style={styles.frameView}>
          <Text style={styles.searchFlightText}>Search Flight</Text>
        </View>
        <View style={styles.iconKebab}>
          <View style={styles.frameView1}>
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
      <View style={styles.frameView3}>
        <View style={styles.flightSelectionView}>
          <View style={styles.waySelectionView} />
        </View>
        <View style={[styles.frameView2, styles.mt20]}>
          <View style={styles.offersSectionView}>
            <Text style={styles.offersText}>Offers</Text>
            <ScrollView
              style={[styles.offersRowScrollView, styles.mt14]}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.offersRowScrollViewContent}
            >
              <View style={styles.offerCardView}>
                <View style={styles.offerDetailsView}>
                  <Text style={styles.discountForMastercardUsers}>
                    <Text style={styles.discountText}>20% discount</Text>
                    <Text style={styles.text}>{` `}</Text>
                    <Text style={styles.forMastercardUsers}>
                      for mastercard users
                    </Text>
                  </Text>
                  <Text style={[styles.limitedTimeOffer, styles.mt4]}>
                    Limited time offer!
                  </Text>
                </View>
                <Image
                  style={styles.offerImageIcon}
                  resizeMode="cover"
                  source={require("../assets/offer-image.png")}
                />
              </View>
              <View style={[styles.offerCardView1, styles.ml16]}>
                <View style={styles.offerDetailsView1}>
                  <Text style={styles.discountWithYourVisaCredit}>
                    <Text style={styles.discountText1}>25% discount</Text>
                    <Text style={styles.text1}>{` `}</Text>
                    <Text style={styles.withYourVisa}>
                      with your Visa credit cards
                    </Text>
                  </Text>
                  <Text style={[styles.limitedTimeOffer1, styles.mt4]}>
                    Limited time offer!
                  </Text>
                </View>
                <Image
                  style={styles.offerImageIcon1}
                  resizeMode="cover"
                  source={require("../assets/offer-image1.png")}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
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
  mt20: {
    marginTop: 20,
  },
  ml16: {
    marginLeft: 16,
  },
  offersRowScrollViewContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  mt14: {
    marginTop: 14,
  },
  icons: {
    position: "absolute",
    top: 18,
    right: 14.34,
    width: 66.66,
    height: 11.33,
  },
  timeText: {
    position: "absolute",
    transform: [
      {
        translateY: -8,
      },
    ],
    top: "50%",
    left: 32,
    fontSize: 15,
    letterSpacing: -0.24,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#000",
    textAlign: "left",
  },
  statusBarLight: {
    position: "relative",
    backgroundColor: "#fff",
    width: 375,
    height: 44,
    flexShrink: 0,
  },
  iconBack: {
    position: "relative",
    width: 32,
    height: 32,
    flexShrink: 0,
    overflow: "hidden",
  },
  searchFlightText: {
    position: "relative",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  frameView: {
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
  frameView1: {
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
  group4View: {
    backgroundColor: "#fff",
    width: 375,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  waySelectionView: {
    alignSelf: "stretch",
    borderRadius: 32,
    backgroundColor: "#f3f5f9",
    height: 44,
    flexShrink: 0,
    flexDirection: "row",
    padding: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightSelectionView: {
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 341,
    flexDirection: "column",
    padding: 14,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  offersText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  discountText: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  text: {
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  forMastercardUsers: {
    fontFamily: "Roboto",
  },
  discountForMastercardUsers: {
    position: "relative",
    fontSize: 14,
    lineHeight: 19,
    color: "#191919",
    textAlign: "left",
    width: 136,
  },
  limitedTimeOffer: {
    position: "relative",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Roboto",
    color: "#999",
    textAlign: "left",
    width: 136,
  },
  offerDetailsView: {
    position: "absolute",
    top: 13,
    left: 112,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  offerImageIcon: {
    position: "absolute",
    top: 17.31,
    left: 15,
    width: 74,
    height: 51,
  },
  offerCardView: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 264,
    height: 86,
    flexShrink: 0,
  },
  discountText1: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  text1: {
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  withYourVisa: {
    fontFamily: "Roboto",
  },
  discountWithYourVisaCredit: {
    position: "relative",
    fontSize: 14,
    lineHeight: 19,
    color: "#191919",
    textAlign: "left",
    width: 136,
  },
  limitedTimeOffer1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Roboto",
    color: "#999",
    textAlign: "left",
    width: 136,
  },
  offerDetailsView1: {
    position: "absolute",
    top: 13,
    left: 112,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  offerImageIcon1: {
    position: "absolute",
    top: 17.31,
    left: 15,
    width: 74.04,
    height: 50.85,
  },
  offerCardView1: {
    position: "relative",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.03)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 1,
    width: 264,
    height: 86,
    flexShrink: 0,
  },
  offersRowScrollView: {
    alignSelf: "stretch",
    width: "100%",
  },
  offersSectionView: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    width: 343,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView3: {
    backgroundColor: "#f8f9fb",
    width: 375,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  searchTwoWayView: {
    position: "relative",
    backgroundColor: "#f8f9fb",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default SearchTwoWay;
