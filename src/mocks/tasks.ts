import type { Task } from "../types";

// Tarefas do protótipo: 9 no total, 3 concluídas
export const tasks: Task[] = [
  { id: "task-1", title: "Colocar lixo na rua", category: "Casa", time: "07:00", frequency: "daily", completed: false },
  { id: "task-2", title: "Lavar louça", category: "Casa", time: "12:00", frequency: "daily", completed: false },
  { id: "task-3", title: "Varrer o quarto", category: "Casa", time: "10:00", frequency: "daily", completed: true },
  { id: "task-4", title: "Comprar arroz e feijão", category: "Compras", frequency: "weekly", completed: false },
  { id: "task-5", title: "Comprar papel higiênico", category: "Compras", time: "09:00", frequency: "weekly", completed: false },
  { id: "task-6", title: "Comprar detergente", category: "Compras", frequency: "weekly", completed: true },
  { id: "task-7", title: "Ligar para o banco", category: "Pessoal", time: "14:00", frequency: "monthly", completed: false },
  { id: "task-8", title: "Agendar consulta médica", category: "Pessoal", frequency: "monthly", completed: false },
  { id: "task-9", title: "Pagar conta de luz", category: "Pessoal", frequency: "monthly", completed: true },
];
