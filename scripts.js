//1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
console.log(document.querySelectorAll('a'));
let a = document.querySelectorAll('a');

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', (event) => {
        event.preventDefault();
    });
}

//2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:


//2.1 Imágenes: Cambia la imagen por uno de los `gif` que tienes en la carpeta **assets** con el nombre **magic-***.
let imagen = document.querySelectorAll('img');
let parrafos = document.querySelectorAll('p');

for (let i = 0; i < imagen.length; i++) {
    imagen[i].addEventListener('click', () => {
        imagen[i].src = 'assets/magic-5.gif';
    });
}


//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener('click', () => {
        parrafos[i].style.color = "green";
        parrafos[i].style.backgroundColor = "blue";
    });
}

//2.3 Bloques de `article` o `section`: Cambia el color de fondo.
console.log(document.querySelectorAll('article, section'));
let bloques = document.querySelectorAll('article, section');

for (let i = 0; i < bloques.length; i++) {
    bloques[i].addEventListener('click', () => {
        bloques[i].style.backgroundColor = "red";
    });
}

