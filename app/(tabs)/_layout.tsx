import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { COLORS, FONT, SIZES } from "@/constants";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.green800,
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: FONT.medium,
          fontSize: SIZES.medium,
        },
        tabBarItemStyle: {
          gap: 1,
        },
        tabBarStyle: {
          paddingBottom: 10,
          height: 80,
        },
        tabBarIconStyle: {
          marginBottom: -10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="home"
              stroke={focused ? COLORS.green800 : COLORS.grey300}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="goals"
        options={{
          title: "Goals",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="goals"
              stroke={focused ? COLORS.green800 : COLORS.grey300}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="feeds"
              stroke={focused ? COLORS.green800 : COLORS.grey300}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="settings"
              stroke={focused ? COLORS.green800 : COLORS.grey300}
            />
          ),
        }}
      />
    </Tabs>
  );
}
