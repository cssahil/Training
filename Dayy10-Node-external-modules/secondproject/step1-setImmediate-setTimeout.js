let fs = require("fs");
console.log(__dirname);

fs.mkdir("data",function(error){
    if (error) { console.log("Error =",error) }
    else {

        //create a folder named data
        process.chdir("data"); 

        setImmediate(function(){   // setting delay

            console.log(process.cwd()); // print cwd 

            // create a file named hello.txt inside folder = data
            fs.writeFileSync("hello.txt",
                             "welcome to new dir named data with file named hello.txt containing this sentence",
                             "utf-8");

            // ------------------

            // after 2s rename hello.txt to ibm.txt
            setTimeout(function(){
                fs.renameSync("hello.txt", "ibm.txt");
            },2000) 

            // after 4s read and print the text from ibm.txt
            setTimeout(function(){
                console.log( fs.readFileSync("ibm.txt", "utf-8") );
            },4000)

            // after 6s unlink ibm.txt
            setTimeout(function(){
                fs.unlinkSync("ibm.txt"); // unlink to remove file
                process.chdir("../");
            },6000)

            // after 8s delete data folder and print "All Clear"
            setTimeout(function(){
                fs.rmdirSync("data");     // rmdir to remove folder
                console.log("All Clear")
            },8000)

        })
    }
})