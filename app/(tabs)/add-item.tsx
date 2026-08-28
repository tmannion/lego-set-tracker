import TextField from '@/components/ui/TextField';
import Button from '@/components/ui/Button';
import { Colors, FontSize, Spacing } from '@/constants/theme';
import { SetsContext } from '@/context/SetsContext';
import { useState, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native';

export default function AddItem() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [theme, setTheme] = useState('');
  const [price, setPrice] = useState('');
  const [pieceCount, setPieceCount] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const context = useContext(SetsContext);

  const handleSubmit = () => {
    if (!name || !number || !price) return;

    context?.addSet({
      id: Date.now().toString(),
      name,
      number: parseInt(number, 10),
      theme,
      price: parseFloat(price),
      pieceCount: parseInt(pieceCount, 10),
      imageUrl: imageUrl || undefined,
    });

    Alert.alert('Success', 'Set added to your wishlist!');
    setName('');
    setNumber('');
    setTheme('');
    setPrice('');
    setPieceCount('');
    setImageUrl('');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Add a Set</Text>
      <Text style={styles.subtitle}>Track a LEGO set you want to buy.</Text>

      {/* Set Name — full width */}
      <TextField
        label="Set Name *"
        placeholder="e.g. Eiffel Tower"
        value={name}
        onChangeText={setName}
      />

      {/* Set Number + Price — side by side */}
      <View style={styles.row}>
        <View style={styles.rowHalf}>
          <TextField
            label="Set Number *"
            placeholder="e.g. 10307"
            value={number}
            onChangeText={setNumber}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.rowSpacer} />
        <View style={styles.rowHalf}>
          <TextField
            label="Price (€) *"
            placeholder="0.00"
            value={price}
            onChangeText={setPrice}
            keyboardType="decimal-pad"
          />
        </View>
      </View>

      {/* Theme + Piece Count — side by side */}
      <View style={styles.row}>
        <View style={styles.rowHalf}>
          <TextField
            label="Theme *"
            placeholder="e.g. Icons"
            value={theme}
            onChangeText={setTheme}
          />
        </View>
        <View style={styles.rowSpacer} />
        <View style={styles.rowHalf}>
          <TextField
            label="Piece Count *"
            placeholder="e.g. 10001"
            value={pieceCount}
            onChangeText={setPieceCount}
            keyboardType="numeric"
          />
        </View>
      </View>

      {/* Set Image — full width */}
      <TextField
        label="Set Image Url"
        placeholder="https://..."
        value={imageUrl}
        onChangeText={setImageUrl}
        optional={true}
      />

      {/* Submit button */}
      <Button label='Add to Wishlist' onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundDark,
  },
  content: {
    padding: Spacing.md,
    paddingTop: Spacing.lg,
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
  row: {
    flexDirection: 'row',
  },
  rowHalf: {
    flex: 1,
  },
  rowSpacer: {
    width: Spacing.md,
  },
});
