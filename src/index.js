// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("ERROR : ", err);
      throw err;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is runing at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

/*
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants";
const app = express();
;(async () => {
      try{
            await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
            app.on("error", (err) => {
                  console.error("MongoDB connection error: ", err);
                  throw err;
            });
            app.listen(process.env.PORT, () => {
                  console.log(`Server is running on port ${process.env.PORT}`);
            });
      } catch(err){
            console.error('ERROR: ', err);
            throw err;
      }
})();

*/
