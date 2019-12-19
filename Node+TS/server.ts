import express from "express";
import {DataStore} from "./data/data";
console.log(DataStore);
const app=express();
app.get('/',(req,res)=>{
    res.send(JSON.parse(JSON.stringify(DataStore.posts)))
})
app.post('/',(req,res)=>{
    res.send("返回成功2")
})
app.listen(process.env.port||8081,()=>{
    console.log("服务启动2了.fdferererer.sdsd.erersdsd")
})
