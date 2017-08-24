var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

for(var i = 0; i < people.length; i++) {
   switch(people[i]) {
 
   case 'Phil':
     admitted.textContent += 'Phil' + ' '
     break;

   case 'Lola':
     admitted.textContent += 'Lola'
     break; 

    case people[i] :
      refused.textContent += people[i] + ' '
       break;
    
}

};











