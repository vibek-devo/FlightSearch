const express=require("express"); 
const bodyparser=require("body-parser");
const CityRepository=require('./repository/city-repository');

const{PORT}=require('./config/serverconfig');

const SetupAndStart=async()=>{

    const app=express();

    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));

    app.listen(PORT,async()=>{
        console.log(`server started at ${PORT}`);
        // await City.create({
        //     name:"New Delhi",
        // })
        const repo=new CityRepository();
        repo.CreateCity({name:"New Delhi"});
    });
}

SetupAndStart();