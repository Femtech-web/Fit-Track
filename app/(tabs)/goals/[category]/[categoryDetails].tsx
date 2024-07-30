import { useState, useEffect } from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient, useFont, vec } from "@shopify/react-native-skia";
import { Bar, CartesianChart } from "victory-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView, BackHeader, ThemedText } from "@/components/reusables";
import CategoryGoal from "@/components/goalsScreen/categoryGoal";
import { icons, SIZES, gStyles, COLORS, FONT } from "@/constants";
import { goals as goalsList, IGoal } from "../data";
import dmsans from "../../../../assets/fonts/DMSans-Regular.ttf";

const CategorySingleDetails = () => {
  const { category, categoryDetails } = useLocalSearchParams();
  const [categoryItem, setCategoryItem] = useState<IGoal | undefined>();

  // useEffect(() => {
  //   const result = goalsList.find((item) => item.category === category);

  //   setCategoryItem(result);
  // }, []);

  const BarExpenseChart = [
    { x: "12am", y: 80 },
    { x: "6am", y: 110 },
    { x: "12pm", y: 120 },
    { x: "4pm", y: 160 },
    { x: "6pm", y: 90 },
  ];

  const font = useFont(dmsans, 12);
  const [innerPadding, setInnerPadding] = useState(0.33);
  const [roundedCorner, setRoundedCorner] = useState(200);

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
      <ThemedView style={[gStyles.flex1, gStyles.mT8]}>
        <ThemedView
          style={[
            gStyles.wFull,
            gStyles.p24,
            gStyles.gap24,
            styles.displayBox,
            gStyles.mB40,
          ]}
        >
          <ThemedView style={[gStyles.flexRowCenterAlign, gStyles.gap6]}>
            <ThemedText type="title3" color={COLORS.black}>
              6,553
            </ThemedText>
            <ThemedText type="title" color={COLORS.black}>
              steps
            </ThemedText>
          </ThemedView>
          <ThemedView style={[gStyles.wFull, gStyles.gap10]}>
            <ThemedView style={styles.progressBar} />
            <ThemedView style={[gStyles.flexRowSpace]}>
              <ThemedText type="small">0</ThemedText>
              <ThemedText type="small">Target : 6,000</ThemedText>
            </ThemedView>
          </ThemedView>
          <ThemedView style={[gStyles.flexRowCenter, { gap: 60 }]}>
            <ThemedText type="defaultBig" color={COLORS.grey600}>
              1.9 km
            </ThemedText>
            <ThemedText type="defaultBig" color={COLORS.grey600}>
              229 min
            </ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedView style={[gStyles.wFull, { height: 200 }]}>
          <ThemedText type="title" color={COLORS.black} style={gStyles.mB20}>
            Steps by time of day
          </ThemedText>
          <CartesianChart
            xKey="x"
            yKeys={["y"]}
            padding={5}
            domainPadding={{ left: 50, right: 50, top: 10, bottom: 10 }}
            domain={{ y: [0, 200] }}
            axisOptions={{
              font,
              tickCount: 5,
              lineColor: "#eee",
              labelColor: "#000",
            }}
            data={BarExpenseChart}
          >
            {({ points, chartBounds }) => (
              <Bar
                points={points.y}
                chartBounds={chartBounds}
                animate={{ type: "spring" }}
                color={COLORS.green500}
                barWidth={12}
                innerPadding={0}
                roundedCorners={{
                  topLeft: 30,
                  topRight: 30,
                }}
              />
            )}
          </CartesianChart>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    width: "100%",
    backgroundColor: COLORS.green500,
    height: 8,
    borderRadius: 10,
  },
  displayBox: {
    height: 180,
    backgroundColor: COLORS.green200,
    borderRadius: 12,
    alignItems: "center",
  },
});

export default CategorySingleDetails;
