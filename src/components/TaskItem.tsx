import { Text, View } from "react-native";
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  overdue?: boolean;
  className?: string;
}

export default function TaskItem({ task, overdue = false, className }: TaskItemProps) {
  const containerStyle = task.completed
    ? "border-border bg-card opacity-60"
    : overdue
      ? "border-warning bg-warning/10"
      : "border-border bg-card";

  const checkboxStyle = task.completed ? "border-primary bg-primary" : "border-border bg-card";

  const titleStyle = task.completed ? "text-muted-foreground line-through" : "text-foreground";

  const status = task.completed ? "concluída" : overdue ? "atrasada" : "pendente";

  return (
    <View
      className={`flex-row items-center gap-3 rounded-item border px-4 py-3 ${containerStyle} ${className ?? ""}`}
      accessibilityLabel={`${task.title}, ${status}`}
    >
      <View className={`h-6 w-6 items-center justify-center rounded-md border-2 ${checkboxStyle}`}>
        {task.completed && <Text className="text-caption font-bold text-primary-foreground">✓</Text>}
      </View>

      <View className="flex-1">
        <Text className={`text-body font-semibold ${titleStyle}`}>{task.title}</Text>
        <Text className="text-caption text-muted-foreground">
          {task.category}
          {task.time ? ` · ${task.time}` : ""}
        </Text>
      </View>

      {overdue && <Text className="text-caption font-semibold text-warning">Atrasada</Text>}
    </View>
  );
}
