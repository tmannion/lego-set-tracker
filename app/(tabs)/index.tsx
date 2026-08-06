import { View, Text, StyleSheet } from 'react-native';

import SetCard from '@/components/SetCard';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up app/(tabs) to start working on your app!</Text>
      <SetCard name="Test Set" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});