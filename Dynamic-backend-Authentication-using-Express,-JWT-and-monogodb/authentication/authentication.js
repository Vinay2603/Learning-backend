const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = '123456';


const app = express()
app.use(express.json())
const All_User = [{
    username:'aaa',
    password:"aaa",
    name:"aaa"
},
{
    username:'qqq',
    password:"qqq",
    name:"qqq"
},
{
    username:'www',
    password:"www",
    name:"www"
}]

function userExists(username,password){
    All_User.forEach((user)=>{
        if(user.username === username && user.password ===password){
            return true
        }
    })
    return false
}


app.post('/signin',function (req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"user does not exist "
        })
    }

    var token = jwt.sign({username:username},'shhh');
    return res.json({
        token
    })
})

app.get('/users',function(req,res){
      const token = req.headers.authorization;
      try{
        const decoded = jwt.verify(token,jwtPassword)
        const username = decoded.username
      }catch(err){
         return res.status(403).json({
            msg:"Invalid token "
         })
      }
})

app.listen(3000)

// mongodb+srv://vinaymakade:vinaymakade@cluster0.rwhf7.mongodb.net/