const express = require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
const PORT=5000;
app.use(cors());
app.use(bodyParser.json());
app.post('/register',(req,res)=>{
    const userData=req.body;
    console.log(userData);
    res.json({message: "Registration successful!"});
});
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})