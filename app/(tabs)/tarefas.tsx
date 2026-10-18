import { ScrollView, Text, View } from "react-native";
import FloatingButton from "../../src/components/FloatingButton";
import TaskItem from "../../src/components/TaskItem";
import { tasks } from "../../src/mocks/tasks";
import { estaAtrasada, obterHoraAtual } from "../../src/utils/tasks";

// Classes completas para o Tailwind encontrá-las no código-fonte
const corPorCategoria: Record<string, string> = {
  Casa: "text-primary",
  Compras: "text-accent-foreground",
  Pessoal: "text-warning",
};

export default function Tarefas() {
  const horaAtual = obterHoraAtual();
  const pendentes = tasks.filter((task) => !task.completed);
  const concluidas = tasks.filter((task) => task.completed);
  const categorias = ["Todas", ...new Set(tasks.map((task) => task.category))];

  return (
    <View className="flex-1 bg-background">
      <ScrollView className="flex-1" contentContainerClassName="pb-28">
        <View className="rounded-b-sheet bg-primary px-4 pb-6 pt-12">
          <Text className="text-caption text-primary-foreground opacity-80">Suas tarefas</Text>
          <Text className="text-title text-primary-foreground">Tarefas</Text>
          <View className="mt-2 self-start rounded-chip bg-white/20 px-3 py-1">
            <Text className="text-caption font-semibold text-primary-foreground">
              {concluidas.length}/{tasks.length} concluídas
            </Text>
          </View>
        </View>

        <View className="mt-4 gap-4 px-4">
          {/* Chips apenas visuais: a filtragem fica para o Sprint 4 */}
          <View className="flex-row flex-wrap gap-2">
            {categorias.map((categoria) => {
              const ativo = categoria === "Todas";
              return (
                <View
                  key={categoria}
                  className={`rounded-chip border px-4 py-1.5 ${ativo ? "border-primary bg-primary" : "border-border bg-card"}`}
                >
                  <Text
                    className={`text-caption font-semibold ${ativo ? "text-primary-foreground" : "text-muted-foreground"}`}
                  >
                    {categoria}
                  </Text>
                </View>
              );
            })}
          </View>

          {tasks.length === 0 ? (
            <Text className="text-body text-muted-foreground">Nenhuma tarefa cadastrada.</Text>
          ) : (
            <>
              <View className="gap-3">
                {pendentes.length === 0 ? (
                  <Text className="text-body text-muted-foreground">
                    Todas as tarefas foram concluídas! 🎉
                  </Text>
                ) : (
                  pendentes.map((task) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      overdue={estaAtrasada(task, horaAtual)}
                      categoryClassName={corPorCategoria[task.category] ?? "text-muted-foreground"}
                    />
                  ))
                )}
              </View>

              {concluidas.length > 0 && (
                <View className="gap-3">
                  <Text className="text-caption font-semibold uppercase text-muted-foreground">
                    Concluídas ({concluidas.length})
                  </Text>
                  {concluidas.map((task) => (
                    <TaskItem
                      key={task.id}
                      task={task}
                      categoryClassName={corPorCategoria[task.category] ?? "text-muted-foreground"}
                    />
                  ))}
                </View>
              )}
            </>
          )}
        </View>
      </ScrollView>

      <FloatingButton href="/nova-tarefa" label="Nova tarefa" />
    </View>
  );
}
