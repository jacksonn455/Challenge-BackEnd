NodeJS challenge
===============================================

*Metodologia:* <br>
Trello com a metodologia Scrum para gerenciamento do projeto. <br>

*Back-End:* <br>
- API utilizando Nodejs + Express + Mongodb <br>
- Modelagem de banco de dados utilizando mongoose <br>
- Controllers para atualizar os modelos e suas visualizações <br>
- Gerenciando variáveis ambiente utilizando .env <br>
- Criptografia utilizando bcrypt <br>
- Autenticação utilizando jwt (jsonwebtoken), com data de expiração <br>
- Funções assíncronas utilizando async / await <br>
- Status code apropriado para cada chamada da API <br>
- Configuração de ambiente DEV, HML, PROD <br>
- Pratica de Clean Code segundo o livro "Código Limpo Habilidades Práticas do Agile Software" <br>

*Executar:*
Para rodar a aplicação utilize o comando: npm install, e depois nodemon -r dotenv/config .\app.js <br>

*Rotas:* <br>
POST: http://localhost:7001/users/create <br>
body JSON: {"email":"jacksonmagnabosco@hotmail.com", "password":"renner@2022"} <br>
 ![](https://github.com/jacksonn455/Challenge-BackEnd/blob/main/imagens/jwt%2Bbcrypt.png) <br>

POST: http://localhost:7001/ <br>
header: auth: *************** <br>
![](https://github.com/jacksonn455/Challenge-BackEnd/blob/main/imagens/jwt.png) <br>

*Configuração de ambiente:* <br>
![](https://github.com/jacksonn455/Challenge-BackEnd/blob/main/imagens/ambiente.png) <br>

*Mongo:* <br>
![](https://github.com/jacksonn455/Challenge-BackEnd/blob/main/imagens/bcrypt.png) <br>

## Autor
 | [<img src="https://avatars1.githubusercontent.com/u/46221221?s=460&u=0d161e390cdad66e925f3d52cece6c3e65a23eb2&v=4" width=115><br><sub>@jacksonn455</sub>](https://github.com/jacksonn455) |
  | :---: |

--------------------
