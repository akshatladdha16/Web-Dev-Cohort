const mongoose=require("mongoose");

const { Schema } = mongoose;

mongoose.connect("mongodb+srv://akshat_laddha16:aM0pM36sYHBJ8dZo@cluster0.uhtjlhp.mongodb.net/todos") //not to be shared in real world project . to be stored in .env file to safeguard credentials and database contents

//defining schema 
const todoschema = new Schema({
  title: String, // String is shorthand for {type: String}
  description: String,
  completed: Boolean
});

//defining model
const todo=mongoose.model("todos",todoschema);

module.exports={
    todo:todo
}
