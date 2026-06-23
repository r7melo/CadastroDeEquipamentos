# Cadastro de Equipamentos

Este projeto é uma aplicação web simples desenvolvida em **React** e **Vite** para o cadastro e listagem de equipamentos organizados por setores. A aplicação utiliza o **LocalStorage** do navegador para persistir os dados localmente de forma simples e rápida.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias e dependências principais:

*   **[React 19](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces de usuário.
*   **[Vite 8](https://vite.dev/)**: Ferramenta de build rápida e moderna para o ecossistema frontend.
*   **[React Router Dom 7](https://reactrouter.com/)**: Biblioteca para gerenciamento de rotas e navegação na aplicação.
*   **[Bootstrap 5.3](https://getbootstrap.com/) & [React-Bootstrap](https://react-bootstrap.netlify.app/)**: Bibliotecas de estilos CSS para estruturação de componentes e layouts responsivos.
*   **LocalStorage API**: API nativa do navegador para persistência de dados sem necessidade de um banco de dados externo no momento.

---

## 📁 Estrutura de Pastas e Arquivos

Abaixo está detalhada a organização do diretório `src` do projeto:

```text
src/
├── assets/                  # Arquivos de mídia estática (ex: imagens, logos)
├── components/              # Componentes reutilizáveis do sistema
│   ├── Cards/               # Componente visual para exibir cada equipamento cadastrado
│   │   ├── Card.css         # Estilização local do card
│   │   └── Index.jsx        # Estrutura do card
│   ├── Equipamento/         # Formulário para cadastro de novos equipamentos
│   │   └── Index.jsx        # Formulário com manipulação de estado (inputs de Nome e Setor)
│   └── ListaEquipamentos/   # Componente responsável por ler do LocalStorage e listar os cards
│       └── Index.jsx        # Lógica de sincronização com o estado do LocalStorage
├── pages/                   # Páginas da aplicação
│   ├── Home/                # Página principal (Dashboard)
│   │   ├── Home.css         # Estilos da página Home
│   │   └── Index.jsx        # Orquestra os componentes de cadastro e listagem
│   └── Other/               # Pasta reservada para futuras páginas adicionais
├── App.css                  # Estilos globais do App
├── App.jsx                  # Componente base que encapsula a página Home
├── index.css                # Estilização global do projeto
├── main.jsx                 # Ponto de entrada que inicializa a aplicação no DOM
└── routes.jsx               # Configuração inicial de rotas (rotas de Home, Sobre e Usuário)
```

---

## ⚙️ Funcionalidades Atuais

1.  **Formulário de Cadastro (`Equipamento/Index.jsx`)**:
    *   Permite ao usuário inserir o **Nome** (campo de texto) e o **Setor** (campo numérico).
    *   Valida e submete os dados, adicionando-os a uma lista no LocalStorage sob a chave `'equipamentos'`.
    *   Dispara um callback (`onSave`) para a página mãe notificar a lista de que um novo item foi adicionado.

2.  **Lista de Equipamentos (`ListaEquipamentos/Index.jsx`)**:
    *   Recupera a lista de equipamentos atualizada diretamente do `localStorage` sempre que a propriedade `reload` é alterada.
    *   Mapeia cada item cadastrado e renderiza um componente `Card`.

3.  **Exibição em Cards (`Cards/Index.jsx`)**:
    *   Apresenta de forma clara o nome do equipamento e o número correspondente do setor de forma organizada.

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para baixar as dependências e iniciar o servidor local:

### 1. Pré-requisitos
*   [Node.js](https://nodejs.org/) instalado na sua máquina.

### 2. Instalação das Dependências
No terminal do seu projeto, execute:
```bash
npm install
```

> [!NOTE]
> Se você receber um erro no PowerShell relacionado à política de execução de scripts (`PSSecurityException`), execute o seguinte comando no PowerShell como administrador ou no escopo do seu usuário para habilitar a execução de scripts locais:
> ```powershell
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
> ```

### 3. Execução em Desenvolvimento
Para rodar a aplicação em modo de desenvolvimento, use:
```bash
npm run dev
```

Abra o endereço exibido no terminal (geralmente `http://localhost:5173`) no seu navegador.

### 4. Build de Produção
Para compilar e otimizar a aplicação para publicação em produção:
```bash
npm run build
```
O build otimizado será gerado na pasta `dist/`.
