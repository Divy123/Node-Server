var express=require('express');
var hbs=require('hbs');
var app=express();
const port=process.env.PORT||3000;
app.set('view engines','hbs');
hbs.registerPartials(__dirname+'/views/partial');


 app.get('/',(req,res)=>
{
    res.render("page.hbs",{
        Title:'Home Page'
    });
});
app.get('/project',(req,res)=>
{
    res.render("project.hbs",{
        Title:'Home Page'
    });
})
 
app.get('/bad',(req,res)=>
{
    res.send("Unable to fulfill request");   
});
app.listen(port,()=>{
    console.log('App is up on port'+port);
});