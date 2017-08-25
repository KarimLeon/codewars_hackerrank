function list(names){
  var y = "", z = []

 for(var i = 0; i < names.length; i++) {
      var a = names[i].name;
      var b = z.push(a);
      var c = z.join(',')
      var d = c.lastIndexOf(',')
      var e = c.slice(0, d)
}; 
 
return e;
};