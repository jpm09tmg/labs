import Decrement from "../components/decrement";
import Increment from "../components/increment";
import { useState } from "react";
import { Text, View, StyleSheet} from "react-native";


const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{count}</Text>
            <Decrement count={count} setCount={setCount}/>
            <Increment count={count} setCount={setCount}/>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 60,
    padding: 10,
    fontWeight: "bold"
  }
});

export default Counter;