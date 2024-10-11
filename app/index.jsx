import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router'

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto"  backgroundColor='#161212' color='white'/>
      <Text className="text-3xl">This is wonderful, buddy!</Text>
      <Link href="/profile" style={{ color: 'bue'}}>Go to profile</Link>
    
    </SafeAreaView>
  );
}

