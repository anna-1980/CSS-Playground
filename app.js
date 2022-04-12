const code1 =document.querySelector(".code1");
const code2 =document.querySelector(".code2");
const code3 =document.querySelector(".code3");
const code4 =document.querySelector(".code4");

const overlay1 = document.querySelector('.menu1');
const overlay2 = document.querySelector('.menu2');
const overlay3 = document.querySelector('.menu3');
const overlay4 = document.querySelector('.menu4');

const close1 = document.querySelector('.close1')
const close2 = document.querySelector('.close2')
const close3 = document.querySelector('.close3')
const close4 = document.querySelector('.close4')

code1.addEventListener('click',function(){
  overlay1.classList.toggle("overlay1");
});
code2.addEventListener('click',function(){
  overlay2.classList.toggle("overlay2");
});
code3.addEventListener('click',function(){
  overlay3.classList.toggle("overlay3");
});
code4.addEventListener('click',function(){
  overlay4.classList.toggle("overlay4");
});

close1.addEventListener('click', 
function(){
  overlay1.classList.toggle("overlay1");
}
)
close2.addEventListener('click', 
function(){
  overlay2.classList.toggle("overlay2");
}
)
close3.addEventListener('click', 
function(){
  overlay3.classList.toggle("overlay3");
}
)
close4.addEventListener('click', 
function(){
  overlay4.classList.toggle("overlay4");
}
)

/// Eggs

const egg1 = document.querySelector('.egg1')
const spots1 = document.querySelector('.spots1')

egg1.addEventListener('click',function(){
  spots1.classList.toggle("spots1");
});

///eggs



// close.addEventListener('click', 
// function(){
//   overlay.classList.toggle("overlay");
// }
// )
  // this.classList.toggle("overlay");
  // overlay.classList.toggle("overlay");