[React Badge]: https://img.shields.io/badge/React-61dafb?style=for-the-badge&logo=react&labelColor=000
[Vite Badge]: https://img.shields.io/badge/Vite-646cff?style=for-the-badge&logo=vite&labelColor=000
[Tailwind Badge]: https://img.shields.io/badge/Tailwindcss-06b6d4?style=for-the-badge&logo=tailwindcss&labelColor=000
[Zod Badge]: https://img.shields.io/badge/Zod-3e67b1?style=for-the-badge&logo=zod&labelColor=000
[Shadcn Badge]: https://img.shields.io/badge/Shadcn%2Fui-ffffff?style=for-the-badge&logo=shadcnui&labelColor=000
[Typescript Badge]: https://img.shields.io/badge/Typescript-3178c6?style=for-the-badge&logo=typescript&labelColor=000

<h1 align="center" style="font-weight: bold;">Calculadora de IMC</h1>

<div align="center">

![react][React Badge]
![typescript][Typescript Badge]
![tailwind][Tailwind Badge]
![zod][Zod Badge]
![shadcn][Shadcn Badge]
![vite][Vite Badge]

</div>

Uma simples calculadora de IMC (Índice de Massa Corporal). O objetivo é fornecer uma interface amigável para o cálculo do IMC com base no peso e altura do usuário, além de garantir uma validação de dados eficiente com Zod e uma experiência de usuário agradável. Este projeto foi criado para praticar o uso de React com TypeScript, TailwindCSS e Zod.

<p align="center">
  <img src="./.github/demo.gif" alt="Captura de Tela" width="320px">
</p>

## Conteúdo

- [Funcionalidades](#white_check_mark-funcionalidades)
- [Tecnologias Utilizadas](#computer-tecnologias-utilizadas)
- [Instalação](#arrow_down-instalação)
  - [Pré-requisitos](#pré-requisitos)
  - [Como rodar o projeto](#como-rodar-o-projeto)

## :white_check_mark: Funcionalidades

- **Cálculo de IMC:** Permite que o usuário insira seu peso e altura para calcular automaticamente o IMC.
- **Classificação do IMC:** A calculadora exibe a classificação do IMC de acordo com os dados inseridos.
- **Validação de Entradas:** As entradas de peso e altura são validadas em tempo real com a biblioteca Zod.
- **Interface Responsiva:** A interface foi projetada para funcionar bem em dispositivos móveis e desktop.
- **Seletor de Tema:** Opção para selecionar tema claro ou escuro.

## :computer: Tecnologias Utilizadas

- React
- TypeScript
- TailwindCSS
- Shadcn/ui
- Zod
- Vite

## :arrow_down: Instalação

### Pré-requisitos

- [NodeJs](https://nodejs.org/en/download/current)

- [Git](https://git-scm.com/downloads)

### Como rodar o projeto

1. Utilizando o terminal, clone o repositório:

   ```bash
   git clone https://github.com/willvbgomes/calculadora-imc.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd calculadora-imc
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute o projeto:

   ```bash
   npm run dev
   ```

5. O projeto estará disponível em http://localhost:5173.
