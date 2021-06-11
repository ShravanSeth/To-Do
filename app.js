const express = require("express");
const app = express();
const date = require(__dirname + "/date.js");
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"))

let items = [];
let workItems = []

app.get("/", function(req,res){

    let day = date.getDate();

     res.render("list", {listTitle : day, listnew: items});
            
        
});

app.post("/", function(req,res){
    let item = req.body.newItem;
    if(req.body.list === "Work")
    {
        
        workItems.push(item);
        res.redirect("/work");
    }
    else{
//   let item = req.body.newItem;
  items.push(item);
  
  res.redirect("/");  
    }
});

app.get("/about", function(req,res){
    res.render("about");
})

app.get("/work", function(req,res){
    res.render("list", {listTitle: "Work List", listnew: workItems});
});

app.post("/work", function(res,req){
    let item = req.body.newItem;
        workItems.push(item);
        res.redirect("/work");
});
app.listen(3000, function(){
    console.log("I'm ON!")
    
});
