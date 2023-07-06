const fs = require('fs');
const process = require('process');
const axios = require('axios')

//1: 
function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if(err){
            console.log(`ERROR': ${err}`)
            process.exit(1)
        }
        console.log(data)
    })

}

cat(process.argv[2]);









 

