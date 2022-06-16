let fs = require("fs");

// synchronous way : writeFileSync 
// (if ran many times in console then it will overwrite on same words and no new data.txt will be created)
// fs.writeFileSync("data.txt","welcome to your life");
// console.log("file is created");

// asynchronous way : writeFile
fs.writeFile("data.txt", "Welcome to your life, there's no turning back.", "utf-8", function(error){
    if (error) { console.log("Error ",error) }
    else { console.log("File is created")}
})
