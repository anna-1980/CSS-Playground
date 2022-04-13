const egg1 = document.querySelector('.egg1')
const egg2 = document.querySelector('.egg2')
const spots1 = document.querySelector('.egg1_spots')
const spots2 = document.querySelector('.egg2_spots')
 
console.log(egg1);

egg1.addEventListener('click', 
function(){
  console.log('egg one clicked');
  spots1.classList.toggle("spots1");
}
);
// egg1.addEventListener('mouseenter', 
// function(){
//   console.log('egg one MOUSE');
//   spots1.classList.toggle("egg1hover");
// }
// );

egg2.addEventListener('click', 
function(){
  console.log('egg 2 click');
  spots2.classList.toggle("spots2");
}
)

 


// code1.addEventListener('click',function(){
//   overlay1.classList.toggle("overlay1");
// });
// code2.addEventListener('click',function(){
//   overlay2.classList.toggle("overlay2");
// });
// code3.addEventListener('click',function(){
//   overlay3.classList.toggle("overlay3");
// });
// code4.addEventListener('click',function(){
//   overlay4.classList.toggle("overlay4");
// });
// close.addEventListener('click', 
// function(){
//   overlay.classList.toggle("overlay");
// }
// )
  // this.classList.toggle("overlay");
  // overlay.classList.toggle("overlay");