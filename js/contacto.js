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