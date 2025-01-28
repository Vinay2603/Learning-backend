const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwtPassword = '123456';
const PORT = 3000

const app = express()
app.use(express.json())

main().catch(err => console.log(err));


async function main() {
  await mongoose.connect('mongodb+srv://vinaymakade:vinaymakade@cluster0.rwhf7.mongodb.net/');
}

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name:String,
});

const Users = mongoose.model('Users', userSchema);


app.post('/signup',async function (req,res){
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await Users.findOne({username:username})
  console.log(existingUser)
  if(existingUser){
      return res.status(400).json({
          msg:"Username already exist"
      })
  }

  const user = new Users({
    username:username,
    password:password,
    name:name
   })
   user.save()

  return res.json('user created succefully')
})

app.post('/signin',async function (req,res){
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await Users.findOne({username:username,password:password})
  console.log('existingUser',existingUser)
  if(!existingUser){
      return res.status(403).json({
          msg:"user does not exist "
      })
  }

  var token = jwt.sign({username:username},'shhh');
  return res.json({
      token
  })
})

app.get('/users',async function(req,res){
  const users = await Users.find()
  res.json({users})
  // const token = req.headers.authorization;
  // try{
  //   const decoded = jwt.verify(token,jwtPassword)
  //   const username = decoded.username

  //  const users =  Users.find()
  //   res.json({users})
  // }catch(err){
  //    return res.status(403).json({
  //       msg:"Invalid token "
  //    })
  // }
})

// const All_User = [{
//     username:'aaa',
//     password:"aaa",
//     name:"aaa"
// },
// {
//     username:'qqq',
//     password:"qqq",
//     name:"qqq"
// },
// {
//     username:'www',
//     password:"www",
//     name:"www"
// }]








app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// mongodb+srv://vinaymakade:vinaymakade@cluster0.rwhf7.mongodb.net/


// {
//   "username":"qqq",
//   "password":"qqq",
//   "name":"qqq"
// }