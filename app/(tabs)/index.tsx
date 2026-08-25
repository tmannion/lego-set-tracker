import { Colors, FontSize, Spacing } from '@/constants/theme';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import SetCard from '@/components/SetCard';

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.list}>
        <Text style={styles.title}>Wishlist</Text>
        <Text style={styles.subtitle}>4 sets · €1,545.97</Text>

        <SetCard
          name="Eiffel Tower"
          number={10307}
          theme="Icons"
          price={629.99}
          pieceCount={10001}
        />
        <SetCard
          name="Botanical Garden"
          number={10329}
          theme="Icons"
          price={99.99}
          pieceCount={1363}
        />
        <SetCard
          name="Millennium Falcon"
          number={75192}
          theme="Star Wars"
          price={849.99}
          pieceCount={7541}
          imageUrl='https://www.lego.com/cdn/cs/set/assets/blt3349f56c6f192e18/75192_Prod.png?format=webply&fit=bounds&quality=75&width=1200&height=1200&dpr=1'
        />
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
