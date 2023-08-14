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


##### Pasos para recuperar os dados

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

5. Defina os dados do novo campo "partner" em todas as tabelas para o "CODINSTALL" na tabela perfil. Este código é único para cada estabelecimento.
_Não esquece deste detalhe antes de inserir os dados de backup do novo estabelecimento, pois pode causar sérios danos ao banco de dados(é recomendável fazer uma cópia antes desta operação)_

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