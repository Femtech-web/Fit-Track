import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";
import { icons } from "@/constants";

interface ISelectField {
  label: string;
  options: string[];
  name: string;
  onSelect: (option: string, name: string) => void;
  placeholder?: string;
  selectedValue?: string;
  boldLabel?: boolean;
  searchBar?: boolean;
  slim?: boolean;
  isIcon?: boolean;
  lightBorder?: boolean;
}

const ThemedSelectField: React.FC<ISelectField> = ({
  label,
  name,
  placeholder,
  selectedValue,
  boldLabel,
  options,
  onSelect,
  searchBar,
  slim,
  isIcon,
  lightBorder,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectedValue);
  const [searchText, setSearchText] = useState("");

  const containerRef = useRef(null);

  const handleOptionClick = (option: string) => {
    setIsOpen(false);
    setSelectedOption(option);
    onSelect(option, name);
  };

  const handleSelectField = () => {
    setIsFocus(true);
    setIsOpen(!isOpen);
  };

  const filteredOptions = searchBar
    ? options.filter((option) =>
        option.toLowerCase().includes(searchText.toLowerCase())
      )
    : options;

  return (
    <View style={styles.container} ref={containerRef}>
      {label && (
        <Text style={[styles.label, boldLabel && styles.bold]}>{label}</Text>
      )}
      <TouchableOpacity
        style={[
          styles.dropdownBtn,
          isFocus && styles.focusSelectField,
          slim && styles.slim,
          lightBorder && !isFocus && styles.lightBorder,
          lightBorder && isFocus && styles.focusLight,
        ]}
        onPress={handleSelectField}
      >
        {selectedOption ? (
          <Text style={styles.selectedOption}>{selectedOption}</Text>
        ) : (
          <Text style={styles.placeholder}>{placeholder}</Text>
        )}
        <icons.dropdownIcon />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownListContainer}>
          {searchBar && (
            <TextInput
              style={styles.searchBar}
              placeholder="Search..."
              value={searchText}
              onChangeText={setSearchText}
            />
          )}
          <FlatList
            data={filteredOptions}
            keyExtractor={(item, index) => index.toString()}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleOptionClick(item)}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  label: {
    marginBottom: 5,
  },
  bold: {
    fontWeight: "bold",
  },
  dropdownBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
  focusSelectField: {
    borderColor: "#000",
  },
  slim: {
    padding: 5,
  },
  lightBorder: {
    borderColor: "#ccc",
  },
  focusLight: {
    borderColor: "#aaa",
  },
  selectedOption: {
    fontSize: 16,
  },
  placeholder: {
    fontSize: 16,
    color: "#888",
  },
  dropdownIcon: {
    width: 20,
    height: 20,
  },
  rotateSvg: {
    transform: [{ rotate: "180deg" }],
  },
  dropdownListContainer: {
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 5,
    maxHeight: 200,
  },
  searchBar: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  dropdownItem: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  optionIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default ThemedSelectField;
