import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchResults = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchResultsView}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.searchResultsBody}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.searchResultsBodyContent}
      >
        <View style={styles.listHeaderView}>
          <Text style={styles.resultsFoundText}>35 results found</Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={styles.listItemsView}>
          <View style={styles.flightCardHolder}>
            <View style={styles.flightCardView}>
              <View style={styles.frameView2}>
                <View style={styles.frameView}>
                  <View style={styles.groupView}>
                    <View style={styles.rectangleView} />
                    <Image
                      style={styles.image2Icon}
                      resizeMode="cover"
                      source={require("../assets/image-21.png")}
                    />
                  </View>
                  <Text style={[styles.unitedAirlinesText, styles.ml8]}>
                    United Airlines
                  </Text>
                </View>
                <View style={styles.frameView1}>
                  <Image
                    style={styles.fluenttimer24RegularIcon}
                    resizeMode="cover"
                    source={require("../assets/fluenttimer24regular1.png")}
                  />
                  <Text style={[styles.hr40minText, styles.ml4]}>
                    01 hr 40min
                  </Text>
                </View>
              </View>
              <View style={[styles.frameView4, styles.mt14]}>
                <View style={styles.group13View}>
                  <Text style={styles.sINText}>SIN</Text>
                  <Text style={[styles.singaporeText, styles.mt4]}>
                    Singapore
                  </Text>
                </View>
                <View style={[styles.frameView3, styles.ml18]}>
                  <Image
                    style={styles.line2Icon}
                    resizeMode="cover"
                    source={require("../assets/line21.png")}
                  />
                  <Image
                    style={styles.ovalIcon}
                    resizeMode="cover"
                    source={require("../assets/oval3.png")}
                  />
                  <Image
                    style={styles.iconFlight}
                    resizeMode="cover"
                    source={require("../assets/icon--flight1.png")}
                  />
                  <Image
                    style={styles.ovalIcon1}
                    resizeMode="cover"
                    source={require("../assets/oval3.png")}
                  />
                </View>
                <View style={[styles.group13View1, styles.ml18]}>
                  <Text style={styles.lAXText}>LAX</Text>
                  <Text style={[styles.losAngelesText, styles.mt4]}>
                    Los Angeles
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.line3Icon, styles.mt14]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
              <View style={[styles.frameView8, styles.mt14]}>
                <View style={styles.frameView7}>
                  <View style={styles.frameView5}>
                    <Image
                      style={styles.chairIcon}
                      resizeMode="cover"
                      source={require("../assets/chair.png")}
                    />
                    <Text style={[styles.businessClassText, styles.ml8]}>
                      Business Class
                    </Text>
                  </View>
                  <View style={styles.frameView6}>
                    <Text style={styles.fromText}>From</Text>
                    <Text style={[styles.text, styles.ml4]}>$1128</Text>
                  </View>
                </View>
                <View style={[styles.buttonPrimary, styles.mt10]}>
                  <Text style={styles.viewDetailsText}>View Details</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.flightCardHolder1}>
            <View style={styles.flightCardView1}>
              <View style={styles.frameView11}>
                <View style={styles.frameView9}>
                  <View style={styles.groupView1}>
                    <View style={styles.rectangleView1} />
                    <Image
                      style={styles.image2Icon1}
                      resizeMode="cover"
                      source={require("../assets/image-21.png")}
                    />
                  </View>
                  <Text style={[styles.unitedAirlinesText1, styles.ml8]}>
                    United Airlines
                  </Text>
                </View>
                <View style={styles.frameView10}>
                  <Image
                    style={styles.fluenttimer24RegularIcon1}
                    resizeMode="cover"
                    source={require("../assets/fluenttimer24regular1.png")}
                  />
                  <Text style={[styles.hr10minText, styles.ml4]}>
                    02 hr 10min
                  </Text>
                </View>
              </View>
              <View style={[styles.frameView13, styles.mt14]}>
                <View style={styles.group13View2}>
                  <Text style={styles.sINText1}>SIN</Text>
                  <Text style={[styles.singaporeText1, styles.mt4]}>
                    Singapore
                  </Text>
                </View>
                <View style={[styles.frameView12, styles.ml18]}>
                  <Image
                    style={styles.line2Icon1}
                    resizeMode="cover"
                    source={require("../assets/line21.png")}
                  />
                  <Image
                    style={styles.ovalIcon2}
                    resizeMode="cover"
                    source={require("../assets/oval3.png")}
                  />
                  <Image
                    style={styles.iconFlight1}
                    resizeMode="cover"
                    source={require("../assets/icon--flight1.png")}
                  />
                  <Image
                    style={styles.ovalIcon3}
                    resizeMode="cover"
                    source={require("../assets/oval3.png")}
                  />
                </View>
                <View style={[styles.group13View3, styles.ml18]}>
                  <Text style={styles.lAXText1}>LAX</Text>
                  <Text style={[styles.losAngelesText1, styles.mt4]}>
                    Los Angeles
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.line3Icon1, styles.mt14]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
              <View style={[styles.frameView17, styles.mt14]}>
                <View style={styles.frameView16}>
                  <View style={styles.frameView14}>
                    <Image
                      style={styles.chairIcon1}
                      resizeMode="cover"
                      source={require("../assets/chair.png")}
                    />
                    <Text style={[styles.businessClassText1, styles.ml8]}>
                      Business Class
                    </Text>
                  </View>
                  <View style={styles.frameView15}>
                    <Text style={styles.fromText1}>From</Text>
                    <Text style={[styles.text1, styles.ml4]}>$1420</Text>
                  </View>
                </View>
                <View style={[styles.buttonPrimary1, styles.mt10]}>
                  <Text style={styles.viewDetailsText1}>View Details</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.flightCardHolder2}>
            <View style={styles.flightCardView2}>
              <View style={styles.frameView20}>
                <View style={styles.frameView18}>
                  <View style={styles.groupView2}>
                    <View style={styles.rectangleView2} />
                    <Image
                      style={styles.image3Icon}
                      resizeMode="cover"
                      source={require("../assets/image-3.png")}
                    />
                  </View>
                  <Text style={[styles.asianaAirlinesText, styles.ml8]}>
                    Asiana Airlines
                  </Text>
                </View>
                <View style={styles.frameView19}>
                  <Image
                    style={styles.fluenttimer24RegularIcon2}
                    resizeMode="cover"
                    source={require("../assets/fluenttimer24regular1.png")}
                  />
                  <Text style={[styles.hr38minText, styles.ml4]}>
                    02 hr 38min
                  </Text>
                </View>
              </View>
              <View style={[styles.frameView22, styles.mt14]}>
                <View style={styles.group13View4}>
                  <Text style={styles.sINText2}>SIN</Text>
                  <Text style={[styles.singaporeText2, styles.mt4]}>
                    Singapore
                  </Text>
                </View>
                <View style={[styles.frameView21, styles.ml18]}>
                  <Image
                    style={styles.line2Icon2}
                    resizeMode="cover"
                    source={require("../assets/line21.png")}
                  />
                  <Image
                    style={styles.ovalIcon4}
                    resizeMode="cover"
                    source={require("../assets/oval3.png")}
                  />
                  <Image
                    style={styles.iconFlight2}
                    resizeMode="cover"
                    source={require("../assets/icon--flight3.png")}
                  />
                  <Image
                    style={styles.ovalIcon5}
                    resizeMode="cover"
                    source={require("../assets/oval3.png")}
                  />
                </View>
                <View style={[styles.group13View5, styles.ml18]}>
                  <Text style={styles.lAXText2}>LAX</Text>
                  <Text style={[styles.losAngelesText2, styles.mt4]}>
                    Los Angeles
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.line3Icon2, styles.mt14]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
              <View style={[styles.frameView26, styles.mt14]}>
                <View style={styles.frameView25}>
                  <View style={styles.frameView23}>
                    <Image
                      style={styles.chairIcon2}
                      resizeMode="cover"
                      source={require("../assets/chair.png")}
                    />
                    <Text style={[styles.businessClassText2, styles.ml8]}>
                      Business Class
                    </Text>
                  </View>
                  <View style={styles.frameView24}>
                    <Text style={styles.fromText2}>From</Text>
                    <Text style={[styles.text2, styles.ml4]}>$1550</Text>
                  </View>
                </View>
                <View style={[styles.buttonPrimary2, styles.mt10]}>
                  <Text style={styles.viewDetailsText2}>View Details</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.flightCardHolder3}>
            <View style={styles.flightCardView3}>
              <View style={styles.frameView29}>
                <View style={styles.frameView27}>
                  <View style={styles.groupView3}>
                    <View style={styles.rectangleView3} />
                    <Image
                      style={styles.image4Icon}
                      resizeMode="cover"
                      source={require("../assets/image-4.png")}
                    />
                  </View>
                  <Text style={[styles.lufthansaAirlinesText, styles.ml8]}>
                    Lufthansa Airlines
                  </Text>
                </View>
                <View style={styles.frameView28}>
                  <Image
                    style={styles.fluenttimer24RegularIcon3}
                    resizeMode="cover"
                    source={require("../assets/fluenttimer24regular1.png")}
                  />
                  <Text style={[styles.hr15minText, styles.ml4]}>
                    03 hr 15min
                  </Text>
                </View>
              </View>
              <View style={[styles.frameView31, styles.mt14]}>
                <View style={styles.group13View6}>
                  <Text style={styles.sINText3}>SIN</Text>
                  <Text style={[styles.singaporeText3, styles.mt4]}>
                    Singapore
                  </Text>
                </View>
                <View style={[styles.frameView30, styles.ml18]}>
                  <Image
                    style={styles.line2Icon3}
                    resizeMode="cover"
                    source={require("../assets/line21.png")}
                  />
                  <Image
                    style={styles.ovalIcon6}
                    resizeMode="cover"
                    source={require("../assets/oval3.png")}
                  />
                  <Image
                    style={styles.iconFlight3}
                    resizeMode="cover"
                    source={require("../assets/icon--flight3.png")}
                  />
                  <Image
                    style={styles.ovalIcon7}
                    resizeMode="cover"
                    source={require("../assets/oval3.png")}
                  />
                </View>
                <View style={[styles.group13View7, styles.ml18]}>
                  <Text style={styles.lAXText3}>LAX</Text>
                  <Text style={[styles.losAngelesText3, styles.mt4]}>
                    Los Angeles
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.line3Icon3, styles.mt14]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
              <View style={[styles.frameView35, styles.mt14]}>
                <View style={styles.frameView34}>
                  <View style={styles.frameView32}>
                    <Image
                      style={styles.chairIcon3}
                      resizeMode="cover"
                      source={require("../assets/chair.png")}
                    />
                    <Text style={[styles.economyClassText, styles.ml8]}>
                      Economy Class
                    </Text>
                  </View>
                  <View style={styles.frameView33}>
                    <Text style={styles.fromText3}>From</Text>
                    <Text style={[styles.text3, styles.ml4]}>$1650</Text>
                  </View>
                </View>
                <View style={[styles.buttonPrimary3, styles.mt10]}>
                  <Text style={styles.viewDetailsText3}>View Details</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.flightCardHolder4}>
            <View style={styles.flightCardView4}>
              <View style={styles.frameView38}>
                <View style={styles.frameView36}>
                  <View style={styles.groupView4}>
                    <View style={styles.rectangleView4} />
                    <Image
                      style={styles.image3Icon1}
                      resizeMode="cover"
                      source={require("../assets/image-3.png")}
                    />
                  </View>
                  <Text style={[styles.asianaAirlinesText1, styles.ml8]}>
                    Asiana Airlines
                  </Text>
                </View>
                <View style={styles.frameView37}>
                  <Image
                    style={styles.fluenttimer24RegularIcon4}
                    resizeMode="cover"
                    source={require("../assets/fluenttimer24regular1.png")}
                  />
                  <Text style={[styles.hr38minText1, styles.ml4]}>
                    03 hr 38min
                  </Text>
                </View>
              </View>
              <View style={[styles.frameView40, styles.mt14]}>
                <View style={styles.group13View8}>
                  <Text style={styles.sINText4}>SIN</Text>
                  <Text style={[styles.singaporeText4, styles.mt4]}>
                    Singapore
                  </Text>
                </View>
                <View style={[styles.frameView39, styles.ml18]}>
                  <Image
                    style={styles.line2Icon4}
                    resizeMode="cover"
                    source={require("../assets/line21.png")}
                  />
                  <Image
                    style={styles.ovalIcon8}
                    resizeMode="cover"
                    source={require("../assets/oval3.png")}
                  />
                  <Image
                    style={styles.iconFlight4}
                    resizeMode="cover"
                    source={require("../assets/icon--flight3.png")}
                  />
                  <Image
                    style={styles.ovalIcon9}
                    resizeMode="cover"
                    source={require("../assets/oval3.png")}
                  />
                </View>
                <View style={[styles.group13View9, styles.ml18]}>
                  <Text style={styles.lAXText4}>LAX</Text>
                  <Text style={[styles.losAngelesText4, styles.mt4]}>
                    Los Angeles
                  </Text>
                </View>
              </View>
              <Image
                style={[styles.line3Icon4, styles.mt14]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
              <View style={[styles.frameView44, styles.mt14]}>
                <View style={styles.frameView43}>
                  <View style={styles.frameView41}>
                    <Image
                      style={styles.chairIcon4}
                      resizeMode="cover"
                      source={require("../assets/chair.png")}
                    />
                    <Text style={[styles.businessClassText3, styles.ml8]}>
                      Business Class
                    </Text>
                  </View>
                  <View style={styles.frameView42}>
                    <Text style={styles.fromText4}>From</Text>
                    <Text style={[styles.text4, styles.ml4]}>$450</Text>
                  </View>
                </View>
                <View style={[styles.buttonPrimary4, styles.mt10]}>
                  <Text style={styles.viewDetailsText4}>View Details</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  mt3: {
    marginTop: 3,
  },
  mt4: {
    marginTop: 4,
  },
  group4SafeAreaView: {
    backgroundColor: "#fff",
  },
  ml8: {
    marginLeft: 8,
  },
  ml4: {
    marginLeft: 4,
  },
  ml18: {
    marginLeft: 18,
  },
  mt10: {
    marginTop: 10,
  },
  mt14: {
    marginTop: 14,
  },
  searchResultsBodyContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  resultsFoundText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  vectorIcon: {
    position: "relative",
    width: 17,
    height: 15,
    flexShrink: 0,
  },
  listHeaderView: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingBottom: 11,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    width: 48,
    height: 32,
  },
  image2Icon: {
    position: "absolute",
    top: 11.86,
    left: 5.45,
    width: 36.31,
    height: 8.28,
  },
  groupView: {
    position: "relative",
    width: 48,
    height: 32,
    flexShrink: 0,
  },
  unitedAirlinesText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fluenttimer24RegularIcon: {
    position: "relative",
    width: 19,
    height: 19,
    flexShrink: 0,
    overflow: "hidden",
  },
  hr40minText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "right",
  },
  frameView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 12,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sINText: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  singaporeText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group13View: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  line2Icon: {
    position: "absolute",
    transform: [
      {
        translateY: -0.79,
      },
    ],
    top: "50%",
    right: 7.5,
    left: 8.22,
    maxWidth: "100%",
    overflow: "hidden",
    height: 1.57,
    zIndex: 0,
  },
  ovalIcon: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 1,
  },
  iconFlight: {
    position: "relative",
    width: 41,
    height: 41,
    flexShrink: 0,
    zIndex: 2,
  },
  ovalIcon1: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 3,
  },
  frameView3: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  lAXText: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  losAngelesText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group13View1: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameView4: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line3Icon: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  chairIcon: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  businessClassText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
    width: 85,
  },
  frameView5: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fromText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#bbb",
    textAlign: "right",
    width: 32,
  },
  text: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "right",
  },
  frameView6: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView7: {
    alignSelf: "stretch",
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
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
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#f99a0e",
    flexDirection: "row",
    paddingHorizontal: 104,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView8: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCardView: {
    alignSelf: "stretch",
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
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCardHolder: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 9,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    width: 48,
    height: 32,
  },
  image2Icon1: {
    position: "absolute",
    top: 11.86,
    left: 5.45,
    width: 36.31,
    height: 8.28,
  },
  groupView1: {
    position: "relative",
    width: 48,
    height: 32,
    flexShrink: 0,
  },
  unitedAirlinesText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView9: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fluenttimer24RegularIcon1: {
    position: "relative",
    width: 19,
    height: 19,
    flexShrink: 0,
    overflow: "hidden",
  },
  hr10minText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "right",
  },
  frameView10: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView11: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 12,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sINText1: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  singaporeText1: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group13View2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  line2Icon1: {
    position: "absolute",
    transform: [
      {
        translateY: -0.79,
      },
    ],
    top: "50%",
    right: 7.5,
    left: 8.22,
    maxWidth: "100%",
    overflow: "hidden",
    height: 1.57,
    zIndex: 0,
  },
  ovalIcon2: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 1,
  },
  iconFlight1: {
    position: "relative",
    width: 41,
    height: 41,
    flexShrink: 0,
    zIndex: 2,
  },
  ovalIcon3: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 3,
  },
  frameView12: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  lAXText1: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  losAngelesText1: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group13View3: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameView13: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line3Icon1: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  chairIcon1: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  businessClassText1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
    width: 85,
  },
  frameView14: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fromText1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#bbb",
    textAlign: "right",
    width: 32,
  },
  text1: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "right",
  },
  frameView15: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView16: {
    alignSelf: "stretch",
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewDetailsText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 120,
  },
  buttonPrimary1: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#f99a0e",
    flexDirection: "row",
    paddingHorizontal: 104,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView17: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCardView1: {
    alignSelf: "stretch",
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
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCardHolder1: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 9,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    width: 48,
    height: 32,
  },
  image3Icon: {
    position: "absolute",
    top: 8.61,
    left: 5.65,
    width: 36.11,
    height: 14.77,
  },
  groupView2: {
    position: "relative",
    width: 48,
    height: 32,
    flexShrink: 0,
  },
  asianaAirlinesText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView18: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fluenttimer24RegularIcon2: {
    position: "relative",
    width: 19,
    height: 19,
    flexShrink: 0,
    overflow: "hidden",
  },
  hr38minText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "right",
  },
  frameView19: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView20: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 12,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sINText2: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  singaporeText2: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group13View4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  line2Icon2: {
    position: "absolute",
    transform: [
      {
        translateY: -0.79,
      },
    ],
    top: "50%",
    right: 7.5,
    left: 8.22,
    maxWidth: "100%",
    overflow: "hidden",
    height: 1.57,
    zIndex: 0,
  },
  ovalIcon4: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 1,
  },
  iconFlight2: {
    position: "relative",
    width: 41,
    height: 41,
    flexShrink: 0,
    zIndex: 2,
  },
  ovalIcon5: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 3,
  },
  frameView21: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  lAXText2: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  losAngelesText2: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group13View5: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameView22: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line3Icon2: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  chairIcon2: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  businessClassText2: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
    width: 85,
  },
  frameView23: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fromText2: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#bbb",
    textAlign: "right",
    width: 32,
  },
  text2: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "right",
  },
  frameView24: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView25: {
    alignSelf: "stretch",
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewDetailsText2: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 120,
  },
  buttonPrimary2: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#f99a0e",
    flexDirection: "row",
    paddingHorizontal: 104,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView26: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCardView2: {
    alignSelf: "stretch",
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
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCardHolder2: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 9,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    width: 48,
    height: 32,
  },
  image4Icon: {
    position: "absolute",
    top: 11.26,
    left: 3.71,
    width: 40,
    height: 9.47,
  },
  groupView3: {
    position: "relative",
    width: 48,
    height: 32,
    flexShrink: 0,
  },
  lufthansaAirlinesText: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView27: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fluenttimer24RegularIcon3: {
    position: "relative",
    width: 19,
    height: 19,
    flexShrink: 0,
    overflow: "hidden",
  },
  hr15minText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "right",
  },
  frameView28: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView29: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 12,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sINText3: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  singaporeText3: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group13View6: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  line2Icon3: {
    position: "absolute",
    transform: [
      {
        translateY: -0.79,
      },
    ],
    top: "50%",
    right: 7.5,
    left: 8.22,
    maxWidth: "100%",
    overflow: "hidden",
    height: 1.57,
    zIndex: 0,
  },
  ovalIcon6: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 1,
  },
  iconFlight3: {
    position: "relative",
    width: 41,
    height: 41,
    flexShrink: 0,
    zIndex: 2,
  },
  ovalIcon7: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 3,
  },
  frameView30: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  lAXText3: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  losAngelesText3: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group13View7: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameView31: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line3Icon3: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  chairIcon3: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  economyClassText: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  frameView32: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fromText3: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#bbb",
    textAlign: "right",
    width: 32,
  },
  text3: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "right",
  },
  frameView33: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView34: {
    alignSelf: "stretch",
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewDetailsText3: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 120,
  },
  buttonPrimary3: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#f99a0e",
    flexDirection: "row",
    paddingHorizontal: 104,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView35: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCardView3: {
    alignSelf: "stretch",
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
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCardHolder3: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 9,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#f6f6f6",
    borderWidth: 1,
    width: 48,
    height: 32,
  },
  image3Icon1: {
    position: "absolute",
    top: 8.61,
    left: 5.65,
    width: 36.11,
    height: 14.77,
  },
  groupView4: {
    position: "relative",
    width: 48,
    height: 32,
    flexShrink: 0,
  },
  asianaAirlinesText1: {
    position: "relative",
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView36: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  fluenttimer24RegularIcon4: {
    position: "relative",
    width: 19,
    height: 19,
    flexShrink: 0,
    overflow: "hidden",
  },
  hr38minText1: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "right",
  },
  frameView37: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView38: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 14,
    paddingTop: 12,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sINText4: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  singaporeText4: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group13View8: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  line2Icon4: {
    position: "absolute",
    transform: [
      {
        translateY: -0.79,
      },
    ],
    top: "50%",
    right: 7.5,
    left: 8.22,
    maxWidth: "100%",
    overflow: "hidden",
    height: 1.57,
    zIndex: 0,
  },
  ovalIcon8: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 1,
  },
  iconFlight4: {
    position: "relative",
    width: 41,
    height: 41,
    flexShrink: 0,
    zIndex: 2,
  },
  ovalIcon9: {
    position: "relative",
    width: 10,
    height: 10,
    flexShrink: 0,
    zIndex: 3,
  },
  frameView39: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  lAXText4: {
    position: "relative",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  losAngelesText4: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  group13View9: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameView40: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  line3Icon4: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 1,
    flexShrink: 0,
  },
  chairIcon4: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  businessClassText3: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "Inter",
    color: "#555",
    textAlign: "left",
    width: 85,
  },
  frameView41: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  fromText4: {
    position: "relative",
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "300",
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "right",
    width: 32,
  },
  text4: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "right",
    width: 48,
  },
  frameView42: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameView43: {
    alignSelf: "stretch",
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewDetailsText4: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
    width: 120,
  },
  buttonPrimary4: {
    alignSelf: "stretch",
    borderRadius: 5,
    backgroundColor: "#f99a0e",
    flexDirection: "row",
    paddingHorizontal: 104,
    paddingVertical: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView44: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCardView4: {
    alignSelf: "stretch",
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
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  flightCardHolder4: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 9,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  listItemsView: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  searchResultsBody: {
    alignSelf: "stretch",
    boxSizing: "border-box",
    flex: 1,
  },
  searchResultsView: {
    position: "relative",
    backgroundColor: "#f8f9fb",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default SearchResults;
