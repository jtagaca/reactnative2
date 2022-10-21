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

const Bookings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bookingsView}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.bookingsBodyScrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.bookingsBodyScrollViewContent}
      >
        <Text style={styles.upcomingBookingsText}>Upcoming Bookings</Text>
        <View style={[styles.bookingCardView, styles.mt14]}>
          <Image
            style={styles.bookingImageIcon}
            resizeMode="cover"
            source={require("../assets/booking-image.png")}
          />
          <View style={[styles.bookingDetailsView, styles.mt17]}>
            <View style={styles.frameView1}>
              <View style={styles.group13View}>
                <Text style={styles.sINText}>SIN</Text>
                <Text style={[styles.singaporeText, styles.mt6]}>
                  Singapore
                </Text>
                <Text style={[styles.terminal1Text, styles.mt6]}>
                  Terminal 1
                </Text>
              </View>
              <View style={[styles.frameView, styles.ml18]}>
                <Image
                  style={styles.line2Icon}
                  resizeMode="cover"
                  source={require("../assets/line2.png")}
                />
                <Image
                  style={styles.ovalIcon}
                  resizeMode="cover"
                  source={require("../assets/oval1.png")}
                />
                <Image
                  style={styles.iconFlight}
                  resizeMode="cover"
                  source={require("../assets/icon--flight.png")}
                />
                <Image
                  style={styles.ovalIcon1}
                  resizeMode="cover"
                  source={require("../assets/oval1.png")}
                />
              </View>
              <View style={[styles.group13View1, styles.ml18]}>
                <Text style={styles.lAXText}>LAX</Text>
                <Text style={[styles.losAngelesText, styles.mt6]}>
                  Los Angeles
                </Text>
                <Text style={[styles.terminal4Text, styles.mt6]}>
                  Terminal 4
                </Text>
              </View>
            </View>
            <View style={[styles.frameView4, styles.mt14]}>
              <View style={styles.frameView2}>
                <View style={styles.groupView}>
                  <View style={styles.rectangleView} />
                  <Image
                    style={styles.image2Icon}
                    resizeMode="cover"
                    source={require("../assets/image-2.png")}
                  />
                </View>
                <Text style={[styles.unitedAirlinesText, styles.ml8]}>
                  United Airlines
                </Text>
              </View>
              <View style={styles.frameView3}>
                <Image
                  style={styles.fluenttimer24RegularIcon}
                  resizeMode="cover"
                  source={require("../assets/fluenttimer24regular.png")}
                />
                <Text style={[styles.hr40minText, styles.ml4]}>
                  01 hr 40min
                </Text>
              </View>
            </View>
            <Text style={[styles.showMoreDetails, styles.mt14]}>
              Show more details...
            </Text>
            <View style={[styles.frameView5, styles.mt14]} />
          </View>
          <View style={[styles.editButtonView, styles.mt17]}>
            <View style={styles.buttonPrimary}>
              <Text style={styles.viewDetailsText}>Edit Booking</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mt4: {
    marginTop: 4,
  },
  headerSafeAreaView: {
    backgroundColor: "#fff",
  },
  mt6: {
    marginTop: 6,
  },
  ml18: {
    marginLeft: 18,
  },
  ml8: {
    marginLeft: 8,
  },
  ml4: {
    marginLeft: 4,
  },
  mt14: {
    marginTop: 14,
  },
  mt17: {
    marginTop: 17,
  },
  bookingsBodyScrollViewContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 31,
  },
  ml10: {
    marginLeft: 10,
  },
  upcomingBookingsText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  bookingImageIcon: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 121.35,
    flexShrink: 0,
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
  terminal1Text: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#7e8b97",
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
  frameView: {
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
  terminal4Text: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  group13View1: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frameView1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
  frameView2: {
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
  frameView3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameView4: {
    alignSelf: "stretch",
    borderRadius: 3,
    backgroundColor: "#f8f9fb",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  showMoreDetails: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  frameView5: {
    borderRadius: 3,
    backgroundColor: "#f8f9fb",
    width: 323,
    height: 1,
    flexShrink: 0,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bookingDetailsView: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
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
  editButtonView: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 12,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bookingCardView: {
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
  bookingsBodyScrollView: {
    alignSelf: "stretch",
    boxSizing: "border-box",
    flex: 1,
  },
  bookingsView: {
    position: "relative",
    backgroundColor: "#f8f9fb",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Bookings;
