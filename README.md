API NodeJS + Express + Mongodb + TDD com Jest
===============================================

*Metodologia:* <br>
Trello com a metodologia Scrum para gerenciamento ágil do projeto. <br>

*Documentação:*
- Swagger utilizando a especificação Open API
- Formato de serialização utilizado é o YAML <br>
- [Documentação Online](https://app.swaggerhub.com/apis/jacksonn455/Documentacao_API/1.0.0)
- [Documentação Arquivo](https://github.com/jacksonn455/Challenge-BackEnd/blob/main/documentacaoAPI.yaml)


*Back-End:* <br>
- Arquitetura utilizada é Model-View-Controller (MVC)
- API utilizando Nodejs + Express + Mongodb <br>
- Desenvolvimento Orientado à Testes - TDD com Jest <br>
- Modelagem de banco de dados utilizando mongoose <br>
- Controllers para atualizar os modelos e suas visualizações <br>
- Gerenciando variáveis de ambiente utilizando .env <br>
- Criptografia utilizando bcrypt <br>
- Autenticação utilizando jwt (jsonwebtoken), com data de expiração <br>
- Funções assíncronas utilizando async / await <br>
- Métodos de requisição HTTP: GET, POST, PUT, DELETE
- Status code apropriado para cada chamada da API <br>
- Configuração de ambiente DEV, HML, PROD <br>
- Pratica de Clean Code segundo o livro "Código Limpo Habilidades Práticas do Agile Software" <br>

## Instalação

```bash
$ npm install
```

## Rodar

```bash
# development
$ nodemon -r dotenv/config .\app.js

# watch mode
$ npm start

# secure mode
$ npm run secure-mode
```

## Autor
 | [<img src="https://avatars1.githubusercontent.com/u/46221221?s=460&u=0d161e390cdad66e925f3d52cece6c3e65a23eb2&v=4" width=115><br><sub>@jacksonn455</sub>](https://github.com/jacksonn455) |
  | :---: |

--------------------
