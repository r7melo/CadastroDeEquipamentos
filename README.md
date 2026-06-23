# Cadastro de Equipamentos

Este é um sistema completo de gerenciamento (CRUD) de equipamentos organizado por setores, desenvolvido em **React** e **Vite**. O projeto foi estruturado seguindo boas práticas de desenvolvimento, incluindo os **Princípios SOLID** e o padrão **Repository (ORM no Frontend)**, permitindo alternar a persistência de dados de forma transparente.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com as seguintes tecnologias e dependências principais:

*   **[React 19](https://react.dev/)**: Biblioteca para construção de interfaces SPA.
*   **[Vite 8](https://vite.dev/)**: Ferramenta de build ultra rápida para o frontend.
*   **[Supabase JS Client SDK](https://supabase.com/docs/reference/javascript/introduction)**: Cliente para integração em tempo real com o banco de dados na nuvem.
*   **Bootstrap 5.3 & React-Bootstrap**: Framework CSS utilizado para futura estilização responsiva.
*   **LocalStorage API**: Utilizada para armazenamento local em modo offline.

---

## 🏗️ Arquitetura e Princípios SOLID

O projeto aplica padrões arquiteturais para garantir um código limpo, testável e manutenível:
*   **Padrão Repository (Camada ORM)**: Cria uma abstração entre a interface visual do usuário (React) e a fonte de dados (banco de dados). 
*   **Princípio de Inversão de Dependências (D do SOLID)**: Os componentes gráficos dependem de um contrato abstrato (`IEquipamentoRepository`) em vez de se acoplarem diretamente ao LocalStorage ou ao Supabase.
*   **Fábrica (Factory)**: A classe `repositories/index.js` instancia dinamicamente o repositório correto baseado no arquivo de configuração `.env`.

---

## 📁 Estrutura de Pastas e Arquivos

```text
CadastroDeEquipamentos/
├── database.sql             # Script SQL de criação de tabelas e políticas RLS no Supabase
├── netlify.toml             # Configuração automática para hospedagem no Netlify
├── .env                     # Variáveis de ambiente (credenciais de banco e provedores)
└── src/
    ├── components/
    │   ├── Cards/           # Exibição visual de cada equipamento cadastrado (clicável)
    │   ├── Equipamento/     # Formulário de cadastro de novos equipamentos
    │   ├── EquipamentoModal/# Modal popup para visualizar, atualizar e excluir dados [CRUD]
    │   └── ListaEquipamentos/# Listagem inteligente e conexão de estado dos componentes
    ├── repositories/        # Camada de Dados (SOLID / ORM)
    │   ├── IEquipamentoRepository.js  # Definição do contrato base
    │   ├── LocalStorageEquipamentoRepository.js # Implementação local offline
    │   ├── SupabaseEquipamentoRepository.js     # Implementação em nuvem online
    │   └── index.js         # Factory Loader (Inversão de Dependência)
    ├── supabaseClient.js    # Inicializador seguro da conexão do Supabase
    ├── App.jsx              # Componente raiz do app
    ├── index.css            # Estilização global com suporte automático a modo escuro
    └── main.jsx             # Inicialização do DOM
```

---

## ⚙️ Funcionalidades Atuais (CRUD Completo)

1.  **Criar (`Create`)**: O formulário permite cadastrar novos equipamentos definindo Nome e Setor, enviando-os para a fonte ativa de dados.
2.  **Ler (`Read`)**: Listagem responsiva organizada em uma grade de cards interativos com efeitos dinâmicos ao passar o mouse.
3.  **Atualizar (`Update`)**: Ao clicar em qualquer card, abre-se um modal popup com os dados pré-preenchidos para alteração rápida.
4.  **Excluir (`Delete`)**: Opção no modal para deletar registros do banco de dados após uma janela de confirmação.

---

## 🚀 Como Configurar e Executar

### 1. Clonagem e Instalação
No terminal do projeto, instale as dependências:
```bash
npm install
```

### 2. Configurando o Banco de Dados (Supabase)
1. Crie um projeto gratuito em [supabase.com](https://supabase.com/).
2. Copie o script contido em **[database.sql](file:///c:/Users/Romario%20Melo/Documents/CadastroDeEquipamentos/database.sql)** e execute-o no **SQL Editor** do painel do Supabase para gerar as tabelas e habilitar as permissões de acesso (RLS).
3. Copie as chaves do seu projeto (**Project URL** e **anon public key**).

### 3. Configurando as Variáveis de Ambiente
Crie ou edite o arquivo **[.env](file:///c:/Users/Romario%20Melo/Documents/CadastroDeEquipamentos/.env)** na raiz do projeto:

```env
VITE_SUPABASE_URL=SUA_URL_DO_SUPABASE
VITE_SUPABASE_ANON_KEY=SUA_CHAVE_ANON_DO_SUPABASE

# Alternar fonte de dados: 'supabase' para banco online ou 'localstorage' para local offline
VITE_DATA_SOURCE=supabase
```

### 4. Executando em Desenvolvimento
Para rodar a aplicação localmente:
```bash
npm run dev
```
Acesse `http://localhost:5173` no seu navegador.
