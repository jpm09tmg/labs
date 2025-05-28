import { View, Image, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Mango() {
  const router = useRouter();

  return (
    <View>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/7788422/pexels-photo-7788422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }}
        style={{ width: 200, height: 200 }}
      />
      <Pressable onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
    </View>
  );
}