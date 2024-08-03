import React, { useState } from "react";
import { TouchableOpacity, FlatList } from "react-native";
import { ThemedText, ThemedView } from "@/components/reusables";
import { COLORS, FONT, SIZES, icons } from "@/constants";
import { styles } from "./styles";

interface ISelectField {
  label: string;
  options: string[];
  name: string;
  onSelect: (option: string, name: string) => void;
  placeholder?: string;
  selectedValue?: string;
}

const CustomSelectField: React.FC<ISelectField> = ({
  label,
  name,
  placeholder,
  selectedValue,
  options,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectedValue);
  const [searchText, setSearchText] = useState("");

  const handleSelectField = () => {
    setIsFocus(true);
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setIsOpen(false);
    setSelectedOption(option);
    onSelect(option, name);
  };

  return (
    <ThemedView>
      <ThemedView style={[styles.customInputContainer]}>
        <ThemedText type="small">{label}</ThemedText>
        <TouchableOpacity
          style={[styles.dropdownBtn]}
          onPress={handleSelectField}
        >
          {selectedOption ? (
            <ThemedText
              style={{ fontFamily: FONT.medium }}
              color={COLORS.black}
            >
              {selectedOption}
            </ThemedText>
          ) : (
            <ThemedText type="small">{placeholder}</ThemedText>
          )}
          <icons.dropdownIcon size={10} style={{ marginTop: -8 }} />
        </TouchableOpacity>
      </ThemedView>
      {isOpen && (
        <ThemedView style={styles.dropdownListContainer}>
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{ rowGap: SIZES.xSmall }}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleOptionClick(item)}>
                <ThemedText color={COLORS.black}>{item}</ThemedText>
              </TouchableOpacity>
            )}
          />
        </ThemedView>
      )}
    </ThemedView>
  );
};

export default CustomSelectField;
