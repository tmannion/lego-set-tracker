import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, FontSize, Spacing, Radius } from '@/constants/theme';

type Props = {
  label: string;
  onPress?: () => void;
};

export default function Button({ label, onPress }: Props) {
  return(
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.accent,
    borderRadius: Radius.md,
    paddingVertical: Spacing.md,
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  buttonText: {
    color: Colors.backgroundCard,
    fontSize: FontSize.md,
    fontWeight: 'bold',
  }
});