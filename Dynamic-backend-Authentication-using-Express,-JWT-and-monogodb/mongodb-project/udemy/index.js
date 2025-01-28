const express = require('express');
const bodyParser = require('body-parser')
const app = express()

const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user")

app.use(bodyParser.json())
app.use("/admin",adminRouter)
app.use("/user",userRouter)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// const express = require('express');
// const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const jwtPassword = '123456';
// const PORT = 3000

// const app = express()
// app.use(express.json())

// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb+srv://vinaymakade:vinaymakade@cluster0.rwhf7.mongodb.net/');
//   }

// const userSchema = new mongoose.Schema({
//     username: String,
//     password: String,
//     name:String,
//     isadmin: Boolean,
// });

// const courseSchema = new mongoose.Schema({
//     coursename: String,
//     cost: Number,
//     currentStock:Number,
// });
  
// const Users = mongoose.model('Users', userSchema);

// const Courses = mongoose.model('Courses', courseSchema);

// // admin 

// app.post('/admin/signup',async function (req,res){
//     const username = req.body.username;
//     const password = req.body.password;
//     const name = req.body.name;

//     const existingUser =  await Users.findOne({username:username,isadmin:true})

//     if(existingUser){
//         return res.status(400).json({
//             msg:"Username admin already exist"
//         })
//     }

//     const user = new Users({
//         username:username,
//         password:password,
//         name:name,
//         isadmin: true
//        })
//     user.save()
    
//     return res.json('admin user created succefully')
// })

// app.post('/admin/signin',async function (req,res){
//     const username = req.body.username;
//     const password = req.body.password;

//     const existingUser =  await Users.findOne({username:username,password:password,isadmin:true})

//     if(existingUser){
//         return res.status(403).json({
//             msg:"admin user does not exist "
//         })
//     }

//     var token = jwt.sign({username:username},'shhh');
//     return res.json({
//         token
//     })
// })

// app.post('/admin/course',async function (req,res){
//     const token = req.headers.authorization;
//       try{
//         const decoded = jwt.verify(token,jwtPassword)

//         const coursename = req.body.coursename;
//         const cost = req.body.cost;
//         const currentStock = req.body.currentStock;

//         const existingCourse =  await Courses.findOne({coursename:coursename})

//         if(existingCourse){
//             return res.status(400).json({
//                 msg:"course already exist"
//             })
//         }

//     const course = new Courses({
//         coursename:coursename,
//         cost:cost,
//         currentStock:currentStock,
//        })
//     course.save()
    
//     return res.json('course has been created succefully')

//     }catch(err){
//         return res.status(403).json({
//         msg:"Invalid token"
//         })
//     }
// })


// app.get('/admin/course',async function(req,res){
//     const token = req.headers.authorization;
//     try{
//       const decoded = jwt.verify(token,jwtPassword)
//       const courses = await Courses.find()
//        res.json({courses})
//     }catch(err){
//        return res.status(403).json({
//           msg:"Invalid token "
//        })
//     }
//   })

// //   user 

// app.post('/users/signup',async function (req,res){
//     const username = req.body.username;
//     const password = req.body.password;
//     const name = req.body.name;

//     const existingUser =  await Users.findOne({username:username,isadmin:false})

//     if(existingUser){
//         return res.status(400).json({
//             msg:"Username already exist"
//         })
//     }

//     const user = new Users({
//         username:username,
//         password:password,
//         name:name,
//         isadmin: false
//        })
//     user.save()
    
//     return res.json('user created succefully')
// })

// app.post('/users/signin',async function (req,res){
//     const username = req.body.username;
//     const password = req.body.password;

//     const existingUser =  await Users.findOne({username:username,password:password,isadmin:false})

//     if(existingUser){
//         return res.status(403).json({
//             msg:"user does not exist "
//         })
//     }

//     var token = jwt.sign({username:username},'shhh');
//     return res.json({
//         token
//     })
// })


// app.get('/users/course',async function(req,res){
//     const token = req.headers.authorization;
//     try{
//       const decoded = jwt.verify(token,jwtPassword)
//       const courses = await Courses.find()
//       res.json({courses})
//     }catch(err){
//        return res.status(403).json({
//           msg:"Invalid token "
//        })
//     }
//   })

//   app.post('/users/courses:courseId',async function (req,res){
//     // const username = req.body.username;
//     // const password = req.body.password;
//     // const name = req.body.name;

//     // const existingUser =  await Users.findOne({username:username,isadmin:false})

//     // if(existingUser){
//     //     return res.status(400).json({
//     //         msg:"Username already exist"
//     //     })
//     // }

//     // const user = new Users({
//     //     username:username,
//     //     password:password,
//     //     name:name,
//     //     isadmin: false
//     //    })
//     // user.save()
    
//     // return res.json('user created succefully')
// })

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });