const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreenIcon from "./screens/SplashScreenIcon";
import Search from "./screens/Search";
import SearchTwoWay from "./screens/SearchTwoWay";
import ProfileIcon from "./screens/ProfileIcon";
import Borocay from "./screens/Borocay";
import Bookings from "./screens/Bookings";
import Offers from "./screens/Offers";
import DrawerMenu from "./screens/DrawerMenu";
import SearchResults from "./screens/SearchResults";
import Explore from "./screens/Explore";
import BottomTab9 from "./components/BottomTab9";
import BottomTab8 from "./components/BottomTab8";
import BottomTab7 from "./components/BottomTab7";
import BottomTab6 from "./components/BottomTab6";
import BottomTab5 from "./components/BottomTab5";
import BottomTab4 from "./components/BottomTab4";
import BottomTab3 from "./components/BottomTab3";
import BottomTab2 from "./components/BottomTab2";
import BottomTab1 from "./components/BottomTab1";
import BottomTab from "./components/BottomTab";
import Header2 from "./components/Header2";
import Header1 from "./components/Header1";
import Group4 from "./components/Group4";
import Header from "./components/Header";
import Group41 from "./components/Group41";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function DrawerRoot({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 320 } }}
      drawerContent={(props) => <DrawerMenu {...props} />}
    >
      <Drawer.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
      <Drawer.Screen
        name="Borocay"
        component={Borocay}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <BottomTab8 />,
    <BottomTab6 />,
    <BottomTab4 />,
    <BottomTab2 />,
    <BottomTab />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <BottomTab9 />,
    <BottomTab7 />,
    <BottomTab5 />,
    <BottomTab3 />,
    <BottomTab1 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              alignSelf: "stretch",
              backgroundColor: "#fff",
              shadowColor: "rgba(0, 0, 0, 0.03)",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowRadius: 15,
              elevation: 15,
              shadowOpacity: 1,
              flexDirection: "row",
              padding: 16,
              boxSizing: "border-box",
              alignItems: "center",
              justifyContent: "flex-start",
              height: 81,
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  style={{ flex: 1 }}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={(props) => ({
          headerShown: true,
          header: () => <Header2 />,
        })}
      />
      <Tab.Screen
        name="Bookings"
        component={Bookings}
        options={(props) => ({
          headerShown: true,
          header: () => <Header1 />,
        })}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={(props) => ({
          headerShown: true,
          header: () => <Group4 />,
        })}
      />
      <Tab.Screen
        name="Offers"
        component={Offers}
        options={(props) => ({
          headerShown: true,
          header: () => <Header />,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileIcon}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DrawerRoot" component={DrawerRoot} />

            <Stack.Screen
              name="SplashScreen"
              component={SplashScreenIcon}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchTwoWay"
              component={SearchTwoWay}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchResults"
              component={SearchResults}
              options={(props) => ({
                headerShown: true,
                header: () => <Group41 />,
              })}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
