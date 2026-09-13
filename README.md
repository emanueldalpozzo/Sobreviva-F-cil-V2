# Sobreviva Fácil

## Sobre o app
> "Sobrevivencia Fácil" é um aplicativo mobile desenvolvido para auxiliar pessoas na jornada de morar sozinho pela primeira vez. O app serve como um guia prático de 'sobrevivencia', oferecendo listas de tarefas domésticas, dicas de economia e organização, com o objetivo de tornar a transição para a vida independente mais simples e organizada.

##  Funcionalidades 

O projeto está dividido em duas fases de desenvolvimento, priorizando a entrega de valor imediato (MVP) e escalando para funcionalidades mais complexas no futuro.

###  Fase 1: MVP (Produto Mínimo Viável)
Foco estrutural no gerenciamento prático e rápido da nova rotina.

**Gestão de Rotina**
- [ ] **Cronograma de Limpeza Predefinido:** Banco de dados populado com tarefas padrão de limpeza diárias, semanais e mensais.
- [ ] **Frequência das Tarefas:** Indicador visual e lógica de repetição na interface.
- [ ] **Checklists Customizáveis:** Formulário para adição de demandas e rotinas específicas do usuário.
- [ ] **Ações de Conclusão:** Checkbox funcional para dar baixa imediata nas atividades.
- [ ] **Detalhes da Tarefa:** Tela ou modal contendo a descrição e o escopo da atividade selecionada.
- [ ] **Progresso da Rotina:** Barra de progresso visual calculada com base na proporção de itens concluídos no período.

**Controle Financeiro e Planejamento**
- [ ] **Calculadora de Moradia:** Interface direta para abater despesas fixas (aluguel, luz, internet) da receita mensal.
- [ ] **Checklist de Enxoval:** Lista predefinida de itens essenciais de casa nova, pronta para acompanhamento.

**Conteúdo Rápido**
- [ ] **Dicas para Morar Sozinho:** Seção de leitura rápida com conselhos fundamentais de sobrevivência.
- [ ] **Busca e Categorias:** Filtros por tags (Limpeza, Cozinha, Dinheiro) e barra de pesquisa por texto.
- [ ] **Dicas de Economia:** Textos curtos e contextuais voltados para a redução do custo de vida.

---

### 🛠️ Fase 2: Funcionalidades Avançadas (V2)
Expansão do aplicativo com automações, alertas nativos e curadoria de conteúdo denso.

**Automação e Alertas**
- [ ] **Notificações de Rotina:** Integração com alertas push nativos para tarefas críticas e pontuais.
- [ ] **Alertas de Vencimento:** Tarefas em *background* para disparar lembretes automáticos próximos à data de vencimento de boletos.

**Visualização Avançada**
- [ ] **Calendário de Tarefas:** Renderização de uma visualização mensal em grade interativa.

**Curadoria de Conteúdo e Solução de Problemas**
- [ ] **Tutoriais de Manutenção:** Manuais passo a passo para pequenos reparos domésticos (ex: resistência de chuveiro, desentupimentos).
- [ ] **SOS Casa:** Diretório local para salvar contatos de chaveiros, encanadores e imobiliária.

# Checklist de Entrega - Checkpoint do Projeto

## Repositório e Formatação
- [ ] Criar repositório público no GitHub para acomodar o projeto Expo
- [ ] Configurar o título do projeto com formatação H1 (`# Título`)
- [ ] Configurar todas as subseções obrigatórias com formatação H2 (`## Subseção`)

---

## [1 ponto] Subseção: Sobre o app
- [ ] Posicionar a subseção imediatamente após o título H1
- [ ] Explicar o que o aplicativo faz e seu objetivo central
- [ ] Listar as funcionalidades prioritárias/básicas para implementação em formato de checklist (`- [ ]`)
- [ ] Listar possíveis funcionalidades adicionais ou trabalhos futuros em formato de checklist (`- [ ]`)

---

## [3 pontos] Subseção: Protótipos de tela
- [ ] Projetar os protótipos de interface das telas (Figma ou ferramenta equivalente)
- [ ] Incluir link de visualização com acesso público liberado no Readme
- [ ] *(Caso não use link do Figma)* Exportar todas as telas em um único mapa de telas como imagem e anexar diretamente via Markdown ou link público do Google Drive

---

## [3 pontos] Subseção: Modelagem do banco
- [ ] Declarar explicitamente a arquitetura/tecnologia de persistência (ex: SQLite local, API remota, Supabase, Firebase, PocketBase)
- [ ] Apresentar a estrutura dos dados:
  - [ ] Diagrama Entidade-Relacionamento com tabelas, atributos e cardinalidades (se relacional)
  - [ ] Schemas dos dados manipulados pelo app (se NoSQL)
  - [ ] Modelagem da parcela de dados consumida pelo app (se API remota)
- [ ] Disponibilizar o diagrama de forma acessível (Mermaid embutido no Markdown, diagrams.net público, imagem no Readme ou Google Drive público)

---

## [3 pontos] Subseção: Planejamento de sprints
- [ ] Estruturar o cronograma de sprints cobrindo todo o desenvolvimento até a conclusão
- [ ] Vincular os requisitos/funcionalidades planejados a cada sprint
- [ ] Definir a estimativa de tempo (em semanas) para cada entrega/recurso
    USUARIO ||--o{ ITEM : possui
