function myFunction() {
    var innerButton = document.getElementById('innerButton');
    var x = document.body;
    var innerButton =document.getElementById('innerButton');
  
    x.classList.toggle("light-mode");
  
    document.body.getElementsByTagName('header')[0].classList.toggle('light-mode-2');
    
    var y = document.querySelectorAll(".item");
    for (var i = 0; i < y.length; i++) {
      y[i].classList.toggle('light-mode-3');
    }
  
    var z = document.querySelectorAll("p");
    for (var i = 0; i < z.length; i++) {
      z[i].classList.toggle('light-mode-2');
    }
  
    var k = document.querySelectorAll("h1");
    for (var i = 0; i < k.length; i++) {
      k[i].classList.toggle('light-mode-2');
    }

    innerButton.classList.toggle('innerButton'); 

}


// var y = document.querySelectorAll(".item");
// for (var i = 0; i < y.length; i++) {
//   y[i].classList.toggle('light-mode-2');
// }
