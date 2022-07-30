
const divSlider = document.querySelector('.div-slider')
const slider = document.getElementById('slider');
let primeraImg = slider.src = "./slider2.jpg"
let headerPadre = document.getElementById('header-padre')
let div = document.getElementById('contenedor')
let blog = document.querySelector('.blog')
console.log();
window.onload = ()=>{
  primeraImg

}


setInterval(function(){
  slider.src = "./slider2.jpg";
}, 4000);

setInterval(function(){
  slider.src = "./slider3.jpg";
}, 8000);

setInterval(function(){
  slider.src = "./slider4.jpg";
}, 12000);


document.addEventListener('scroll', (e) => {
  let y = window.scrollY;
  console.log(y);
  
  if(y == 0){
  
    div.classList.add('div-ani')
    
    document.getElementById('header').classList.remove('header-fondo')
    
    document.getElementById('slider').classList.remove('desenfoco')
    document.getElementById('slider').classList.remove('desenfoco2')
    document.getElementById('slider').classList.remove('desenfoco3')
    document.getElementById('slider').classList.remove('desenfoco4')
    document.getElementById('slider').classList.remove('desenfoco5')
  }
  else if(y < 100){
    
    div.classList.remove('div-ani')

    document.getElementById('header').classList.remove('header-fondo')
    
    document.getElementById('slider').classList.remove('desenfoco')
    document.getElementById('slider').classList.remove('desenfoco2')
    document.getElementById('slider').classList.remove('desenfoco3')
    document.getElementById('slider').classList.remove('desenfoco4')
    document.getElementById('slider').classList.remove('desenfoco5')
  }
  // blog.classList.add('blog-acomodado')
  else if(y < 150){
    document.getElementById('slider').classList.remove('desenfoco')
  document.getElementById('slider').classList.add('desenfoco2')
  document.getElementById('slider').classList.remove('desenfoco3')
  document.getElementById('slider').classList.remove('desenfoco4')
  document.getElementById('slider').classList.remove('desenfoco5')
}
  else if(y < 250){

    document.getElementById('header').classList.remove('header-fondo')
    
    document.getElementById('slider').classList.remove('desenfoco')
    document.getElementById('slider').classList.add('desenfoco3')
    document.getElementById('slider').classList.remove('desenfoco4')
    document.getElementById('slider').classList.remove('desenfoco5')
  }
  
  else if(y < 400){

    document.getElementById('header').classList.remove('header-fondo')
    
    document.getElementById('slider').classList.remove('desenfoco')

    document.getElementById('slider').classList.add('desenfoco4')
    document.getElementById('slider').classList.remove('desenfoco5')
  }
  else if(y < 420){

    document.getElementById('slider').classList.remove('desenfoco')
    document.getElementById('slider').classList.add('desenfoco5')
    document.getElementById('header').classList.add('header-fondo')
  
  }
  else if(y < 450){
    
    document.getElementById('slider').classList.add('desenfoco')
 
  }
 
  else if(y < 1932){
    document.getElementById('header').classList.add('header-fondo')

  }
})



