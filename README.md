# Descrição Trabalho Prático de Angular - Galeria Fotos

Bootcamp FrontEnd - IGTI 2020

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Observação

Apesar de o curso fornecer o codigo fonte original aos alunos, procurei deixar o meu codigo, exibindo assim erros e acertos, coisas a melhorar, acho que transparência é um ponto importantíssimo para o profissional.

## Ambiente de Desenvolvimento

### Frontend

1. npm install para instalar as dependencias do projeto.

## Ambiente de Produção

1. Para visualizar o projeto rodando, basta acessar o link abaixo.

[link do trabalho!](https://fabi-igti-angular-trabalho.web.app/)

## Objetivos do Trabalho Prático

Exercitar os seguintes conceitos trabalhados no Módulo:

- Criar uma aplicação Angular.
- Criar componentes e templates.
- Utilizar data/event bindings.
- Utilizar diretivas estruturais.
- Estilizar componentes.

## Enunciado

Utilizando o Angular, construa um componente para exibir uma galeria de fotos.

## Atividades

Os alunos deverão desempenhar as seguintes atividades:

1. Crie uma aplicação Angular denominada galeria-fotos contendo dois componentes, o componente principal (AppComponent) e o componente GaleriaComponent.
2. GaleriaComponent deve possuir duas input properties:
   a. titulo, que é um título a ser exibido no topo do componente, do tipo string.
   b. fotos, que é um array strings correspondente às URLs das fotos a serem
   exibidas na galeria
3. O componente deve exibir uma foto por vez. Inicialmente ele exibe a primeira foto (primeira posição do array fotos). Abaixo da foto deve ter um conjunto de botões, para:
   a. Mostrar a primeira foto.
   b. Mostrar a foto anterior.
   c. Mostrar a próxima foto.
   d. Mostrar a última foto.
4. Ao lado dos botões de mudar foto, deve ser exibido um texto indicando a foto atual e o total de fotos, por exemplo: “foto 2 de 5”.
5. Os botões de mostrar a primeira foto e mostrar a foto anterior devem ficar
   desabilitados quando a foto atual já é a primeira. Da mesma forma, os botões de
   mostrar a próxima foto e mostrar a última foto devem ficar desabilitados quando
   estiverem na última foto.
6. Se a propriedade fotos for um array vazio (ou se a propriedade não for informada), nenhuma foto é exibida, em vez disso é exibida a mensagem “Nenhuma foto”. Note que os botões de mudar a foto e o indicador da foto atual também NÃO devem ser exibidos.
7. Defina uma altura máxima de 500px para a exibição da imagem (dica: use a
   propriedade css max-width).
8. No componente principal, AppComponent, utilize o GaleriaComponent em ao menos
   dois cenários: com duas ou mais fotos e com nenhuma foto.

## Dicas e Sugestões

1. Obtenha algumas fotos para testar sua galeria, você pode baixar de sites como:
   https://unsplash.com/.
2. Em HTML, a tag IMG é usada para exibir imagens, basta passar a url na propriedade src. Por exemplo, supondo que existe o arquivo src/assets/foto1.jpg em seu projeto, sua URL será “assets/foto1.jpg”. Note que também é possível utilizar uma URL externa ao seu projeto, por exemplo:
   “https://angular.io/assets/images/logos/angular/angular.png”
