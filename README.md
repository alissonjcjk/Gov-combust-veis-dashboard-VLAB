### Dashboard de Combustíveis - Setor de Transportes (V-Lab)
Este projeto é uma aplicação frontend moderna desenvolvida para o desafio técnico da V-Lab. O objetivo é fornecer aos gestores do setor de transportes uma visão gerencial clara sobre o consumo e preço de combustíveis da frota nacional, seguindo rigorosamente o Padrão Digital de Governo (DSGOV).

## Diferenciais do Projeto
Arquitetura Facade: Implementação do padrão Facade para abstrair a complexidade do estado e serviços, garantindo componentes focados apenas na apresentação (UI).

Tailwind CSS v4: Utilização da versão mais recente do framework para uma estilização performática e fiel ao Design System do Governo Federal.

Alta Performance com Vite: Build e desenvolvimento otimizados utilizando o motor Vite/Esbuild integrado ao Angular 21.

Visualização de Dados: Gráficos interativos para análise de evolução de preços e consumo regional utilizando Chart.js.

## Tecnologias Utilizadas
Framework: Angular 21

Linguagem: TypeScript

Estilização: Tailwind CSS (Configurado com cores oficiais #1351B4, #0c326f).

Gerenciamento de Estado: Pattern Facade com Observables (RxJS).

Gráficos: Ng2-charts / Chart.js.

Mock de API: JSON Server.

## Estrutura do Projeto
O projeto segue uma arquitetura modular e escalável:

Plaintext

src/app/
├── core/           # Serviços globais, Modelos e Facades (Lógica de Negócio)
├── shared/         # Componentes reutilizáveis (Header, Cards, Botões - Padrão DSGOV)
└── features/       # Módulos principais (Dashboard, Consulta, Detalhes)
 Como Executar o Projeto
Clonar o repositório:

Bash

git clone https://github.com/SEU_USUARIO/gov-combustiveis-dashboard.git
cd gov-combustiveis-dashboard
Instalar dependências:

Bash

npm install
Executar Aplicação + API Mock: Este comando inicia simultaneamente o servidor Angular e o JSON Server:

Bash

npm run dev
Acesse o Dashboard em: http://localhost:4200

API Mock rodando em: http://localhost:3000

## Padrão Digital de Governo
A interface foi construída seguindo as diretrizes do Gov.br, incluindo:

Uso da paleta de cores oficial.

Tipografia Montserrat/Rawline recomendada.

Acessibilidade e navegação clara através de Breadcrumbs.

Desenvolvido por Alisson da Silva Bernadino. Candidato à vaga de Estágio/Graduação na V-Lab.

### Screenshots
(imagens aqui)
