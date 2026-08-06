import { View, Text, StyleSheet } from 'react-native';

type SetCardProps = {
  name: string;
};

export default function SetCard({ name }: SetCardProps) {
  return(
    <View style={[ styles.cardContainer, { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 } ]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  cardContainer: {
    backgroundColor: 'white',
    width: 320,
    height: 220,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  }
});