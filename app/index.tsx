import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import FruitList from '../components/list';

export default function App() {
  let sampleList = [
    {id: 1, name: "Apple"},
    {id: 2, name: "Mango"},
    {id: 3, name: "Orange"},
  ];
  return (
    <View style={styles.container}>
      <Text>Welcome to our app!</Text>
      <Button title ="Hello There" onPress={()=> alert ("You are done with the lab")} />
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
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  }
});
