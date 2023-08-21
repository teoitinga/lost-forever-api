# Lost - Sistema de Gerenciamento de débitos
##### _Sistema de Gerenciamento de débitos_

#### Node Version: v12.22.12
#### Npm version: 6.14.16

##### Funções do Sistema

- 1. Registrar compras(Users: todos)
- 2. Registrar pagamentos(Users: todos, porém os usuários MASTER deverão confirmar posteriormente)
- 3. Listar débitos atuais do cliente
- 4. Buscar compras realizadas pelo cliente
- 5. Analisar potencial de vendas
- 6. Dados de compras total e extratificada por dia, e usuário


##### Passos para recuperar os dados

1. Criar banco de dados
```sh
yarn sequelize db:create
```

2. importa os dados via query
- Exceuta a query do backup fornecido
- agora que já tem os dados originais so sistema lost siga o próximo passo

3. executa migrate
```sh
yarn sequelize db:migrate
```

4. Roda o script sql na pasta script;
 

##### Passos para adicionar novos dados de um outro banco de dados

##### é importante observar que já não se deve fazer mudanças no banco dde dados, somente importar os dados
1. Obtenha os dados no formato insert into...values...
- após into table insira na mesma ordem as colunas desejadas.(adjustdb.sql - recovery p01).
- Substitua o trecho da coluna "INSERT INTO..." até a keyword "VALUES"
- Esecute o script;
- Repita esta operação para as tabelas: persona, compra e detalhecompra.
- o Banco de dados está pronto para uso.

2. 

##### Criando a estrutura padrão de projeto node
```sh
npm init
```

##### Instaldndo biblioteca sequelize e mysql
```sh
yarn sequelize mysql2 sequelize-cli
```

##### Instalando biblioteca para referencia de dados
```sh
npm install dotenv
```

##### criando o ambiente para conexão com o banco de dados
```sh
yarn sequelize init
```
##### Criando a aplicação
```sh
yarn add express dotenv cors consign compression body-parser
```

##### Implementando o middleware e rotas de autenticação
```sh
npm install jsonwebtoken bcryptjs --save
```

##### Gerenciamento de status http
```sh
npm install http-status-codes --save
```
    
##### Avaliar esta lib
- express-validator