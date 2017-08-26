//numb.indexOf(numb.match(ggg))
function reverseLetter(str) {
  var regexp = /\W+^[A-z]+$/, ex = /[0-9]/, falseArray = str.split('')
  var tested = regexp.test(str);
  var numbergotFound = str.indexOf(str.match(ex))

    var b = falseArray.filter(function(n) {
 
     return n.match(regexp);    
  
   })

   if(tested == true) 
       var a = str.split('').reverse().join(''); 
       
    else if(tested == false)
      a = b.reverse().join('')
  
return a;


}