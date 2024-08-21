## Nome: `José Henrique Vieira Batista`

Para executar este projeto:

1. Entre pasta hotwheels-crud no terminal:

```
cd hotwheels-crud
```

2. Rode npm install para instalar as dependências do projeto:

```
npm install
```

3. E em seguida, npm start, para iniciar a execução do projeto.

```
npm start
```

Após execução do projeto, este é o resultado esperado no navegador:
![Gif mostrando o resultado esperado ao rodar este projeto](./resultado.gif)

## Introdução

Este projeto é uma aplicação CRUD básica para gerenciar uma lista de carros. Utiliza Create React App como base e inclui funcionalidades para adicionar, listar e remover carros. A navegação entre as páginas é gerenciada com React Router, e feedbacks visuais são fornecidos ao usuário para as ações de adicionar e remover carros.

## Componentes

Os componentes estão no diretório `./src/components` e eles possuem as seguintes características:

-   NavBar:

    -   Descrição: Este componente utiliza Link do React Router para exibir os links de navegação da aplicação. A sequência dos links é: Home, Sobre, Carros, Adicionar Carro.

-   CarList:

    -   `props`
        -   `cars`: um array contendo a lista de carros a ser exibida;
        -   `removeCar`: função callback que é chamada quando o botão "Excluir" é clicado para remover um carro da lista
    -   Descrição: Este componente renderiza a lista de carros e permite excluir itens. Inclui um link para acessar o formulário de adicionar carros.

-   CarForm:
    -   `props`
        -   `addCar`: função callback que é chamada quando o formulário é enviado para adicionar um novo carro.
    -   Descrição: Este componente contém um formulário com campos para Nome, Marca, Cor e Ano do carro. Permite adicionar um carro à lista.

## Feedback Visual

-   Adicionar Carro: Mensagem de sucesso exibida em verde ao adicionar um carro.
-   Remover Carro: Mensagem de sucesso exibida em vermelho ao remover um carro.

## Conclusão

Este projeto demonstra a construção de uma aplicação CRUD básica com React e React Router, oferecendo uma visão prática de como gerenciar o estado da aplicação e fornecer feedbacks visuais ao usuário. É um exemplo útil para o desenvolvimento de projetos mais complexos em ReactJS. Feito para trabalho da matéria de Desenvolvimento de Sistemas frontend da PUC-RS.
