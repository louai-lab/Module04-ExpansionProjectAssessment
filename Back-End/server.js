import express from 'express'
// import cors from cors
import dotenv from "dotenv";
import sequelize from './config/dbConnection.js';

import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js';

dotenv.config()

const app = express();
app.use(express.json());
// app.use(cookieParser());


try {
    await sequelize.authenticate();
    console.log("connection established!"); 
  } catch (error) {
    console.log("unable to connect!");
  }


  app.use("/users", userRoutes);
  app.use("/products", productRoutes);


  app.listen(process.env.PORT, () => {
    console.log("listening on port: " + process.env.PORT);
  });

  // sequelize.sync({ alter: true })
  // .then(() => {
  //   console.log('Model synchronized successfully.');
  // })
  // .catch((error) => {
  //   console.error('Error synchronizing model:', error);
  // });

