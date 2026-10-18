import type { Transaction, TransactionCategory, TransactionType } from "../types";

export function formatarMoeda(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function filtrarPorTipo(transactions: Transaction[], type: TransactionType) {
  return transactions.filter((transaction) => transaction.type === type);
}

export function somarValores(transactions: Transaction[]) {
  return transactions.reduce((soma, transaction) => soma + transaction.amount, 0);
}

// O orçamento do mês é o total de entradas
export function calcularResumo(transactions: Transaction[]) {
  const entradas = filtrarPorTipo(transactions, "income");
  const saidas = filtrarPorTipo(transactions, "expense");
  const totalEntradas = somarValores(entradas);
  const totalSaidas = somarValores(saidas);

  return {
    totalEntradas,
    totalSaidas,
    quantidadeEntradas: entradas.length,
    quantidadeSaidas: saidas.length,
    saldoLivre: totalEntradas - totalSaidas,
    orcamentoUtilizado: totalEntradas > 0 ? totalSaidas / totalEntradas : 0,
  };
}

// Soma das saídas de cada categoria, da maior para a menor
export function calcularGastosPorCategoria(transactions: Transaction[]) {
  const totais: Record<string, number> = {};

  for (const transaction of filtrarPorTipo(transactions, "expense")) {
    totais[transaction.category] = (totais[transaction.category] ?? 0) + transaction.amount;
  }

  return Object.entries(totais)
    .map(([categoria, total]) => ({ categoria, total }))
    .sort((a, b) => b.total - a.total);
}

// Ícone da categoria pelo nome; "💸" quando a categoria não é encontrada
export function iconeDaCategoria(nome: string, categorias: TransactionCategory[]) {
  return categorias.find((categoria) => categoria.name === nome)?.icon ?? "💸";
}
