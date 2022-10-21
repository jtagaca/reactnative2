import * as React from "react";
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileIcon = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.profileIcon}
      resizeMode="cover"
      source={require("../assets/profile.png")}
    >
      <ScrollView
        style={styles.profileSectionScrollView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.profileSectionScrollViewContent}
      >
        <View style={styles.headerView}>
          <Pressable
            style={styles.framePressable}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconBack}
              resizeMode="cover"
              source={require("../assets/icon--back7.png")}
            />
          </Pressable>
          <View style={styles.frameView}>
            <Image
              style={styles.fluentedit48RegularIcon}
              resizeMode="cover"
              source={require("../assets/fluentedit48regular.png")}
            />
          </View>
        </View>
        <View style={[styles.profileBodyView, styles.mt50]}>
          <View style={styles.profileDrawerView}>
            <View style={styles.profileDetailsView}>
              <View style={styles.nameParticularsView}>
                <View style={styles.frameView1}>
                  <Text style={styles.macyJohnsonText}>Macy Johnson</Text>
                  <Text style={[styles.baguioPhilippinesText, styles.mt2]}>
                    Baguio, Philippines
                  </Text>
                </View>
              </View>
              <Text style={[styles.iLikeTheBeachMountainsF, styles.mt16]}>
                I like the beach, mountains, forest and everything about nature!
                :)
              </Text>
              <View style={[styles.lineView, styles.mt16]} />
              <View style={[styles.profileOptionsView, styles.mt16]}>
                <View style={styles.profileOptionView}>
                  <View style={styles.rateView}>
                    <Image
                      style={styles.bicreditCard2BackIcon}
                      resizeMode="cover"
                      source={require("../assets/bicreditcard2back.png")}
                    />
                  </View>
                  <Text style={[styles.paymentDetailsText, styles.ml16]}>
                    Payment Details
                  </Text>
                </View>
                <View style={[styles.profileOptionView1, styles.mt20]}>
                  <View style={styles.rateView1}>
                    <Image
                      style={styles.healthiconsvirusShieldOutli}
                      resizeMode="cover"
                      source={require("../assets/healthiconsvirusshieldoutline.png")}
                    />
                  </View>
                  <Text style={[styles.covidAdvisoryText, styles.ml16]}>
                    Covid Advisory
                  </Text>
                </View>
                <View style={[styles.profileOptionView2, styles.mt20]}>
                  <View style={styles.rateView2}>
                    <Image
                      style={styles.humbleiconsuserAsking}
                      resizeMode="cover"
                      source={require("../assets/humbleiconsuserasking.png")}
                    />
                  </View>
                  <View style={[styles.frameView3, styles.ml16]}>
                    <Text style={styles.referralCodeText}>Referral Code</Text>
                    <View style={[styles.frameView2, styles.ml10]}>
                      <Text style={styles.newText}>new</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.profileOptionView3, styles.mt20]}>
                  <View style={styles.rateView3}>
                    <Image
                      style={styles.claritysettingsLineIcon}
                      resizeMode="cover"
                      source={require("../assets/claritysettingsline.png")}
                    />
                  </View>
                  <Text style={[styles.settingsText, styles.ml16]}>
                    Settings
                  </Text>
                </View>
                <View style={[styles.profileOptionView4, styles.mt20]}>
                  <View style={styles.rateView4}>
                    <Image
                      style={styles.majesticonslogoutHalfCircle}
                      resizeMode="cover"
                      source={require("../assets/majesticonslogouthalfcircleline.png")}
                    />
                  </View>
                  <Text style={[styles.logoutText, styles.ml16]}>Logout</Text>
                </View>
                <View style={[styles.questionsView, styles.mt20]}>
                  <Image
                    style={styles.ionhelpCircleOutlineIcon}
                    resizeMode="cover"
                    source={require("../assets/ionhelpcircleoutline.png")}
                  />
                  <Text style={[styles.haveQuestionsWeAreHereTo, styles.ml8]}>
                    Have questions? We are here to help
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.profileImageView}>
            <Image
              style={styles.group3Icon}
              resizeMode="cover"
              source={require("../assets/group31.png")}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: 2,
  },
  ml16: {
    marginLeft: 16,
  },
  ml10: {
    marginLeft: 10,
  },
  ml8: {
    marginLeft: 8,
  },
  mt20: {
    marginTop: 20,
  },
  mt16: {
    marginTop: 16,
  },
  mt50: {
    marginTop: 50,
  },
  profileSectionScrollViewContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 30,
  },
  mt14: {
    marginTop: 14,
  },
  iconBack: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  framePressable: {
    borderRadius: 24,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    flexDirection: "row",
    padding: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  fluentedit48RegularIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView: {
    borderRadius: 24,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.12)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 1,
    flexDirection: "row",
    padding: 6,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  headerView: {
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  macyJohnsonText: {
    position: "relative",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  baguioPhilippinesText: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  nameParticularsView: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iLikeTheBeachMountainsF: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
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
  bicreditCard2BackIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  rateView: {
    borderRadius: 4,
    backgroundColor: "#f1f7fd",
    flexDirection: "column",
    padding: 6,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  paymentDetailsText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  profileOptionView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  healthiconsvirusShieldOutli: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  rateView1: {
    borderRadius: 4,
    backgroundColor: "#f1f7fd",
    flexDirection: "column",
    padding: 6,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
  profileOptionView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  humbleiconsuserAsking: {
    position: "relative",
    width: 22,
    height: 22,
    flexShrink: 0,
    overflow: "hidden",
  },
  rateView2: {
    borderRadius: 4,
    backgroundColor: "#f1f7fd",
    flexDirection: "column",
    padding: 6,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  referralCodeText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  newText: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  frameView2: {
    borderRadius: 5,
    backgroundColor: "#32d4ad",
    flexDirection: "row",
    paddingHorizontal: 7,
    paddingVertical: 2,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileOptionView2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  claritysettingsLineIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  rateView3: {
    borderRadius: 4,
    backgroundColor: "#f1f7fd",
    flexDirection: "column",
    padding: 6,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  settingsText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  profileOptionView3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  majesticonslogoutHalfCircle: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  rateView4: {
    borderRadius: 4,
    backgroundColor: "#f1f7fd",
    flexDirection: "column",
    padding: 6,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  logoutText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#191919",
    textAlign: "left",
  },
  profileOptionView4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ionhelpCircleOutlineIcon: {
    position: "relative",
    width: 22,
    height: 22,
    flexShrink: 0,
    overflow: "hidden",
  },
  haveQuestionsWeAreHereTo: {
    position: "relative",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Inter",
    color: "#1262ae",
    textAlign: "left",
  },
  questionsView: {
    alignSelf: "stretch",
    borderRadius: 7,
    backgroundColor: "#eaf5ff",
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  profileOptionsView: {
    alignSelf: "stretch",
    height: 322,
    flexShrink: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  profileDetailsView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  profileDrawerView: {
    alignSelf: "stretch",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 43,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: 0,
  },
  group3Icon: {
    position: "relative",
    width: 90.12,
    height: 90.12,
    flexShrink: 0,
  },
  profileImageView: {
    position: "absolute",
    top: 0,
    left: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    zIndex: 1,
  },
  profileBodyView: {
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 42,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "relative",
  },
  profileSectionScrollView: {
    alignSelf: "stretch",
    boxSizing: "border-box",
    flex: 1,
  },
  profileIcon: {
    position: "relative",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default ProfileIcon;
