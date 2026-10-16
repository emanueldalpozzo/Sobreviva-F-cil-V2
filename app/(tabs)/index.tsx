import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background p-4">
      <View className="w-full rounded-card border border-border bg-card p-4">
        <Text className="text-title text-foreground">Sobreviva Fácil</Text>
        <Text className="text-body text-muted-foreground">Tokens de design aplicados</Text>
        <View className="mt-3 self-start rounded-chip bg-primary px-3 py-1">
          <Text className="text-caption text-primary-foreground">primary</Text>
        </View>
      </View>
    </View>
  );
}
