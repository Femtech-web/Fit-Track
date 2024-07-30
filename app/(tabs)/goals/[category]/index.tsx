import { useState, useEffect } from "react";
import { FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView, BackHeader } from "@/components/reusables";
import { CategoryGoal } from "@/components/goalsScreen";
import { SIZES, gStyles } from "@/constants";
import { goals as goalsList, IGoal } from "../data";

const Category = () => {
  const { category } = useLocalSearchParams();
  const [categoryItem, setCategoryItem] = useState<IGoal | undefined>();

  useEffect(() => {
    const result = goalsList.find((item) => item.category === category);

    setCategoryItem(result);
  }, []);

  return (
    <SafeAreaView style={[gStyles.container, gStyles.p24, gStyles.pT32]}>
      <BackHeader pageName={category} />
      <ThemedView style={[gStyles.flex1]}>
        <ThemedView style={[gStyles.wFull, gStyles.mB70, gStyles.mT8]}>
          <FlatList
            data={categoryItem?.goals}
            renderItem={({ item }) => (
              <CategoryGoal
                goal={item}
                icon={categoryItem?.icon}
                category={category && category}
              />
            )}
            keyExtractor={(item, index) => `${item} ${index}`}
            contentContainerStyle={{ rowGap: SIZES.xSmall }}
          />
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default Category;
