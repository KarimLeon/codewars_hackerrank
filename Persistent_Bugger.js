function persistence(num) {
   function Stringed() {
     return String(num);
 };
     
  
  var arrayedToMultiplied = function(string)  {
    var str = string.split('')
    var reduce = str.reduce(function(a ,b) {
          return a * b;
    
    });
   return reduce;
     
}
 return arrayedToMultiplied(Stringed());

}