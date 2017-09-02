var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');



btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
  for(var i = 1; i <= 5; i++) {
     var insertImgElement = document.createElement('img') 
     insertImgElement.setAttribute('src', 'images/pic' + [i] + '.jpg') 

     

     insertImgElement.onclick = function changed_on_click(e) {
     
     var setted =  e.target.getAttribute('src')
     displayedImage.setAttribute('src', setted)
    
  }
     
     

     thumbBar.appendChild(insertImgElement)


    }

  
  

/* Wiring up the Darken/Lighten button */

btn.onclick = function () {
 var checkClass =  btn.getAttribute('class') 

 switch(checkClass) {

 case "dark":  
 btn.setAttribute('class', 'light');
 btn.textContent = 'Lighten';
 overlay.style.backgroundColor = "rgba(0,0,0,0.5)"
 
 break; 

 case "light":
 btn.setAttribute('class', 'dark');
 btn.textContent = 'Darken';
 overlay.style.backgroundColor = "rgba(0,0,0,0)"
 

break; 

 }
  
}
