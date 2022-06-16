let fetch = require("fetch");
let fs = require("fs");

// by using fetchUrl we can get meta-data or page (ie; all html tags)
fetch.fetchUrl("https://www.ibm.com/in-en", function(error, meta, res){

    if(error){ console.log("Error =",error); }
    else { 
        
        //console.log(res.toString()); 

        // create a file = temp.html in cwd with excat replica of fetchUrl
        fs.writeFile("temp.html", res, "utf-8", function(error){
            
            if(error){ console.log("Error =",error); }
            else { console.log("File Created"); }
        })
    } 

})