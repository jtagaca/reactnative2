import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Offers = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.offersView}>
      <StatusBar barStyle="default" />
      <View style={styles.offersBodyView}>
        <View style={styles.offersListView}>
          <View style={styles.offerCardView}>
            <View style={styles.frameView1}>
              <View style={styles.frameView}>
                <Text style={styles.limitedOfferText}>Limited offer!</Text>
              </View>
              <Image
                style={styles.iconHeart}
                resizeMode="cover"
                source={require("../assets/icon--heart1.png")}
              />
            </View>
            <Text style={[styles.get20DiscountWithYourMas, styles.mt7]}>
              <Text style={styles.get20Discount}>Get 20% discount</Text>
              <Text style={styles.text}>{` `}</Text>
              <Text style={styles.withYourMaster}>
                with your Master credit cards
              </Text>
            </Text>
            <View style={[styles.frameView4, styles.mt7]}>
              <View style={styles.frameView2}>
                <Image
                  style={styles.image7Icon}
                  resizeMode="cover"
                  source={require("../assets/image-7.png")}
                />
              </View>
              <View style={[styles.frameView3, styles.ml16]}>
                <Text
                  style={styles.useYourMastercardWithAnyT}
                >{`Use your mastercard with any transaction and get 20% discount instantly! `}</Text>
              </View>
              <Image
                style={[styles.vectorIcon, styles.ml16]}
                resizeMode="cover"
                source={require("../assets/vector-1.png")}
              />
            </View>
          </View>
          <View style={[styles.offerCardView1, styles.mt14]}>
            <View style={styles.frameView6}>
              <View style={styles.frameView5}>
                <Text style={styles.limitedOfferText1}>Limited offer!</Text>
              </View>
              <Image
                style={styles.iconHeart1}
                resizeMode="cover"
                source={require("../assets/icon--heart2.png")}
              />
            </View>
            <Text style={[styles.discountWithYourVISACredit, styles.mt7]}>
              <Text style={styles.discountText}>25% discount</Text>
              <Text style={styles.text1}>{` `}</Text>
              <Text style={styles.withYourVISA}>
                with your VISA credit or debit cards
              </Text>
            </Text>
            <View style={[styles.frameView9, styles.mt7]}>
              <View style={styles.frameView7}>
                <Image
                  style={styles.image8Icon}
                  resizeMode="cover"
                  source={require("../assets/image-8.png")}
                />
              </View>
              <View style={[styles.frameView8, styles.ml16]}>
                <Text
                  style={styles.useYourVISACreditOrDebit}
                >{`Use your VISA credit or debit card with any transaction and get 25% discount instantly! `}</Text>
              </View>
              <Image
                style={[styles.vectorIcon1, styles.ml16]}
                resizeMode="cover"
                source={require("../assets/vector-11.png")}
              />
            </View>
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
  headerSafeAreaView: {
    backgroundColor: "#fff",
  },
  ml16: {
    marginLeft: 16,
  },
  mt7: {
    marginTop: 7,
  },
  mt14: {
    marginTop: 14,
  },
  ml10: {
    marginLeft: 10,
  },
  limitedOfferText: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  frameView: {
    borderRadius: 5,
    backgroundColor: "#32d4ad",
    flexDirection: "row",
    paddingHorizontal: 7,
    paddingVertical: 2,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  iconHeart: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  get20Discount: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  text: {
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  withYourMaster: {
    fontFamily: "Roboto",
  },
  get20DiscountWithYourMas: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    lineHeight: 24,
    color: "#191919",
    textAlign: "left",
  },
  image7Icon: {
    position: "absolute",
    top: 1,
    left: 0,
    width: 104,
    height: 71,
  },
  frameView2: {
    position: "relative",
    width: 104.44,
    height: 71.89,
    flexShrink: 0,
  },
  useYourMastercardWithAnyT: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView3: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon: {
    position: "relative",
    width: 6.71,
    height: 11.3,
    flexShrink: 0,
  },
  frameView4: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  offerCardView: {
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
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 13,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  limitedOfferText1: {
    position: "relative",
    fontSize: 13,
    lineHeight: 18,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  frameView5: {
    borderRadius: 5,
    backgroundColor: "#32d4ad",
    flexDirection: "row",
    paddingHorizontal: 7,
    paddingVertical: 2,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  iconHeart1: {
    position: "relative",
    width: 16,
    height: 16,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView6: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  discountText: {
    fontWeight: "700",
    fontFamily: "Roboto",
  },
  text1: {
    fontWeight: "500",
    fontFamily: "Roboto",
  },
  withYourVISA: {
    fontFamily: "Roboto",
  },
  discountWithYourVISACredit: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    lineHeight: 24,
    color: "#191919",
    textAlign: "left",
  },
  image8Icon: {
    position: "absolute",
    top: 0.11,
    left: 0,
    width: 104,
    height: 72,
  },
  frameView7: {
    position: "relative",
    width: 104.44,
    height: 71.89,
    flexShrink: 0,
  },
  useYourVISACreditOrDebit: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: "Roboto",
    color: "#7e8b97",
    textAlign: "left",
  },
  frameView8: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  vectorIcon1: {
    position: "relative",
    width: 6.71,
    height: 11.3,
    flexShrink: 0,
  },
  frameView9: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  offerCardView1: {
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
    flexDirection: "column",
    paddingHorizontal: 15,
    paddingVertical: 13,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  offersListView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  offersBodyView: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 19,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  offersView: {
    position: "relative",
    backgroundColor: "#f8f9fb",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Offers;
