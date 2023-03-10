const Client = require('../models/client');

const create = async (req, res, filename) => {
    try {
      let data = req.body;
      let client = new Client(data);
      client.image = filename;
      
      
      let result = await client.save(); // <-- appel de la méthode save() sur l'instance créée
      res.status(200).send(result);
    }  catch (error) {
      res.status(500).send(error);
   }
  }


const byid =async (req,res)=>{
try{
let id=req.params.id;
let result=await Client.findById({_id:id});
res.status(200).send(result);

}
catch (error) {
  res.status(500).send(error);
}



}
const getall=async (req,res)=>{
try {
  let result = await  Client.find();
  res.status(200).send(result);
  
} catch (error) {
  res.status(500).send(error);
}

}



const del=async (req,res)=>{
try{
let id=req.params.id;
let result=await Client.findByIdAndDelete({_id:id})
res.status(200).send(result);


}


catch (error) {
  res.status(500).send(error);
}
    
}

const update = async (req, res,filename) => {
    try {
      let id = req.params.id;
      let data = req.body;

if(filename.length>0){
  data.image=filename;
}

      let result = await Client.findByIdAndUpdate({_id:id}, data); // <-- passer les arguments séparément
      res.status(200).send(result);
    }  catch (error) {
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