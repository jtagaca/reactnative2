import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Borocay = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.borocayView}>
      <ImageBackground
        style={styles.borocayScreenIcon}
        resizeMode="cover"
        source={require("../assets/borocayscreen.png")}
      >
        <View style={styles.headerView}>
          <Pressable
            style={styles.backArrowPressable}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.iconBack}
              resizeMode="cover"
              source={require("../assets/icon--back7.png")}
            />
          </Pressable>
          <View style={styles.heartView}>
            <Image
              style={styles.iconHeart}
              resizeMode="cover"
              source={require("../assets/icon--heart.png")}
            />
          </View>
        </View>
        <View style={styles.bottomDrawerView}>
          <View style={styles.bottomDrawerContent}>
            <View style={styles.titleView}>
              <View style={styles.frameView2}>
                <View style={styles.frameView}>
                  <Text style={styles.boracayText}>Boracay</Text>
                  <Text style={[styles.philippinesText, styles.mt2]}>
                    Philippines
                  </Text>
                </View>
                <View style={[styles.frameView1, styles.ml3]}>
                  <Text style={styles.d4NText}>5D4N</Text>
                </View>
              </View>
              <Text style={styles.text}>$349</Text>
            </View>
            <View style={[styles.overviewText1, styles.mt24]}>
              <Text style={styles.overviewText}>Overview</Text>
              <Text style={styles.spend5DaysAnd4NightsInO}>
                Spend 5 days and 4 nights in one of the best islands in the
                world! Bask in the sun while walking in the white sand beach and
                enjoy the night partying at the popular seaside bars.
              </Text>
            </View>
            <View style={[styles.imagesView, styles.mt24]}>
              <Text style={styles.photosText}>Photos</Text>
              <ScrollView
                style={[styles.photosRowScrollView, styles.mt8]}
                horizontal
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.photosRowScrollViewContent}
              >
                <Image
                  style={styles.photoIcon}
                  resizeMode="cover"
                  source={require("../assets/photo.png")}
                />
                <Image
                  style={[styles.photoIcon1, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo1.png")}
                />
                <Image
                  style={[styles.photoIcon2, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo2.png")}
                />
                <Image
                  style={[styles.photoIcon3, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo3.png")}
                />
                <Image
                  style={[styles.photoIcon4, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo4.png")}
                />
                <Image
                  style={[styles.photoIcon5, styles.ml10]}
                  resizeMode="cover"
                  source={require("../assets/photo5.png")}
                />
              </ScrollView>
            </View>
            <View style={[styles.buttonPrimary, styles.mt24]}>
              <Text style={styles.viewDetailsText}>Book Now</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mt2: {
    marginTop: 2,
  },
  ml3: {
    marginLeft: 3,
  },
  ml10: {
    marginLeft: 10,
  },
  photosRowScrollViewContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  mt8: {
    marginTop: 8,
  },
  mt24: {
    marginTop: 24,
  },
  iconBack: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
    overflow: "hidden",
  },
  backArrowPressable: {
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
  iconHeart: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    overflow: "hidden",
  },
  heartView: {
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
    padding: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  headerView: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 30,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  boracayText: {
    position: "relative",
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  philippinesText: {
    position: "relative",
    fontSize: 16,
    fontFamily: "Inter",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  d4NText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#4d5760",
    textAlign: "left",
  },
  frameView1: {
    borderRadius: 6,
    backgroundColor: "#f4f5f6",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 4,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    position: "relative",
    fontSize: 28,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  titleView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  overviewText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  spend5DaysAnd4NightsInO: {
    position: "absolute",
    height: "75%",
    width: "100%",
    top: "25%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  overviewText1: {
    alignSelf: "stretch",
    position: "relative",
    height: 128,
    flexShrink: 0,
  },
  photosText: {
    position: "relative",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: "Inter",
    color: "#191919",
    textAlign: "left",
  },
  photoIcon: {
    position: "relative",
    borderRadius: 4,
    width: 120,
    height: 90,
    flexShrink: 0,
  },
  photoIcon1: {
    position: "relative",
    borderRadius: 4,
    width: 120,
    height: 90,
    flexShrink: 0,
  },
  photoIcon2: {
    position: "relative",
    borderRadius: 4,
    width: 120,
    height: 90,
    flexShrink: 0,
  },
  photoIcon3: {
    position: "relative",
    borderRadius: 4,
    width: 120,
    height: 90,
    flexShrink: 0,
  },
  photoIcon4: {
    position: "relative",
    borderRadius: 4,
    width: 120,
    height: 90,
    flexShrink: 0,
  },
  photoIcon5: {
    position: "relative",
    borderRadius: 4,
    width: 120,
    height: 90,
    flexShrink: 0,
  },
  photosRowScrollView: {
    alignSelf: "stretch",
    width: "100%",
  },
  imagesView: {
    alignSelf: "stretch",
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
  bottomDrawerContent: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bottomDrawerView: {
    alignSelf: "stretch",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    paddingVertical: 24,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  borocayScreenIcon: {
    flex: 1,
    alignSelf: "stretch",
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingTop: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  borocayView: {
    position: "relative",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Borocay;
