import { Dispatch, SetStateAction, useState } from "react";
import { TouchableOpacity } from "react-native";
import { ThemedText, ThemedView } from "@/components/reusables";
import { COLORS, FONT, gStyles, icons } from "@/constants";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { styles } from "./styles";

interface ICalenderInput {
  label: string;
  open?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const CustomCalendarInput = ({ label }: ICalenderInput) => {
  const [date, setDate] = useState<any>(new Date());
  const [value, setValue] = useState<string>("Today");

  const CALENDAR_MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate;
    if (currentDate) {
      const dateMonth = Math.max(0, Math.min(+currentDate.getMonth(), 11));
      const monthInitial = CALENDAR_MONTHS[dateMonth];
      const day = currentDate.getDate();
      setDate(currentDate);
      setValue([monthInitial, day].join(" "));
    }
  };

  const showMode = (currentMode: any) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <ThemedView
      style={[
        styles.customInputContainer,
        gStyles.flex1,
        { paddingBottom: 10 },
      ]}
    >
      <ThemedText type="small" style={{ marginBottom: 8 }}>
        {label}
      </ThemedText>
      <TouchableOpacity
        style={[gStyles.flexRowSpace, gStyles.gap10]}
        onPress={showDatepicker}
      >
        <ThemedView style={[gStyles.flexRowCenterAlign, gStyles.gap12]}>
          <icons.calendarIcon size={20} />
          <ThemedText
            style={{
              fontFamily: FONT.regular,
              fontSize: 15,
            }}
            color={COLORS.black}
          >
            {value}
          </ThemedText>
        </ThemedView>
        <icons.arrowDownIcon size={23} />
      </TouchableOpacity>
    </ThemedView>
  );
};

export default CustomCalendarInput;
