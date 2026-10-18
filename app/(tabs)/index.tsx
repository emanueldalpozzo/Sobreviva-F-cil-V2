import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";
import Card from "../../src/components/Card";
import ProgressBar from "../../src/components/ProgressBar";
import TaskItem from "../../src/components/TaskItem";
import { tasks } from "../../src/mocks/tasks";
import { transactions } from "../../src/mocks/transactions";
import type { Task } from "../../src/types";
import { calcularResumo, formatarMoeda } from "../../src/utils/finance";
import { capitalizar } from "../../src/utils/text";

const nomeUsuario = "Emanuel";
const iniciais = "EM";

// Horários no formato "HH:MM" podem ser comparados como texto
function estaAtrasada(task: Task, horaAtual: string) {
  return !task.completed && task.time !== undefined && task.time < horaAtual;
}

export default function Index() {
  const dataDeHoje = capitalizar(
    new Date().toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "short",
    }),
  );

  const tarefasDoDia = tasks.filter((task) => task.frequency === "daily");
  const concluidas = tarefasDoDia.filter((task) => task.completed).length;
  const total = tarefasDoDia.length;
  const progresso = total > 0 ? concluidas / total : 0;
  const porcentagem = Math.round(progresso * 100);
  const horaAtual = new Date().toTimeString().slice(0, 5);

  const { totalSaidas: gastos, saldoLivre, orcamentoUtilizado } = calcularResumo(transactions);

  return (
    <ScrollView
      className="flex-1 bg-background"
      contentContainerClassName="pb-8"
    >
      <View className="rounded-b-sheet bg-primary px-4 pb-8 pt-12">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="text-caption text-primary-foreground opacity-80">
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

        <View className="gap-3">
          <View className="flex-row items-center justify-between">
            <Text className="text-subtitle text-foreground">Prioridades de Hoje</Text>
            <Link href="/tarefas">
              <Text className="text-body font-semibold text-primary">Ver todas</Text>
            </Link>
          </View>

          {tarefasDoDia.length === 0 ? (
            <Text className="text-body text-muted-foreground">Nenhuma tarefa para hoje.</Text>
          ) : (
            tarefasDoDia.map((task) => (
              <TaskItem key={task.id} task={task} overdue={estaAtrasada(task, horaAtual)} />
            ))
          )}
        </View>

        <Card>
          <Text className="text-caption text-muted-foreground uppercase">
            Resumo do Mês
          </Text>
          <View className="mt-2 flex-row justify-between">
            <View>
              <Text className="text-caption text-muted-foreground">Saldo livre</Text>
              <Text className="text-title text-positive">{formatarMoeda(saldoLivre)}</Text>
            </View>
            <View className="items-end">
              <Text className="text-caption text-muted-foreground">Gastos</Text>
              <Text className="text-subtitle text-danger">{formatarMoeda(gastos)}</Text>
            </View>
          </View>
          <ProgressBar value={orcamentoUtilizado} variant="positive" className="mt-3" />
          <Text className="mt-1 text-caption text-muted-foreground">
            {Math.round(orcamentoUtilizado * 100)}% do orçamento utilizado
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
}
