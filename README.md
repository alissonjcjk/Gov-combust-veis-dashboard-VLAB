# 📊 Dashboard de Combustíveis — Setor de Transportes (V-Lab)

Este projeto é uma aplicação frontend moderna desenvolvida como parte do desafio técnico da V-Lab para candidatos à vaga de Estágio/Graduação.

O objetivo é fornecer aos gestores do setor de transportes uma visão gerencial clara e confiável sobre o consumo e o preço de combustíveis da frota nacional, seguindo rigorosamente o Padrão Digital de Governo (DSGOV).

#### ✨ Diferenciais do Projeto

Arquitetura Facade
Implementação do padrão Facade para abstrair a complexidade de estado e serviços, mantendo os componentes focados exclusivamente na camada de apresentação (UI), conforme boas práticas do Angular.

Tailwind CSS v4
Utilização da versão mais recente do framework para uma estilização performática, consistente e fiel ao Design System do Governo Federal.

Alta Performance com Vite
Build e ambiente de desenvolvimento otimizados utilizando Vite / Esbuild, integrados ao Angular 21.

Visualização de Dados
Gráficos interativos para análise de evolução de preços e consumo regional, utilizando Chart.js.

#### 🧰 Tecnologias Utilizadas

Framework: Angular 21

Linguagem: TypeScript

Estilização: Tailwind CSS (cores oficiais #1351B4, #0C326F)

Gerenciamento de Estado: Pattern Facade com Observables (RxJS)

Gráficos: Ng2-charts / Chart.js

Mock de API: JSON Server

#### 🗂️ Estrutura do Projeto

O projeto segue uma arquitetura modular e escalável, separando claramente responsabilidades:

src/app/
├── core/        # Serviços globais, modelos e facades (lógica de negócio)
├── shared/      # Componentes reutilizáveis (Header, Cards, Botões – DSGOV)
└── features/    # Módulos principais (Dashboard, Consulta, Detalhes)

▶️ Como Executar o Projeto
1️⃣ Clonar o repositório
git clone https://github.com/SEU_USUARIO/gov-combustiveis-dashboard.git
cd gov-combustiveis-dashboard

2️⃣ Instalar dependências
npm install

3️⃣ Executar aplicação + API mock
npm run dev


Aplicação: http://localhost:4200

API Mock: http://localhost:3000

#### 🇧🇷 Padrão Digital de Governo (DSGOV)

A interface foi construída seguindo as diretrizes do Gov.br, incluindo:

Uso da paleta de cores oficial

Tipografia recomendada (Montserrat / Rawline)

Navegação clara com breadcrumbs

Atenção à acessibilidade e usabilidade

#### 👤 Autor

Alisson da Silva Bernardino
Candidato à vaga de Estágio/Graduação — V-Lab

#### 📸 Screenshots

(Imagens da aplicação em funcionamento serão adicionadas aqui)
