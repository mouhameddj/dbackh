
const Departement = require('../models/departement');






const create = async (req, res) => {
    try {
      let data = req.body;
      let departement = new Departement(data);
      
      let result = await departement.save(); // <-- appel de la méthode save() sur l'instance créée
      res.status(200).send(result);
    }  catch (error) {
      res.status(500).send(error);
   }
  }


const byid =async (req,res)=>{
try{
let id=req.params.id;
let result=await Departement.findById({_id:id});
res.status(200).send(result);

}
catch (error) {
  res.status(500).send(error);
}




}
const getall=async (req,res)=>{
try {
  let result =await Departement.find();
  res.status(200).send(result);
  
} catch (error) {
  res.status(500).send(error);
}



}



const del=async (req,res)=>{
try{
let id=req.params.id;
let result=await Departement.findByIdAndDelete({_id:id})
res.status(200).send(result);


}


catch (error) {
  res.status(500).send(error);
}
}

const update = async (req, res) => {
    try {
      let id = req.params.id;
      let data = req.body;


      let result = await Departement.findByIdAndUpdate({_id:id}, data); // <-- passer les arguments séparément
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
   }
  }
module.exports={
create,
byid,
del,
getall,
update

}