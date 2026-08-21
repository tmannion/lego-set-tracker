import { Colors, Spacing } from '@/constants/theme';
import { ScrollView, StyleSheet, View } from 'react-native';

import SetCard from '@/components/SetCard';

export default function Index() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.list}>
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
  },
});
