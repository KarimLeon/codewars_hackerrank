var capitals = function (word) { 
  var array = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', arraySplit = array.split(''), newArray = []
    for(var b = 0; b < arraySplit.length; b++) {
	 for(var i = 0; i < word.length; i++) {
          if(word[i] == arraySplit[b])
            newArray.push(word.indexOf(word[i]));     

            var sortedArray =  newArray.sort();
}
};
return sortedArray;
};