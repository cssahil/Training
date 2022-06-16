// merge things
// gives template
// used for http, res, req
// works without using filesystem

let express = require("express");
let app = express();
let data = require("./data/data.json");

// middlewares
// routes

app.get("/", function(req, res){
    
    // res.write("hello from express");
    // res.end();

    // another shortcut ways
    // res.end("hello from express");
    // res.send("hello from express using send");
    // res.send("<h1> Hello from express using send as h1 </h>")
    // res.json( { "username" : "Vijay" } );
    // res.sendFile(__dirname+"/temp.html");
    // res.send("hello there, again, and again");

    // gives file location on page
    // res.json(__dirname+"/data/data.json");

    // give data from inside data/data.json from let data
    res.json(data);
});

// app.listen(5050, "localhost", function(error){
//     if(error){ console.log("Error =",error) }
//     else{ console.log("Server is now live on localhost:5050"); }
// });

// shortcut way
// app.listen(5050, "localhost");
