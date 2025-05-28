import { View, Text, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FruitList from '../components/list';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to our app!</Text>
      <Button title="Hello There" onPress={() => alert("You are done with the lab")} />
      
      <Text style={styles.listTitle}>Choose a fruit:</Text>
      <FruitList />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  listTitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});