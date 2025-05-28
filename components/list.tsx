import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const fruits = ['apple', 'orange', 'mango'];

export default function FruitList() {
  const router = useRouter();

  return (
    <View>
      {fruits.map((fruit) => (
        <Pressable key={fruit} onPress={() => router.push(`/${fruit}`)}>
          <Text style={styles.item}>{fruit}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    padding: 10,
    textTransform: 'capitalize',
    color: 'blue'
  },
});
