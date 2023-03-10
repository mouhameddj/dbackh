const express = require('express');
require('./config/connect')
const cors=require('cors');
const adminRoute=require('./routes/admin');
const clientRoute=require('./routes/client');
const departmentRoute=require('./routes/departement');
const employeeRout=require('./routes/employee');
const app=express();
app.use(cors());
app.use(express.json());
app.use('./admin',adminRoute);
app.use('./client',clientRoute);
app.use('./departement',departmentRoute);
app.use('./employee',employeeRout);


app.use('/getimage', express.static('./uploads'));
app.listen(3000,()=>{
    console.log('server work');
})

