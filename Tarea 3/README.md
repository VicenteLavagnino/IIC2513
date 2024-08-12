[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/cb5SOAVY)
# Tarea 3 :construction:

* :pencil2: **Nombre:** Vicente Antonio Lavagnino Gatica
* :pencil2: **Correo:** vicente.lavagnino@uc.cl

## Código :symbols:

### :warning: Funcionalidades implementadas y no implementadas

Se implementan todas las funciones.


## Ejecución

```
# Para correr frontend (desde directorio principal)
cd frontend/
yarn dev

# Para correr backend (desde directorio principal)
cd backend/
yarn dev
```

## Postgres
```
# Indica los comandos de terminal necesarios para inicializar la base de datos acá

1. Como inicializar psql:
brew service start postgresql@14

2. Como crear el usuario de postgres
createuser iic2513

3. Como crear la base de datos
createdb iic2513t3

4. Como crear la clave del usuario
alter user iic2513 with encrypted password 'pwd';
alter user iic2513 createdb;

5. Como conectarse a la base de datos
psql -d iic2513t3 -U iic2513


```

## Entorno
Una vez creada la base de datos e inicializado psql, se debe crear un archivo `.env` en el directorio `backend` con la siguiente estructura:



```
DB_USERNAME=iic2513
DB_PASSWORD=pwd
DB_NAME=iic2513t3
DB_HOST=127.0.0.1

# Escucharemos el puerto 3000
```
## Sequelize

Deberas indicar los comandos de terminal necesarios para generar los modelos y las migraciones de la base de datos.
```
cd backend/
yarn add sequelize pg pg-hstore
yarn add sequelize-cli --dev
yarn sequelize-cli init
```
### User
```
yarn sequelize-cli model:generate --name User --attributes username:string
```
### Entry
```
yarn sequelize-cli model:generate --name Entry --attributes title:string,body:text,date:date,belongsTo:string
```

## Migraciones
```
yarn sequelize-cli db:migrate
```

### Seeds
```
yarn sequelize-cli seed:generate --name demo-user
yarn sequelize-cli seed:generate --name demo-entry

```

## Bibliografia
```
Presentaciones de Clases
[Ayudantía Mi Primera API](https://github.com/IIC2513/Mi-primera-API)
[Koa Documentation](https://github.com/koajs/router)

Se utilizó Copilot para la construccion de rutas 

```