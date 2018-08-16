var express         = require("express");


var app             = express()

app.set("view-engine", "ejs")


app.get("/", function(req, res){
    res.send("HIIIi")
})

app.listen(8080, "0.0.0.0", function(){
    console.log("Arpit Server has started");
})