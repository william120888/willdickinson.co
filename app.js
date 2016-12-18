var express     = require("express"), 
    app         = express(),
    mongoose    = require("mongoose");
    
app.set("view engine", "ejs");
    
app.get("/", function(req,res){
    res.render("landing.ejs");
});


mongoose.connect("mongodb://will:test88@ds139278.mlab.com:39278/willdicko");



    
app.listen(process.env.PORT, process.env.IP, function(){
console.log("Dicko Server is on yo");
});