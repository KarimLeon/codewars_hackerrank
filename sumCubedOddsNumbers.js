function cubeOdd(arr) {

    var array = [], arr1 = [], sum = 0
    for(var i = 0; i < arr.length; i++) {  
      
         if(arr[i] % 2 !== 0)
            var a = array.push(arr[i]);
    };
    
    for(var x = 0; x < array.length; x++) {
           var g = Math.pow(array[x], 3);
           var lol = arr1.push(g);
    }
    
    for(var b = 0; b < arr1.length; b++) {
           sum += arr1[b];
    
    
    };

    if(sum == 0)                     
        var a = 0;  
    else if(arr != undefined)
        a = undefined;
    
    return sum || a;
  
    
    };