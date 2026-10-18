import { ScrollView, Text } from 'react-native';
import Card from '../../src/components/Card';
import ProgressBar from '../../src/components/ProgressBar';
import { tasks } from '../../src/mocks/tasks';

export default function Index() {
  const tarefasDoDia = tasks.filter((task) => task.frequency === 'daily');
  const concluidas = tarefasDoDia.filter((task) => task.completed).length;
  const total = tarefasDoDia.length;
  const progresso = total > 0 ? concluidas / total : 0;
  const porcentagem = Math.round(progresso * 100);

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName='gap-4 p-4'>
      <Card className="w-full">
        <Text className="text-caption text-muted-foreground uppercase">Progresso do Dia</Text>
        <Text className="text-subtitle text-foreground">
          {concluidas} de {total} tarefas concluídas
        </Text>
        <ProgressBar value={progresso} className="mt-3" />
        <Text className="mt-1 text-caption text-muted-foreground">{porcentagem}% completo</Text>
      </Card>
    </ScrollView>
  );
}
