import { ScrollView, Text, View } from "react-native";
import Card from "../../src/components/Card";
import ProgressBar from "../../src/components/ProgressBar";
import { tasks } from "../../src/mocks/tasks";

// O app ainda não tem cadastro de usuário
const nomeUsuario = "Emanuel";
const iniciais = "EM";

export default function Index() {
  const dataDeHoje = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });

  const tarefasDoDia = tasks.filter((task) => task.frequency === "daily");
  const concluidas = tarefasDoDia.filter((task) => task.completed).length;
  const total = tarefasDoDia.length;
  const progresso = total > 0 ? concluidas / total : 0;
  const porcentagem = Math.round(progresso * 100);

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="pb-8"
    >
      <View className="rounded-b-sheet bg-primary px-4 pb-8 pt-12">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-caption capitalize text-primary-foreground opacity-80">
              {dataDeHoje}
            </Text>
            <Text className="text-title text-primary-foreground">
              Olá, {nomeUsuario}! 👋
            </Text>
          </View>
          <View className="h-12 w-12 items-center justify-center rounded-full bg-white/20">
            <Text className="text-body font-bold text-primary-foreground">
              {iniciais}
            </Text>
          </View>
        </View>
      </View>

      <View className="mt-4 gap-4 px-4">
        <Card className="w-full">
          <Text className="text-caption text-muted-foreground uppercase">
            Progresso do Dia
          </Text>
          <Text className="text-subtitle text-foreground">
            {concluidas} de {total} tarefas concluídas
          </Text>
          <ProgressBar value={progresso} className="mt-3" />
          <Text className="mt-1 text-caption text-muted-foreground">
            {porcentagem}% completo
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
}
