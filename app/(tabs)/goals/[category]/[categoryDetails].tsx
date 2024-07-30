import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, ActivityIndicator, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { ThemedView, BackHeader } from "@/components/reusables";
import { icons, SIZES, gStyles, COLORS, FONT } from "@/constants";
import { singleCategoryDetails, ICategoryDetails } from "../data";
import { MetricBox, BarChart, BottomBar } from "@/components/goalsScreen";

const CategorySingleDetails = () => {
  const { category, categoryDetails } = useLocalSearchParams();
  const [categoryItem, setCategoryItem] = useState<
    ICategoryDetails | undefined
  >(undefined);

  useEffect(() => {
    const item = categoryDetails?.toString();
    if (item) {
      const result = singleCategoryDetails.get(item);
      setCategoryItem(result);
    }
  }, []);

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
        {categoryItem === undefined ? (
          <ActivityIndicator size="large" color={COLORS.green800} />
        ) : (
          <>
            <MetricBox categoryItem={categoryItem} category={category} />
            <BarChart categoryItem={categoryItem} category={category} />
            <BottomBar categoryItem={categoryItem} />
          </>
        )}
      </ThemedView>
    </SafeAreaView>
  );
};

export default CategorySingleDetails;
