import { Colors, FontSize, Radius, Spacing } from '@/constants/theme';
import { StyleSheet, Text, View } from 'react-native';

type SetCardProps = {
  name: string;
  number: number;
  theme: string;
  price: number;
  pieceCount: number;
};

export default function SetCard({ name, number, theme, price, pieceCount }: SetCardProps) {
  return (
    <View style={styles.cardContainer}>
      {/* Top section — name + subtitle */}
      <View style={styles.topSection}>
        <Text style={styles.setName}>{name}</Text>
        <Text style={styles.numberAndTheme}>#{number} · {theme}</Text>
      </View>

      {/* Bottom section — price + piece count */}
      <View style={styles.bottomSection}>
        <Text style={styles.price}>€{price.toFixed(2)}</Text>
        <Text style={styles.pieceCount}>{pieceCount.toLocaleString()} pcs</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.backgroundCard,
    borderRadius: Radius.lg,
    marginHorizontal: Spacing.md,
    marginVertical: Spacing.sm,
    overflow: 'hidden',
  },
  topSection: {
    height: 180,
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.md,
    justifyContent: 'flex-end',
  },
  setName: {
    color: Colors.textPrimary,
    fontSize: FontSize.lg,
    fontWeight: 'bold',
    marginBottom: Spacing.xs,
  },
  numberAndTheme: {
    color: Colors.textSecondary,
    fontSize: FontSize.sm,
  },
  bottomSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.backgroundDark,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
  },
  price: {
    color: Colors.textPrice,
    fontSize: FontSize.lg,
    fontWeight: 'bold',
  },
  pieceCount: {
    color: Colors.textSecondary,
    fontSize: FontSize.sm,
  },
});
