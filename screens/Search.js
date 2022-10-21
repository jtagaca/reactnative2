import * as React from "react";
import { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import OneWaySection from "../components/OneWaySection";
import RoundTripSection from "../components/RoundTripSection";
import OneWay from "../components/OneWay";
import FrameComponent1 from "../components/Frame2112";
import FrameComponent from "../components/Frame2111";
import RoundTrip from "../components/RoundTrip";
import { TextInput as RNPTextInput } from "react-native-paper";

const TopTab = createMaterialTopTabNavigator();

const Search = () => {
  const navigation = useNavigation();
  const [outlinedTextOnlyNoIcon3, setOutlinedTextOnlyNoIcon3] =
    useState("1 Adult");
  const [outlinedTextOnlyNoIcon4, setOutlinedTextOnlyNoIcon4] =
    useState("Economy");

  return (
    <View style={styles.searchView}>
      <StatusBar barStyle="default" />
      <View style={styles.searchPageBody}>
        <View style={styles.flightSelectionView}>
          <TopTab.Navigator
            style={styles.waySelectionTopTabs}
            tabBar={({ state, descriptors, navigation, position }) => {
              const [activeItems] = React.useState([
                <OneWay />,
                <FrameComponent />,
              ]);
              const [normalItems] = React.useState([
                <FrameComponent1 />,
                <RoundTrip />,
              ]);
              const activeIndex = state.index;
              return (
                <View style={styles.topTabBarStyle}>
                  {normalItems.map((item, index) => {
                    const isFocused = state.index === index;
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          navigation.navigate({
                            name: state.routes[index].name,
                            merge: true,
                          });
                        }}
                      >
                        {activeIndex === index ? activeItems[index] : item}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              );
            }}
          >
            <TopTab.Screen name="One Way section" component={OneWaySection} />
            <TopTab.Screen
              name="Round trip section"
              component={RoundTripSection}
            />
          </TopTab.Navigator>
        </View>
        <View style={[styles.offersSectionView, styles.mt30]}>
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
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  group4SafeAreaView: {
    backgroundColor: "#fff",
  },
  topTabContent: {
    flex: 1,
  },
  waySelectionTopTabs: {
    width: "100%",
  },
  topTabBarStyle: {
    borderRadius: 32,
    backgroundColor: "#f3f5f9",
    width: 313,
    flexDirection: "row",
    padding: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    minHeight: 44,
  },
  outlinedTextOnlyNoIconValue: {
    fontFamily: "Roboto",
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
  outlinedTextOnlyNoIcon4Value: {
    fontFamily: "Roboto",
  },
  ml13: {
    marginLeft: 13,
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
  mt30: {
    marginTop: 30,
  },
  ml10: {
    marginLeft: 10,
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
  searchPageBody: {
    backgroundColor: "#f8f9fb",
    width: 375,
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  searchView: {
    position: "relative",
    backgroundColor: "#f8f9fb",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Search;
