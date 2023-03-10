const express = require('express');



const router = express.Router();

const {create,getall,byid,del,update}=require('../controllers/departement');
 router.post('/create',create);
 router.get('/getall',getall);
 router.get('/byid',byid);
 router.delete('/del',del);
 router.put('/update',update);

 module.exports=router;