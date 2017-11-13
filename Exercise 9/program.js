        var http = require('http');
    var urls = [process.argv[2], process.argv[3], process.argv[4]]; 
    var holder = [];
    var count = 1;
    var endCount = 0;
    for(var i in urls){     

        responseCount(i, urls[i])

    }

    function responseCount(count, url){
        http.get(url, function(res){
            res.setEncoding('utf8');                            

            var string = '';
            res.on('data', function(chunk){         

                string += chunk;

            });

            res.on('end', function(){
                holder[count] = string;
                endCount ++;
                if(endCount >= 3){
                    for(var i in holder){
                        console.log(holder[i]); 
                    }

                }
            })


        }).on('error', function(e) {
          console.log("Got error: " + e.message);
        }); 
    }