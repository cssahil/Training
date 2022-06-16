let fs = require("fs");

// synchronous way
// console.log( fs.readFileSync("temp.txt","utf-8") );

// async =  mostly will have callback func
fs.readFile("temp.txt",function(error,data){

    if (error){         // to catch error if fileName is wrong
        console.log("Error ", error)       // define error
    }else {
        //console.log(data); // data in binay format
        //console.log(data.toString()); // binary to string
        console.log(data+"") // alternate way to string
    }
});