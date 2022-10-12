const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
const path = require("path")

var cors = require('cors');
app.use(cors({"Access-Control-Allow-Origin": "http://localhost"}));

var cart=new Array()



app.listen(80 || process.env.PORT);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended : true }))
app.use(express.static(path.join(__dirname,"..\\client\\build")));
app.use(express.json());

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"..\\client\\build\\index.html"));
});

app.post('/register', function(request, response){
    
    fs.readFile(__dirname + "/userdata.json",(error,data)=>{
        data=JSON.parse(data);
        const email=request.body.email;
        const password=request.body.password;
        const name=request.body.name;
        const surname=request.body.surname;

        x=Date.now();
        console.log(email,password,name,surname,cart);
        const result1 = data.filter((item) => item.email === request.body.email);
        if(result1==""){
            if(password!="" && email!=""){
                data.push({id:x,email:email,password:password,name:name,surname:surname,cart:cart});
                fs.writeFile(__dirname+"/userdata.json",JSON.stringify(data),(error)=>{
                    const result = data.filter((item) => item.email === request.body.email)[0];
                    response.end(JSON.stringify({status:true,result}));
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
        const result2 = data.filter((item) => item.email === req.body.email && item.password === req.body.password );
        console.log(result2);
        if(result2!=""){
            const result = data.filter((item) => item.email === req.body.email )[0];
            delete result.password;
            res.end(JSON.stringify({status:true,result}));
        }
        else{
            res.end(JSON.stringify({status:false}));
        }
    })
}) ;

app.post('/products',(req,res)=>{
    fs.readFile(__dirname+"/products.json",(error,data)=>{
        data=JSON.parse(data);
        res.end(JSON.stringify({data}));
    })
});

app.post('/addcart',(req,res)=>{
  
    fs.readFile(__dirname+"/products.json",(error,data)=>{
        data=JSON.parse(data);
        let product = data.filter((item) => item.id === req.body.productId);
        
        fs.readFile(__dirname+"/userdata.json",(error,data)=>{
            data=JSON.parse(data);
            let users = data.filter((item) => item.id === req.body.userId);
            console.log(product);
            const x=users[0].cart[0];
            if(x===null)
            users[0]['cart'][0] = product[0];
            else{
                users[0]['cart'].push(product[0]);
            }
            fs.writeFile(__dirname+"/userdata.json",JSON.stringify(data),(error)=>{
                res.end(JSON.stringify({users}));
            })
        });

    });

});

app.post('/removecart',(req,res)=>{
    fs.readFile(__dirname+"/userdata.json",(error,data)=>{

        data = JSON.parse(data);
        const userData = data.filter(({id})=> req.body.UserId == id )[0];

        if(req.body.productId != null){ 
            userData.cart = userData.cart.filter(({id}) => req.body.productId != id);
            fs.writeFile(__dirname+"/userdata.json",JSON.stringify(data),(error)=>
                res.end(JSON.stringify({data}))
            );
        }
        else{   
            userData.cart = [];
            
            fs.writeFile(__dirname+"/userdata.json",JSON.stringify(data),(error)=>
                res.end(JSON.stringify({data}))
            );
        }    
    });
});
