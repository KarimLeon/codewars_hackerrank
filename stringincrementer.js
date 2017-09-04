/*
function incrementString (strng) {
  var y = "", emptyString = "" + 1;   
  for(var i = 0; i < strng.length; i++) {
     switch(!isNaN(strng[i])) {
       
     case true: 
   var num = Number(strng[i]);
   var oki = y += num;
   var num2 = Number(oki);
   var num3 = num2 + 1;
   var text = num3.toString()
   var stringified = oki
    
  break;

    case false: 
   stringified = strng + 1;
   break;

  

 
};

};
 
      
return stringified || emptyString;


};

*/

function incrementString (strng) {
  var arr1 = [], arr2 = [], regex = /[a-zA-Z]+/g, regexNum = /\d+/g;

  for(var i = 0; i < strng.length; i++) {
      if(strng[i].match(regex)) 
        var op = arr1.push(strng[i]);

      if(strng[i].match(regexNum))
        var op2 = arr2.push(strng[i]);
};

var result = arr2.join('');
var result2 = arr2.join('')
var con = result.concat(' + 1'); 

for(var i = 0; i < arr2.length; i++) {
    if(arr2[i] !== 0) 
       var x = arr2[i] + 1

};

return x;

};