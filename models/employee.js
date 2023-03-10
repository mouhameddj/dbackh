const mongoose = require('mongoose');
const Employee=mongoose.model('Employees',{
name:{
    type :String,
    required:true,
},
lastname:{
    type :String,
    required:true,
},
tel:{
    type :String,
    required:true,
    
},
email:{
    type :String,
    required:true,
    unique:true,
},
address:{
    type :String,
    required:true,
   
},
image:{
    type :String,
    required:true,
   


},
idDep:{
    type :String,
    required:true,
   

}










})
module.exports=Employee;