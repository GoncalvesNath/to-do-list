# React + Vite — To-Do List

## Descrição
Aplicação de exemplo "To-Do List" construída com React + Vite. Fornece CRUD básico de tarefas com hot-reload para desenvolvimento.

## O que foi feito
- Setup inicial com Vite e React.
- Componentes para listar, adicionar, editar e remover tarefas.
- Configuração básica de ESLint (conforme template).

## Linguagens, libs e frameworks
- JavaScript (ES2020+)
- React
- Vite
- ESLint
- UUID

## Pré-requisitos
- Node.js v16+ (recomendado LTS)
- npm ou yarn

## Como rodar localmente
1. Clone o repositório:
   ```bash
   git clone <repo-url>
   ```
2. Entre na pasta do projeto:
   ```bash
   cd c:\Users\Nath\Documents\Estudos\to-do-list
   ```
3. Instale dependências:
   ```bash
   npm install
   # ou
   yarn
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
5. Abra `http://localhost:5173` (porta padrão do Vite) no navegador.

## Build para produção
- Gerar assets otimizados:
  ```bash
  npm run build
  # ou
  yarn build
  ```
- Servir build localmente (opcional):
  ```bash
  npm run preview
  # ou
  yarn preview
  ```

## Estrutura do projeto (resumo)
- `src/`
  - `components/`    — Componentes React reutilizáveis
  - `pages/`         — Views / páginas
  - `assets/`        — Imagens e estilos
  - `main.jsx`       — Entrada da aplicação
- `public/`          — Arquivos estáticos
- `vite.config.js`   — Configuração do Vite
- `package.json`     — Scripts e dependências

## Boas práticas e lint/format
- Rodar linter antes de commits:
  ```bash
  npm run lint
  # ou
  yarn lint
  ```
- Seguir regras de commit e escrever mensagens claras.

## Fluxo de contribuição (rápido)
1. Fork do repositório.
2. Crie uma branch com nome descritivo:
   `feature/nome-da-feature` ou `fix/descricao`
3. Faça mudanças pequenas e testes locais.
4. Atualize README ou documentação quando relevante.
5. Abra um Pull Request explicando a mudança e como testar.
6. Responda a feedbacks e atualize o PR conforme necessário.

## Contato / Suporte
- Abra issues para bugs ou solicitação de melhorias.
- Incluir passos para reproduzir bugs e screenshots quando possível.

## Referência
Projeto baseado na aula utilizada como referência:
https://www.youtube.com/watch?v=LoYbN6qoQHA

(Use a gravação como base para a estrutura e implementação iniciais; adaptar conforme necessário.)


