var express     = require("express"), 
    app         = express(),
    mongoose    = require("mongoose");
   
    
app.use(express.static("public"));
app.set("view engine", "ejs");
    
app.get("/", function(req,res){
    res.render("landing.ejs");
});

app.get("/fanpics", function(req,res){
    res.render("fanpics.ejs");
});

app.get("/veolia", function(req,res){
    res.render("veolia.ejs");
});

app.get("/ncl", function(req,res){
    res.render("ncl.ejs");
});


mongoose.connect("mongodb://will:test88@ds139278.mlab.com:39278/willdicko");



    
app.listen(process.env.PORT, process.env.IP, function(){
console.log("Dicko Server is on yo");
});