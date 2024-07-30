import { useFont } from "@shopify/react-native-skia";
import { Bar, CartesianChart } from "victory-native";

import { ThemedView, ThemedText } from "@/components/reusables";
import { gStyles, COLORS } from "@/constants";
import { ICategoryDetails } from "@/app/(tabs)/goals/data";
import dmSansRegular from "../../../assets/fonts/DMSans-Regular.ttf";

const BarChart = ({
  categoryItem,
  category,
}: {
  categoryItem: ICategoryDetails | undefined;
  category: string | undefined | string[];
}) => {
  const font = useFont(dmSansRegular, 12);

  return (
    <ThemedView style={[gStyles.wFull, gStyles.mB20, { height: 200 }]}>
      <ThemedText
        type="defaultSemiBold"
        color={COLORS.black}
        style={gStyles.mB10}
      >
        {`${category} by time of day`}
      </ThemedText>
      <CartesianChart
        xKey="x"
        yKeys={["y"]}
        padding={5}
        domainPadding={{ left: 15, right: 50, top: 10, bottom: 10 }}
        domain={{ y: [0, 180] }}
        axisOptions={{
          font,
          tickCount: 4,
          lineColor: COLORS.green50,
          labelColor: COLORS.black,
          formatYLabel(value) {
            return "";
          },
        }}
        data={categoryItem?.chart ?? []}
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
  );
};

export default BarChart;
