import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  View,
  ScrollView,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Explore = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.exploreView}>
      <StatusBar barStyle="default" />
      <ScrollView
        style={styles.exploreMainView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.exploreMainViewContent}
      >
        <ImageBackground
          style={styles.parisCardIcon}
          resizeMode="cover"
          source={require("../assets/frame14.png")}
        >
          <View style={styles.descriptionView}>
            <Text style={styles.parisText}>Paris</Text>
            <View style={styles.frameView}>
              <Text style={styles.fROMText}>FROM</Text>
              <Text style={styles.text}>$1299</Text>
            </View>
          </View>
          <Image
            style={[styles.heartIcon, styles.mt82]}
            resizeMode="cover"
            source={require("../assets/heart.png")}
          />
        </ImageBackground>
        <View style={[styles.exploreContentView, styles.mt20]}>
          <View style={styles.upcomingFlightsSection}>
            <Text style={styles.upcomingFlightText}>Upcoming Flight</Text>
            <View style={[styles.frameView4, styles.mt14]}>
              <View style={styles.frameView2}>
                <View style={styles.group13View}>
                  <Text style={styles.sINText}>SIN</Text>
                  <Text style={[styles.singaporeText, styles.mt4]}>
                    Singapore
                  </Text>
                </View>
                <View style={[styles.frameView1, styles.ml18]}>
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
                    source={require("../assets/icon--flight6.png")}
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
                style={[styles.line3Icon, styles.mt16]}
                resizeMode="cover"
                source={require("../assets/line3.png")}
              />
              <View style={[styles.frameView3, styles.mt16]}>
                <Text style={styles.departsOn1May0800AM}>
                  Departs on: 1 May, 08:00 AM
                </Text>
                <Text style={styles.daysToGo}>
                  <Text style={styles.daysText}>4 days</Text>
                  <Text style={styles.toGoText}> to go</Text>
                </Text>
              </View>
            </View>
          </View>
          <ScrollView
            style={[styles.categoriesScrollView, styles.mt30]}
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.categoriesScrollViewContent}
          >
            <View style={styles.categoryBlockView}>
              <Image
                style={styles.tagFlight}
                resizeMode="cover"
                source={require("../assets/tag--flight.png")}
              />
              <Text style={[styles.flightText, styles.mt22]}>Flight</Text>
            </View>
            <View style={[styles.categoryBlockView1, styles.ml6]}>
              <Image
                style={styles.tagHotel}
                resizeMode="cover"
                source={require("../assets/tag--hotel.png")}
              />
              <Text style={[styles.flightText1, styles.mt22]}>Hotels</Text>
            </View>
            <View style={[styles.categoryBlockView2, styles.ml6]}>
              <Image
                style={styles.tagAtractions}
                resizeMode="cover"
                source={require("../assets/tag--atractions.png")}
              />
              <Text style={[styles.flightText2, styles.mt22]}>Attractions</Text>
            </View>
            <View style={[styles.categoryBlockView3, styles.ml6]}>
              <Image
                style={styles.tagEats}
                resizeMode="cover"
                source={require("../assets/tag--eats.png")}
              />
              <Text style={[styles.flightText3, styles.mt22]}>Eats</Text>
            </View>
            <View style={[styles.categoryBlockView4, styles.ml6]}>
              <Image
                style={styles.tagTrain}
                resizeMode="cover"
                source={require("../assets/tag--train.png")}
              />
              <Text style={[styles.flightText4, styles.mt22]}>Commute</Text>
            </View>
          </ScrollView>
          <View style={[styles.trendingDestinationsView, styles.mt30]}>
            <View style={styles.trendingHeaderView}>
              <Text style={styles.trendingDestinationsText}>
                Trending Destinations
              </Text>
              <Text style={styles.seeAllText}>See all</Text>
            </View>
            <ScrollView
              style={[styles.trendingCardsView, styles.mt14]}
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.trendingCardsViewContent}
            >
              <View style={styles.trandingCardsRow}>
                <Pressable
                  style={styles.destinationCardPressable}
                  onPress={() =>
                    navigation.navigate("DrawerRoot", { screen: "Borocay" })
                  }
                >
                  <Image
                    style={styles.destinationImageIcon}
                    resizeMode="cover"
                    source={require("../assets/destination-image.png")}
                  />
                  <View style={[styles.detailsView, styles.mt10]}>
                    <View style={styles.locationView}>
                      <Text style={styles.boracayText}>Boracay</Text>
                      <Text style={[styles.philippinesText, styles.mt1]}>
                        Philippines
                      </Text>
                    </View>
                    <View style={styles.durationView}>
                      <Text style={styles.d4NText}>5D4N</Text>
                    </View>
                  </View>
                </Pressable>
                <View style={[styles.destinationCardView, styles.ml10]}>
                  <Image
                    style={styles.destinationImageIcon1}
                    resizeMode="cover"
                    source={require("../assets/destination-image1.png")}
                  />
                  <View style={[styles.detailsView1, styles.mt10]}>
                    <View style={styles.locationView1}>
                      <Text style={styles.barosText}>Baros</Text>
                      <Text style={[styles.maldivesText, styles.mt1]}>
                        Maldives
                      </Text>
                    </View>
                    <View style={styles.durationView1}>
                      <Text style={styles.d6NText}>7D6N</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.destinationCardView1, styles.ml10]}>
                  <Image
                    style={styles.destinationImageIcon2}
                    resizeMode="cover"
                    source={require("../assets/destination-image2.png")}
                  />
                  <View style={[styles.detailsView2, styles.mt10]}>
                    <View style={styles.locationView2}>
                      <Text style={styles.baliText}>Bali</Text>
                      <Text style={[styles.indonesiaText, styles.mt1]}>
                        Indonesia
                      </Text>
                    </View>
                    <View style={styles.durationView2}>
                      <Text style={styles.d2NText}>3D2N</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.destinationCardView2, styles.ml10]}>
                  <Image
                    style={styles.destinationImageIcon3}
                    resizeMode="cover"
                    source={require("../assets/destination-image3.png")}
                  />
                  <View style={[styles.detailsView3, styles.mt10]}>
                    <View style={styles.locationView3}>
                      <Text style={styles.palawanText}>Palawan</Text>
                      <Text style={[styles.philippinesText1, styles.mt1]}>
                        Philippines
                      </Text>
                    </View>
                    <View style={styles.durationView3}>
                      <Text style={styles.d2NText1}>3D2N</Text>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
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
                    <Text style={styles.text1}>{` `}</Text>
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
                  source={require("../assets/offer-image4.png")}
                />
              </View>
              <View style={[styles.offerCardView1, styles.ml16]}>
                <View style={styles.offerDetailsView1}>
                  <Text style={styles.discountWithYourVisaCredit}>
                    <Text style={styles.discountText1}>25% discount</Text>
                    <Text style={styles.text2}>{` `}</Text>
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
                  source={require("../assets/offer-image5.png")}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSafeAreaView: {
    backgroundColor: "#fff",
  },
  mt82: {
    marginTop: 82,
  },
  mt4: {
    marginTop: 4,
  },
  ml18: {
    marginLeft: 18,
  },
  mt16: {
    marginTop: 16,
  },
  mt14: {
    marginTop: 14,
  },
  mt22: {
    marginTop: 22,
  },
  ml6: {
    marginLeft: 6,
  },
  categoriesScrollViewContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  mt1: {
    marginTop: 1,
  },
  mt10: {
    marginTop: 10,
  },
  ml10: {
    marginLeft: 10,
  },
  trendingCardsViewContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  ml16: {
    marginLeft: 16,
  },
  offersRowScrollViewContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  mt30: {
    marginTop: 30,
  },
  mt20: {
    marginTop: 20,
  },
  exploreMainViewContent: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  parisText: {
    position: "relative",
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "Baloo Bhai 2",
    color: "#fff",
    textAlign: "left",
  },
  fROMText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "left",
  },
  text: {
    position: "relative",
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Baloo Bhai 2",
    color: "#fff",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  descriptionView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    zIndex: 0,
  },
  heartIcon: {
    position: "absolute",
    top: 14,
    right: 20,
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
    zIndex: 1,
  },
  parisCardIcon: {
    alignSelf: "stretch",
    borderRadius: 8,
    height: 180,
    flexShrink: 0,
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingVertical: 14,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
  },
  upcomingFlightText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
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
  frameView1: {
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
  frameView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingTop: 12,
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
  departsOn1May0800AM: {
    position: "relative",
    fontSize: 15,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "left",
  },
  daysText: {
    fontWeight: "700",
    fontFamily: "Inter",
  },
  toGoText: {
    fontFamily: "Inter",
  },
  daysToGo: {
    position: "relative",
    fontSize: 15,
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView3: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingBottom: 12,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  frameView4: {
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
  upcomingFlightsSection: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  tagFlight: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  flightText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  categoryBlockView: {
    width: 77,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagHotel: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  flightText1: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  categoryBlockView1: {
    width: 77,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagAtractions: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  flightText2: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  categoryBlockView2: {
    width: 77,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagEats: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  flightText3: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  categoryBlockView3: {
    width: 77,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tagTrain: {
    position: "relative",
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  flightText4: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  categoryBlockView4: {
    width: 77,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  categoriesScrollView: {
    alignSelf: "flex-start",
    width: "100%",
  },
  trendingDestinationsText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  seeAllText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  trendingHeaderView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  destinationImageIcon: {
    position: "relative",
    width: 130.96,
    height: 89.69,
    flexShrink: 0,
  },
  boracayText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  philippinesText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  locationView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  d4NText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#4d5760",
    textAlign: "left",
  },
  durationView: {
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  detailsView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  destinationCardPressable: {
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
    width: 150.96,
    flexShrink: 0,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  destinationImageIcon1: {
    position: "relative",
    borderRadius: 2,
    width: 130.96,
    height: 89.69,
    flexShrink: 0,
  },
  barosText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  maldivesText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  locationView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  d6NText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#4d5760",
    textAlign: "left",
  },
  durationView1: {
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  detailsView1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  destinationCardView: {
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
    width: 150.96,
    flexShrink: 0,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  destinationImageIcon2: {
    position: "relative",
    borderRadius: 2,
    width: 130.96,
    height: 89.69,
    flexShrink: 0,
  },
  baliText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  indonesiaText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  locationView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  d2NText: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#4d5760",
    textAlign: "left",
  },
  durationView2: {
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  detailsView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  destinationCardView1: {
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
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  destinationImageIcon3: {
    position: "relative",
    borderRadius: 2,
    width: 130.96,
    height: 89.69,
    flexShrink: 0,
  },
  palawanText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  philippinesText1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  locationView3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  d2NText1: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Inter",
    color: "#4d5760",
    textAlign: "left",
  },
  durationView3: {
    borderRadius: 4,
    backgroundColor: "#f8f9fb",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 6,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  detailsView3: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  destinationCardView2: {
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
    width: 150.96,
    flexShrink: 0,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  trandingCardsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  trendingCardsView: {
    alignSelf: "stretch",
    width: "100%",
  },
  trendingDestinationsView: {
    alignSelf: "stretch",
    flexDirection: "column",
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
  text1: {
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
  text2: {
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
  exploreContentView: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  exploreMainView: {
    alignSelf: "stretch",
    boxSizing: "border-box",
    flex: 1,
  },
  exploreView: {
    position: "relative",
    backgroundColor: "#f8f9fb",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Explore;
