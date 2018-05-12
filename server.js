var express=require('express');
var hbs=require('hbs');
var app=express();
app.set('view engines','hbs');
hbs.registerPartials(__dirname+'/views/partial');
app.use((req,res,next)=>
{
   console.log(new Date().toString());
   next();
});
app.use((req,res,next)=>
{
    res.render('maintainence.hbs',{
        Title:'Maintainenece page'
    });
   
});

 app.get('/',(req,res)=>
{
    res.render("page.hbs",{
        Title:'Home Page'
    });
});
 
app.get('/bad',(req,res)=>
{
    res.send("Unable to fulfill request");   
});
app.listen(3000);