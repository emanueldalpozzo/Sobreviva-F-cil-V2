export type Frequency = "daily" | "weekly" | "monthly";

export type TransactionType = "income" | "expense";

export interface Task {
  id: string;
  title: string;
  category: string;
  time?: string;
  frequency: Frequency;
  completed: boolean;
}

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: string;
  date: string;
}
