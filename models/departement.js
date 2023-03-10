const mongoose = require('mongoose');
const Departement=mongoose.model('Departement',{
name:{
    type :String,
    required:true,
},


description:{
    type :String,
    required:true,
   
},
etage:{
    type :Number,
    required:true,
   


},
salle:{
    type :Number,
    required:true,



}











})
module.exports=Departement;