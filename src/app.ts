import express from "express";
import mongoose from "mongoose";
import userRoutes from './route/useRoute'


const app = express();
const port = 3000;


app.use(express.json());

app.use('/users', userRoutes);

async function ConnectDatabase(){
    try{
        await mongoose.connect(
       "mongodb+srv://daniel11moraispires:b9Awa2hqUVHfykDH@cluster0.xt73b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("database connection successfully");
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(`failed to connect database ${error}`);
  }
}
ConnectDatabase(); 


