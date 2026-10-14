import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        <Stack.Screen name='nova-tarefa' options={{title: 'Nova Tarefa'}} />
        <Stack.Screen name='nova-transacao' options={{title:'Nova Transação'}} />
    </Stack>
  );
}
