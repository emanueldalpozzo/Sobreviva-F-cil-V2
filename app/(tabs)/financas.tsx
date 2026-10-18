import { ScrollView, Text, View } from "react-native";
import Card from "../../src/components/Card";
import FloatingButton from "../../src/components/FloatingButton";
import ProgressBar from "../../src/components/ProgressBar";
import { transactionCategories } from "../../src/mocks/categories";
import { transactions } from "../../src/mocks/transactions";
import {
  calcularGastosPorCategoria,
  calcularResumo,
  formatarMoeda,
  iconeDaCategoria,
} from "../../src/utils/finance";
import { capitalizar } from "../../src/utils/text";

// "2026-09-05" → "05/09", sem converter para Date
function formatarDiaMes(data: string) {
  const [, mes, dia] = data.split("-");
  return `${dia}/${mes}`;
}

// "2026-09-05" → "Setembro 2026". O meio-dia evita que o fuso horário
// mude a data para o dia (e o mês) anterior.
function formatarMesAno(data: string) {
  const referencia = new Date(`${data}T12:00:00`);
  const mes = capitalizar(referencia.toLocaleDateString("pt-BR", { month: "long" }));
  return `${mes} ${referencia.getFullYear()}`;
}

function contarTransacoes(quantidade: number) {
  return `${quantidade} ${quantidade === 1 ? "transação" : "transações"}`;
}

export default function Financas() {
  const resumo = calcularResumo(transactions);
  const gastosPorCategoria = calcularGastosPorCategoria(transactions);
  const maiorGasto = gastosPorCategoria.length > 0 ? gastosPorCategoria[0].total : 0;

  const datas = transactions.map((transaction) => transaction.date).sort();
  const mesReferencia =
    datas.length > 0
      ? formatarMesAno(datas[datas.length - 1])
      : formatarMesAno(new Date().toISOString().slice(0, 10));

  return (
    <View className="flex-1 bg-background">
      <ScrollView className="flex-1" contentContainerClassName="pb-28">
        <View className="rounded-b-sheet bg-accent px-4 pb-6 pt-12">
          <Text className="text-caption text-accent-foreground opacity-80">{mesReferencia}</Text>
          <Text className="text-title text-accent-foreground">Finanças</Text>
          <View className="mt-4 rounded-card bg-white/30 p-4">
            <Text className="text-caption text-accent-foreground">Saldo Livre</Text>
            <Text className="text-title text-accent-foreground">
              {formatarMoeda(resumo.saldoLivre)}
            </Text>
          </View>
        </View>

        <View className="mt-4 gap-4 px-4">
          <View className="flex-row gap-3">
            <Card className="flex-1">
              <Text className="text-caption text-muted-foreground">↗ Entradas</Text>
              <Text className="text-subtitle text-positive">
                {formatarMoeda(resumo.totalEntradas)}
              </Text>
              <Text className="text-caption text-muted-foreground">
                {contarTransacoes(resumo.quantidadeEntradas)}
              </Text>
            </Card>
            <Card className="flex-1">
              <Text className="text-caption text-muted-foreground">↘ Saídas</Text>
              <Text className="text-subtitle text-danger">{formatarMoeda(resumo.totalSaidas)}</Text>
              <Text className="text-caption text-muted-foreground">
                {contarTransacoes(resumo.quantidadeSaidas)}
              </Text>
            </Card>
          </View>

          <Card>
            <Text className="text-subtitle text-foreground">Gastos por Categoria</Text>
            {gastosPorCategoria.length === 0 ? (
              <Text className="mt-2 text-body text-muted-foreground">Nenhum gasto registrado.</Text>
            ) : (
              <View className="mt-3 gap-3">
                {gastosPorCategoria.map(({ categoria, total }) => (
                  <View key={categoria}>
                    <View className="flex-row justify-between">
                      <Text className="text-body text-foreground">{categoria}</Text>
                      <Text className="text-body text-muted-foreground">{formatarMoeda(total)}</Text>
                    </View>
                    <ProgressBar value={maiorGasto > 0 ? total / maiorGasto : 0} className="mt-1" />
                  </View>
                ))}
              </View>
            )}
          </Card>

          <Card>
            <Text className="text-subtitle text-foreground">Histórico</Text>
            {transactions.length === 0 ? (
              <Text className="mt-2 text-body text-muted-foreground">
                Nenhuma transação registrada.
              </Text>
            ) : (
              transactions.map((transaction, index) => {
                const ehEntrada = transaction.type === "income";
                const separador = index < transactions.length - 1 ? "border-b border-border" : "";

                return (
                  <View
                    key={transaction.id}
                    className={`flex-row items-center gap-3 py-3 ${separador}`}
                  >
                    <View className="h-10 w-10 items-center justify-center rounded-full bg-muted">
                      <Text className="text-body">
                        {iconeDaCategoria(transaction.category, transactionCategories)}
                      </Text>
                    </View>
                    <View className="flex-1">
                      <Text className="text-body font-semibold text-foreground">
                        {transaction.title}
                      </Text>
                      <Text className="text-caption text-muted-foreground">
                        {transaction.category} · {formatarDiaMes(transaction.date)}
                      </Text>
                    </View>
                    <Text
                      className={`text-body font-semibold ${ehEntrada ? "text-positive" : "text-danger"}`}
                    >
                      {ehEntrada ? "+" : "-"}
                      {formatarMoeda(transaction.amount)}
                    </Text>
                  </View>
                );
              })
            )}
          </Card>
        </View>
      </ScrollView>

      <FloatingButton href="/nova-transacao" label="Nova transação" />
    </View>
  );
}
