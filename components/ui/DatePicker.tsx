import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Colors, FontSize, Radius, Spacing } from '@/constants/theme';

type DatePickerProps = {
  label: string;
  onChange: (date: Date) => void;
  optional?: boolean;
};

export default function DatePicker({ label, onChange, optional = false }: DatePickerProps) {
  const [date, setDate] = useState<Date | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const formatDate = (d: Date) => {
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleConfirm = (selectedDate: Date) => {
    setDate(selectedDate);
    onChange(selectedDate);
    setIsVisible(false);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>
        {label}
        {optional && <Text style={styles.optional}> (optional)</Text>}
      </Text>
      <TouchableOpacity style={styles.input} onPress={() => setIsVisible(true)}>
        <Text style={[styles.inputText, !date && styles.placeholder]}>
          {date ? formatDate(date) : 'dd/mm/yyyy'}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={() => setIsVisible(false)}
        date={date || new Date()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Spacing.md,
  },
  label: {
    color: Colors.textPrimary,
    fontSize: FontSize.sm,
    fontWeight: '600',
    marginBottom: Spacing.xs,
  },
  optional: {
    color: Colors.textSecondary,
    fontWeight: '400',
  },
  input: {
    backgroundColor: Colors.backgroundInput,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm + 2,
    justifyContent: 'center',
  },
  inputText: {
    color: Colors.textPrimary,
    fontSize: FontSize.md,
  },
  placeholder: {
    color: Colors.textSecondary,
  },
});
