const foto_uan = document.getElementById('foto_uan');

document.getElementById('tit').addEventListener('click',()=>{
    const titulo = document.getElementById('titulo');
    titulo.style.color = '#0e8abb'
    titulo.style = 'font-size : 70px'
    mostrarLog('Uso de getElementById() para seleccionar y cambiar color de titulo')
});

document.getElementById('img').addEventListener('click',()=>{
    foto_uan.setAttribute('src' , 'https://www.mundodeportivo.com/files/image_449_465/uploads/2023/09/17/6506eaa6a517a.jpeg')
});


document.getElementById('demo-classList').addEventListener('click', ()=>{
    document.querySelectorAll('.tarjeta').forEach(i => i.classList.toggle('destacado'))
    mostrarLog('Uso de classlist.toggle() para alternar tarjetas')
})