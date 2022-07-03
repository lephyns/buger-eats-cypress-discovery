# O projeto                  

Este projeto foi criado com base no curso Cypress Discovery ministrado pelo professor <a href="https://www.linkedin.com/in/papitoio/">Fernando Papito</a>.<br>
As tecnologias utilizadas foram Node.js, Cypress e JavaScript.

Este projeto possui 2 suites que posteriormente poderão ser utilizadas como teste de regressão: Home e Signup.

- **Home:** Verifica se a aplicação BugerEats está online.

- **Signup:** Funcionalidade principal da aplicação onde foi criado os cenários de teste:

    - **CST01:** O usuário deve se tornar um entregador com sucesso;
    - **CST02:** Tentativa com CPF incorreto;
    - **CST03:** Tentativa com email incorreto;
    - **CST04:** CST04: Sete cenários de teste (validação de campos obrigatórios) através de uma constante (array de dados) onde criamos um loop (forEach).


## Instalar as dependências

Na pasta do projeto executar no terminal os seguintes comandos para instalar as dependências:

```
npm install    

$ npm run test             # Executa o script (package.json)                      
$ npx cypress open         # Abre a interface gráfica do Cypress

```

## Instalar as bibliotecas:

Foram adicionadas 2 bibliotecas neste projeto: Biblioteca Faker e <a href="https://www.npmjs.com/package/gerador-validador-cpf">Biblioteca CPF</a>.

- **Biblioteca faker:** Utilizada para gerar nomes e e-mails aleatoriamente.
No terminal executar o seguinte comando:

    ```
    $ npm install faker@5.5.3 --save-dev
    ```

- **Validador de CPF:** Utilizada para gerar CPFs válidos.
No terminal executar o seguinte comando:

    ```
    $ npm install gerador-validador-cpf --save
    ```

## Como executar o projeto

Para executar o projeto basta abrir o Prompt de Comando selecionar a pasta e executar o seguinte comando:

```
$ npx cypress open
```

A interface do Cypress será aberta após alguns segundos. Quando feito é só selecionar a suite (spec) e assistir a execução dos testes. 