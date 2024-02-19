const express=require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const schema=require("./schema/schema");
const connectDatabase=require("./helpers/database/connectDatabase");
const cors=require("cors");

const app=express();
connectDatabase();
const handler=createHandler({schema});

app.use(cors());

app.get("/",(req, res, next)=>{
    res.send({
        success:"true",
        message:"Welcome to Server."
    })
});

app.use("/graphql",handler);

app.listen(4000, ()=>{
    console.log("Server start on 4000 port.");
})