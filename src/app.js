const express=require('express');
const app=express();
const path=require('path');

app.use(express.static(path.join(__dirname,'/public')));
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');


app.get('/',(req,res)=>{
   res.render('index')
})

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'/public/about.html'))
})

module.exports=app;