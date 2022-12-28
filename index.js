
// el click de decir que si muestra mensaje 
const sibutton = document.querySelector('#sibutton');

sibutton.addEventListener('click',function () { /* al hacer click*/
    Swal.fire(                         /*alerta */
        'wow en serio !',
        'ahora somos Novios!',
        'success'
      ) 

});

// boton No se mueva aleatoriamente 
const nonutton = document.querySelector('#nonutton');
nonutton.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()+50);
    const randomY = parseInt(Math.random()*50);
    nonutton.style.setProperty('top', randomY+'%');
    nonutton.style.setProperty('left',randomX+'%');
    nonutton.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);

});