import { Text, View } from 'react-native';
import Card from '../../src/components/Card';
import ProgressBar from '../../src/components/ProgressBar';

const concluidas = 1;
const total = 3;

export default function Index() {
  const progresso = total > 0 ? concluidas / total : 0;
  const porcentagem = Math.round(progresso * 100);

  return (
    <View className="flex-1 items-center justify-center bg-background p-4">
      <Card className="w-full">
        <Text className="text-caption text-muted-foreground uppercase">Progresso do Dia</Text>
        <Text className="text-subtitle text-foreground">
          {concluidas} de {total} tarefas concluídas
        </Text>
        <ProgressBar value={progresso} className="mt-3" />
        <Text className="mt-1 text-caption text-muted-foreground">{porcentagem}% completo</Text>
      </Card>
    </View>
  );
}
