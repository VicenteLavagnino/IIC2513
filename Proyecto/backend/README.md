# Web_Ones_Fake_backend

https://merror-backend.onrender.com/

https://documenter.getpostman.com/view/26595916/2sA3XQh2Cf

## Documentación de la Base de Datos :symbols:

### Postgres
```
# Asumiendo que postgres ya está iniciado

1. Instalar dependecias
yarn install

2. Como crear el usuario de postgres
createuser iic2513P

5. Como crear la clave del usuario
alter user iic2513P with encrypted password 'iic2513PW';
alter user iic2513P createdb;

4. Como crear la base de datos
createdb iic2513p

5. Como conectarse a la base de datos
psql -d iic2513p -U iic2513P

```

## Entorno
Una vez creada la base de datos e inicializado psql, se debe crear un archivo `.env` en la raíz con la siguiente estructura:

```
DB_USERNAME=iic2513P
DB_PASSWORD=iic2513PW
DB_NAME=iic2513p
DB_HOST=localhost
JWT_SECRET='jwt_secret_web_ones'
```
## Sequelize

Deberas indicar los comandos de terminal necesarios para generar los modelos y las migraciones de la base de datos.
```
yarn add sequelize pg pg-hstore
yarn add sequelize-cli --dev
yarn sequelize-cli init
```
### Levantar BBDD y Migraciones
```
yarn sequelize-cli db:create
yarn sequelize-cli db:migrate
yarn sequelize-cli db:seed:all

```

