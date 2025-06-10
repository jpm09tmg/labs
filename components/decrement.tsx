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
        backgroundColor: '#e74c3c', // Red color for the decrement button
        paddingVertical: 15, // Vertical padding
        paddingHorizontal: 25, // Horizontal padding
        borderRadius: 30, // Make the button rounded (pill shape)
        alignItems: 'center', // Center text horizontally
        justifyContent: 'center', // Center text vertically
        minWidth: 80, // Minimum width for a good touch target
        shadowColor: '#000', // Shadow for the button
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5, 
        margin: 10// Android shadow
    },
});

export default Decrement;