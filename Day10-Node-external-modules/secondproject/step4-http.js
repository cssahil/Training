let fs = require("fs");
let http = require("http");


let server = http.createServer(function(req, res){
    // res.write("hello from my server");
    // res.end();

    res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>IBM India</title>
    </head>
    <body>
        <h1>IBM | INDIA</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt architecto atque earum quibusdam ducimus quis maxime nam a illo fugit porro cupiditate commodi, cum dolor omnis consectetur ullam voluptatum culpa!
        </p>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt architecto atque earum quibusdam ducimus quis maxime nam a illo fugit porro cupiditate commodi, cum dolor omnis consectetur ullam voluptatum culpa!
        </p>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt architecto atque earum quibusdam ducimus quis maxime nam a illo fugit porro cupiditate commodi, cum dolor omnis consectetur ullam voluptatum culpa!
        </p>
    </body>
    </html>
    
    `);

    // do editing on html from js using write
    res.write( fs.readFileSync("temp2.html","utf-8").replace("{ compname }", "My Company") );
    res.end();

});

server.listen(5050, "localhost", function(error){
    if(error) { console.log("Error =", error) }
    else { console.log("server is now live on localhost:5050"); }
});


