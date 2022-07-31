const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
const btnfull = document.querySelector('.btn-full')
let indiceImagen = 0;

/*Abre el Lightbox*/
const lightbox2interno = document.querySelector('#contenedor-interno');
const header = document.querySelector('.header-padre')
const scrolll = document.querySelector('.scroll')

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', (event)=>{
    let tamaño = imagen.clientWidth
    let tamaño2 = imagen.clientHeight
    console.log(tamaño2);
    console.log(tamaño);

    header.style.zIndex = '0'
    lightbox.classList.add('abrir')
    setTimeout(() => {
      imagenActiva.src = event.target.src;
      lightbox.style.display = 'flex';
      indiceImagen = Array.from(imagenes).indexOf(event.target);
      
    }, 200);


        if (tamaño2 > 250 && tamaño < 300){
          // lightbox2interno.style.height = '90%'
          lightbox2interno.style.width = '100%'
        }
        else{
          lightbox2interno.style.width = '100%'
        }
        
        imagenActiva.classList.add('coninterno')
        

    });


});



var clickCount = 0;

btnfull.addEventListener('click', function() {
  console.log(clickCount);
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function() {
            clickCount = 1;
            imagenActiva.style.width = '87.8%'
            // imagenActiva.style.height = '100%'
            imagenActiva.style.transition = '0.7s'
        }, 100);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        imagenActiva.style.width = '70%'
    }
}, false);

/*Cierra el Lightbox */

btnCierra.addEventListener('click', () => {
  
  lightbox.classList.add('borrado')

  setTimeout(() => {
    lightbox.style.display = 'none';
    header.style.zIndex = '100'

    lightbox.classList.remove('borrado')
  }, 800);

});

/* Adelanta la imagen*/

const adelantaImagen = () => {
  if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
  }
  imagenActiva.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;
  imagenActiva.classList.add('avance')
  setTimeout(() => {
    imagenActiva.classList.remove('avance')
  }, 500);

};

btnAdelanta.addEventListener('click', adelantaImagen);

/*Retrocede la Imagen*/

const retrocederImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;
  imagenActiva.classList.add('avance')
  setTimeout(() => {
    imagenActiva.classList.remove('avance')
  }, 500);
};

btnRetrocede.addEventListener('click', retrocederImagen);



document.addEventListener('scroll', ()=>{
  let header = document.querySelector('.header-padre')
  let y = window.scrollY;
  console.log(y);
  if (y > 140) {
    header.style.transform = 'translateY(-120%)'
  }else{
    header.style.transform = 'translateY(0)'
  }
})


