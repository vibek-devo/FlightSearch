const express=require("express"); 

const{PORT}=require('./config/serverconfig');

const SetupAndStart=async()=>{

    const app=express();

    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
        console.log(process.env);
    });
}

SetupAndStart();