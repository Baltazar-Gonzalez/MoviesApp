
# MediaApp
MediaApp es una aplicación web desarrollada con ReactJS, que permite acceder a información de miles de peliculas y series con cada busqueda. Entre las funciones principales de la aplicación se encuentran listas ordenadas de peliculas/series, funcionalidad de busqueda, información detallada de peliculas/series y la creación de usuarios capaces de crear sus listas de favoritos.


# Instrucciones de despliegue
Guia para desplegar de manera local la aplicación paso a paso

## 1- Instalación de dependencias
Una vez clonado el repositorio, es necesario ingresar a los directorios '/Frontend' y '/Backend' y instalar las dependencias con el comando 'npm install' o 'yarn install'

## 2- Conexión a la Base de datos
Para el correcto funcionamieno de la aplicación, es necesario pasar *variables de entorno* en el directorio '/Backend', preferiblemente por medio de un archivo .env 

Estas variables son:

```javascript
KEY=apikey
SECRET=secret
POSTGRES_URL=databaseurl
```

**KEY**: key generada en el sitio de la API [The Movie Database](https://www.themoviedb.org/)

**SECRET**: cadena de caracteres secreta que se utiliza para firmar y verificar la autenticidad de los tokens en JSON WEB TOKENS

**POSTGRES_URL**: url de la base de datos generada por la pagina donde la creemos (railway, vercel, etc)

### Creación de Base de Datos PostgreSQL de manera local
En este caso en necesario instalar [PostgresSQL](https://www.postgresql.org/) y seguir las instrucciones del ejecutable.

Luego debe crear la base de datos con el comando psql (o el medio que estime conveniente) seguido del nombre del usuario que utilizarás para conectarte al servidor PostgreSQL y la opción -c para especificar un comando a ejecutar. 

```postgresql
psql -U postgres -c "CREATE DATABASE nombre_de_la_base_de_datos;"
```

Para finalizar es necesario cambiar los parametros de sequelize en el archivo '/Backend/database/database.js' 

```javascript
export const sequelize = new Sequelize(nombredb, usuario, contraseña, {
  host: 'localhost',
  dialect: 'postgres',
})
```

**nombredb**: El nombre asignado a la base de datos

**usuario**: El usuario con el cual vamos a acceder a la base de datos

**contraseña**: La contraseña del usuario

## 3- Ejecutar Frontend y Backend
Finalmente es necesario iniciar la API(backend) y la interfaz de usuario(Frontend). Para esto debemos acceder al directorio '/Backend' y ejecutar el comando 'npm run dev'.

Luego de iniciado el backend, se debe aceder al directorio '/Frontend' y ejecutar el mismo comando 'npm run dev'.

Con esto la aplicación se desplegara de manera local correctamente
