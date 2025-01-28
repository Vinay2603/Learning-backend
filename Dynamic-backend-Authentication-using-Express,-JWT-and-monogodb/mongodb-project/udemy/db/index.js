const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://vinaymakade:vinaymakade@cluster0.rwhf7.mongodb.net/');
  }

  const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
    name:String,
    isadmin: Boolean,
});

  const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    name:String,
    isadmin: Boolean,
});

const CourseSchema = new mongoose.Schema({
    coursename: String,
    cost: Number,
    currentStock:Number,
});

