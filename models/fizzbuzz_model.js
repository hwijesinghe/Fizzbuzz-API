export default  {
   
    computeFuzzBuzzData:function(userInput, type){
        
        if (0 <= userInput && userInput <= 100) {

            var result = {};                
            var output = [];
            var count = 0;

            if(type === 'buzz'){
            
                for (var i = 0; i <= userInput; i++) {

                    if (i !== 0 && i % 5 === 0) {
                        output[i] = "Buzz";
                        count += 1;  
                    } else {
                        output[i] = -i;
                    }
                }

            } else if (type === 'fizz') {
            
                for (var i = 0; i <= userInput; i++) {

                    if (i !== 0 && i % 3 === 0) {
                        output[i] = "Fizz";
                        count += 1;  
                    } else {
                        output[i] = -i;
                    }
                }
                
            } else if (type === 'fizzbuzz') {
                for (var i = 0; i <= userInput; i++) {

                    if (i !== 0 && i % 3 === 0 && i % 5 == 0) {
                        output[i] = "fizzbuzz";
                        count += 1;  
                    } else {
                        output[i] = -i;
                    }
                }
            }

            result["count"] = count;
            result["range"] = parseInt(userInput);
            result["type"] = "buzz";

            //{ “count”: 3, “range”: 10, “type”: “buzz” }

        } else {
            var result = {
                "error": "range should be between 0 and 100"
            };
            // res.status(200).json(result);
        }

         return result;
    },
    fetchCrud:function(){
      var data="data was fetched";
      return data;   
    }
  }