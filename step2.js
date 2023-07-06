const fs = require('fs');
const process = require('process');
const axios = require('axios')



//2:


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



async function webCat(url) {
    try {
      let res = await axios.get(url);
      console.log(res.data);
    } catch (err) {
      console.error(`ERROR : ${err}`);
      process.exit(1);
    }
  }
  
  let path = process.argv[2];

  console.log(path)
  console.log(path.slice(0,4))
  
  if (path.slice(0, 4) === 'http') {
    
    webCat(path);
  } else {
    cat(path);
  }

// Not even the solution works and I'm short on time, but the code makes sense.
// by 'not even the solution works' I mean it comes up with an error every time I run
//this. 