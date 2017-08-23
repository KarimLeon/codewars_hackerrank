var capitals = function (word) { 
  var array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', gay = array.split(''), lol = []
    for(var b = 0; b < gay.length; b++) {
	 for(var i = 0; i < word.length; i++) {
          if(word[i] == gay[b])
            lol.push(word.indexOf(word[i]));     

            var solved =  lol.sort();
}
};
return solved;
};