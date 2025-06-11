import { Text, Pressable, View, StyleSheet, Button} from "react-native";

interface decrementProps {
    count: number;
    setCount: (count: number) => void;
}

const Decrement: React.FC<decrementProps> = ({count, setCount}) => {

return(<Pressable style={styles.button} onPress={()=>setCount(count-1)}><Text>Decrement</Text></Pressable>  )

      
            


}
const styles = StyleSheet.create({
  item: {
    fontSize: 20,
    padding: 10,
    textTransform: 'capitalize',
    color: 'blue'
  },
  button: {
        backgroundColor: '#e74c3c', 
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 30, 
        alignItems: 'center', 
        justifyContent: 'center', 
        minWidth: 80,
        
        margin: 10
    },
});

export default Decrement;