import { View, Image, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Orange() {
  const router = useRouter();

  return (
    <View>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/54369/pexels-photo-54369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        }}
        style={{ width: 200, height: 200 }}
      />
      <Pressable onPress={() => router.back()}>
        <Text>Back</Text>
      </Pressable>
    </View>
  );
}