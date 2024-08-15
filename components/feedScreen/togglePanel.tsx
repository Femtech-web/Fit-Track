import { Dispatch, SetStateAction } from "react";
import { COLORS, gStyles } from "@/constants";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText, ThemedView } from "@/components/reusables";

interface ITogglePanel {
  panelList: string[];
  activePanel: string;
  setActivePanel: Dispatch<SetStateAction<string>>;
}

const TogglePanel = ({
  panelList,
  activePanel,
  setActivePanel,
}: ITogglePanel) => {
  const isActivePanel = (panel: string) => activePanel === panel;

  return (
    <ThemedView
      style={[gStyles.wFull, gStyles.flexRowCenterAlign, styles.panelContainer]}
    >
      {panelList.map((panel, index) => (
        <TouchableOpacity
          key={index}
          style={[gStyles.flexRowCenterJustify, styles.panelItem]}
          onPress={() => setActivePanel(panel)}
        >
          <ThemedView style={gStyles.flexCenter}>
            <ThemedText
              type="title"
              color={isActivePanel(panel) ? COLORS.green800 : COLORS.grey600}
              style={styles.panelText}
            >
              {panel}
            </ThemedText>
            <ThemedView style={isActivePanel(panel) && styles.line} />
          </ThemedView>
        </TouchableOpacity>
      ))}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  panelContainer: {
    borderBottomColor: COLORS.grey400,
    borderBottomWidth: 0.5,
  },
  panelItem: { flex: 1 },
  panelText: { paddingBottom: 20 },
  line: {
    backgroundColor: COLORS.green800,
    width: 120,
    height: 2,
  },
});

export default TogglePanel;
