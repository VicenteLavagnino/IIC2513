const app = require('./app');
const db = require('./models');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 3000;

db.sequelize
    .authenticate()
    .then(() => {
        console.log('La conexión a la base de datos ha sido establecida de manera exitosa');
        app.listen(PORT, (error) => {
            if (error) {
                return console.error("Error: ", error);
            }
            console.log(`Escuchando en el puerto ${PORT}`);
            return app;
        })
    })
    .catch((error) => { console.log('No ha sido posible conectarse a la base de datos: ', error); });