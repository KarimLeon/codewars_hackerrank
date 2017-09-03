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