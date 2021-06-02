const express = require('express');
const app = new express();
app.set("view engine","ejs");
app.set("views","./scr/views");
app.get('/',function(req,res){
    res.render("index");
  
});
app.listen(5000);