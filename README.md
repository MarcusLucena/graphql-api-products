## Description


### Crie uma api em Node.js + GraphQL que retorne estes dados. Você poderá armazená-lo onde preferir, podendo até manter o arquivo localmente, desde que seja possível obter a lista como resposta dessa API.


### Requisitos Funcionais (RF)

**RF1: Recuperação de Produtos**
- O sistema deve fornecer um endpoint para recuperar todos os produtos.
- O sistema deve fornecer um endpoint para recuperar um único produto pelo seu código.
- Se um produto não for encontrado pelo seu código, o sistema deve retornar `null`.

**RF2: Módulo de Produtos**
- O sistema deve definir um `ProductsModule` que forneça o `ProductsService` e o `ProductsResolver`.

**RF3: Modelo de Produto**
- O sistema deve definir um modelo `Product` com as seguintes propriedades:
    - `code` (string)
    - `name` (string)
    - `price` (number)

### Requisitos Não Funcionais (RNF)

**RNF1: Testes**
- O sistema deve incluir testes unitários para o `ProductsResolver` para garantir que ele retorna os dados corretos.
- O sistema deve incluir testes unitários para o `ProductsModule` para garantir que ele está definido e fornece os serviços e resolvers necessários.
- O sistema deve incluir testes unitários para o modelo `Product` para garantir que ele está definido e pode ser instanciado corretamente.

**RNF2: Qualidade do Código**
- O sistema deve aderir às regras do ESLint para manter a qualidade e consistência do código.

**RNF3: Documentação**
- O sistema deve incluir um arquivo `README.md` com instruções sobre como configurar, executar e testar o projeto.

**RNF4: Framework**
- O sistema deve usar o framework NestJS para construir a aplicação do lado do servidor.

## Configuração do projeto

```bash  
$ npm install```  
  
## Compile and run the project  
  
```bash  
# desenvolvimento  
$ npm run start  
  
# modo de escuta  
$ npm run start:dev  
  
# producão 
$ npm run start:prod  
```  

## Rodando os testes

```bash  
# teste de unidade 
$ npm run test   
  
# test coverage  
$ npm run test:cov  
```  

## Deployment


Quando estiver pronto para implantar seu aplicativo NestJS na produção, há algumas etapas importantes que você pode seguir para garantir que ele seja executado da forma mais eficiente possível. Confira a [documentação de implantação](https://docs.nestjs.com/deployment) para obter mais informações.

Se estiver procurando uma plataforma baseada em nuvem para implantar seu aplicativo NestJS, confira [Mau](https://mau.nestjs.com), nossa plataforma oficial para implantar aplicativos NestJS na AWS. Mau torna a implantação direta e rápida, exigindo apenas algumas etapas simples:

```bash  
$ npm install -g mau$ mau deploy```  
  
Com o Mau, você pode implantar seu aplicativo em apenas alguns cliques, permitindo que você se concentre na criação de recursos em vez de gerenciar a infraestrutura.

```

## Para testar o GraphQL [ Playground ]

* http://localhost:3000/graphql
