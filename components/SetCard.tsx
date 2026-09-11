import { Colors, FontSize, Radius, Spacing } from '@/constants/theme';
import { Image, StyleSheet, Text, View } from 'react-native';

type SetCardProps = {
  name: string;
  number: number;
  theme: string;
  price: number;
  pieceCount: number;
  imageUrl?: string;
};

export default function SetCard({ name, number, theme, price, pieceCount, imageUrl }: SetCardProps) {
  return (
    <View style={styles.cardContainer}>
      {/* Top section — image with name + subtitle overlaid */}
      <View style={styles.topSection}>
        {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
        <View style={styles.textPill}>
          <Text style={styles.setName}>{name}</Text>
          <Text style={styles.numberAndTheme}>#{number} · {theme}</Text>
        </View>
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
    marginVertical: Spacing.sm,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#5C6BC0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 4,
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
  textPill: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(240, 240, 240, 0.88)',
    borderRadius: Radius.lg,
    paddingHorizontal: Spacing.sm + 2,
    paddingVertical: Spacing.xs,
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
  image: {
    ...StyleSheet.absoluteFill,
    resizeMode: 'cover',
  },
});
