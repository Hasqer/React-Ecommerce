const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
const path = require("path")

app.listen(80);
app.use(bodyParser.json())
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname,"..\\client\\build")));
app.use(express.json());

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"..\\client\\build\\index.html"));
})

app.post('/register', function(request, response){
    
    fs.readFile(__dirname + "/userdata.json",(error,data)=>{
        data=JSON.parse(data);
        const email=request.body.email;
        const password=request.body.password;
        x=Date.now();
        console.log(email,password);
        const resualt1 = data.filter((item) => item.email === request.body.email);
        if(resualt1==""){
            if(password!="" && email!=""){
                data.push({id:x,email:email,password:password});
                fs.writeFile(__dirname+"/userdata.json",JSON.stringify(data),(error)=>{
                    const resualt = data.filter((item) => item.email === request.body.email)[0];
                    response.end(JSON.stringify({status:true,resualt}));
                })
            }
            else{
                response.end(JSON.stringify({status:false}));
            }
        }
        else{
            response.end(JSON.stringify({status:"unsucces"}));
        }
    })
  
});

app.post('/login',(req,res)=>{
    fs.readFile(__dirname+"/userdata.json",(error,data)=>{
        data=JSON.parse(data);
        const resualt2 = data.filter((item) => item.email === req.body.email && item.password === req.body.password );
        console.log(resualt2);
        if(resualt2!=""){
            const resualt = data.filter((item) => item.email === req.body.email && item.password === req.body.password )[0];
            res.end(JSON.stringify({status:true,resualt}));
        }
        else{
            res.end(JSON.stringify({status:false}));
        }
    })
}) ;

