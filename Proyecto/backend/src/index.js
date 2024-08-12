const app = require('./app.js') ;
const db = require('./models') ;
const dotenv = require('dotenv') ;

dotenv.config();

const PORT = process.env.PORT || 3000;

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(PORT, (err) => {
      if (err) {
        return console.error('Unable to start the server:', err);;
      }
      console.log(`Server is running on port ${PORT}`);
      return app;
    }); 
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });