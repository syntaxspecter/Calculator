const express = require('express'); 

const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome");
})

app.get('/myapi',(req,res)=>{
    res.send("My API");
    console.log(req.query.val);
})

app.listen(4000 , () =>{
    console.log("listening on port jaj");
})