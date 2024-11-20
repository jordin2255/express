const express = require("express");
const path = require("path");
const rootDir=require('./util/path');

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const bodyParser=require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','error.html'));
});
app.listen(3000);
