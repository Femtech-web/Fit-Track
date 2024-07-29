import { useState, useEffect } from "react";
import { FlatList, TouchableOpacity, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView, BackHeader, ThemedText } from "@/components/reusables";
import CategoryGoal from "@/components/goalsScreen/categoryGoal";
import { icons, SIZES, gStyles, COLORS, FONT } from "@/constants";
import { goals as goalsList, IGoal } from "../data";

const CategorySingleDetails = () => {
  const { category, categoryDetails } = useLocalSearchParams();
  const [categoryItem, setCategoryItem] = useState<IGoal | undefined>();

  // useEffect(() => {
  //   const result = goalsList.find((item) => item.category === category);

  //   setCategoryItem(result);
  // }, []);

  return (
    <SafeAreaView style={[gStyles.container, gStyles.p24, gStyles.pT32]}>
      <BackHeader
        pageName={category}
        suffixElement={
          <TouchableOpacity style={[gStyles.flexRowCenterAlign, gStyles.gap10]}>
            <icons.calendarIcon />
            <ThemedView style={[gStyles.flexRowCenterAlign, gStyles.gap2]}>
              <Text
                style={{
                  fontFamily: FONT.regular,
                  fontSize: SIZES.large,
                  color: COLORS.grey500,
                }}
              >
                Today
              </Text>
              <icons.arrowDownIcon style={{ marginTop: 5 }} size={26} />
            </ThemedView>
          </TouchableOpacity>
        }
      />
      <ThemedView style={[gStyles.flex1]}>
        <ThemedView
          style={[gStyles.wFull, gStyles.mB70, gStyles.mT8]}
        ></ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default CategorySingleDetails;
