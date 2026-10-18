import type { Task } from "../types";

// Horários no formato "HH:MM" podem ser comparados como texto
export function estaAtrasada(task: Task, horaAtual: string) {
  return !task.completed && task.time !== undefined && task.time < horaAtual;
}

// Hora atual no formato "HH:MM"
export function obterHoraAtual() {
  return new Date().toTimeString().slice(0, 5);
}
