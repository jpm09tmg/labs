import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';

export default function App() {
  let sampleList = [
    {id: 1, name: "Josh"},
    {id: 2, name: "Thomas"},
    {id: 3, name: "Kishan"},
    {id: 4, name: "Mayur"},
  ];
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {sampleList.map((item)=> (
        <Text key={item.id} style={{fontSize: 20}}>
          {item.name}
        </Text>
      ))}
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
