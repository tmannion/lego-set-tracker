import SetCard from '@/components/SetCard';
import { Colors, FontSize, Spacing } from '@/constants/theme';
import { SetsContext } from '@/context/SetsContext';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useContext } from 'react';

export default function Index() {
  const context = useContext(SetsContext);
  const sets = context?.sets ?? [];

  const totalPrice = sets.reduce((sum, set) => sum + set.price, 0);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.list}>
        <Text style={styles.title}>Wishlist</Text>
        <Text style={styles.subtitle}>
          {sets.length} sets · €{totalPrice.toFixed(2)}
        </Text>

        {sets.map((set) => (
          <SetCard
            key={set.id}
            name={set.name}
            number={set.number}
            theme={set.theme}
            price={set.price}
            pieceCount={set.pieceCount}
            imageUrl={set.imageUrl}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
  list: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: FontSize.xl,
    fontWeight: 'bold',
    marginBottom: Spacing.xs,
  },
  subtitle: {
    color: Colors.textSecondary,
    fontSize: FontSize.sm,
    marginBottom: Spacing.lg,
  },
});
