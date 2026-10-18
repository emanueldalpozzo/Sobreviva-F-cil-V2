import type { TransactionCategory } from "../types";

// Categorias de transação (no banco: tabela TRANSACTION_CATEGORY)
export const transactionCategories: TransactionCategory[] = [
  { id: "renda", name: "Renda", icon: "💰" },
  { id: "moradia", name: "Moradia", icon: "🏠" },
  { id: "alimentacao", name: "Alimentação", icon: "🛒" },
  { id: "transporte", name: "Transporte", icon: "🚗" },
  { id: "lazer", name: "Lazer", icon: "🎬" },
  { id: "saude", name: "Saúde", icon: "💊" },
  { id: "outros", name: "Outros", icon: "📦" },
];
