import type { Transaction } from "../types";

export const transactions: Transaction[] = [
  { id: "transaction-1", title: "Salário", amount: 1800, type: "income", category: "Renda", date: "2026-09-01" },
  { id: "transaction-2", title: "Aluguel", amount: 800, type: "expense", category: "Moradia", date: "2026-09-05" },
  { id: "transaction-3", title: "Supermercado", amount: 182, type: "expense", category: "Alimentação", date: "2026-09-08" },
  { id: "transaction-4", title: "Freelance", amount: 300, type: "income", category: "Renda", date: "2026-09-10" },
  { id: "transaction-5", title: "Combustível", amount: 95.5, type: "expense", category: "Transporte", date: "2026-09-12" },
  { id: "transaction-6", title: "Cinema", amount: 60, type: "expense", category: "Lazer", date: "2026-09-14" },
  { id: "transaction-7", title: "Farmácia", amount: 29.4, type: "expense", category: "Saúde", date: "2026-09-16" },
  { id: "transaction-8", title: "Reembolso", amount: 80, type: "income", category: "Outros", date: "2026-09-18" },
  { id: "transaction-9", title: "Presente", amount: 15, type: "expense", category: "Outros", date: "2026-09-20" },
];
