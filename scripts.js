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

//3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.



//3.1 Imágenes: Cambia la imagen por el gif `abracadabra.gif`.
for (let i = 0; i < imagen.length; i++) {
    let originalSrc = imagen[i].src;
    imagen[i].addEventListener('mouseenter', () => {
        imagen[i].src = 'assets/abracadabra.gif';
    });
    imagen[i].addEventListener('mouseleave', () => {
        imagen[i].src = originalSrc;
    });
}



//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
for (let i = 0; i < parrafos.length; i++) {
    let originalColor = parrafos[i].style.color;
    let originalBg = parrafos[i].style.backgroundColor;
    parrafos[i].addEventListener('mouseenter', () => {
        parrafos[i].style.color = "yellow";
        parrafos[i].style.backgroundColor = "purple";
    });
    parrafos[i].addEventListener('mouseleave', () => {
        parrafos[i].style.color = originalColor;
        parrafos[i].style.backgroundColor = originalBg;
    });
}



//3.3 Bloques de `article` o `section`: Color de fondo distinto al de párrafo.
for (let i = 0; i < bloques.length; i++) {
    let originalBgBloque = bloques[i].style.backgroundColor;
    bloques[i].addEventListener('mouseenter', () => {
        bloques[i].style.backgroundColor = "orange";
    });
    bloques[i].addEventListener('mouseleave', () => {
        bloques[i].style.backgroundColor = originalBgBloque;
    });
}

_**Premium**_

//![](https://media.giphy.com/media/tpTOw6sljB2U/giphy.gif)

//4. Crea una función de nombre `getRandom` que acepte un array con valores y devuelva uno de ellos de manera aleatoria.


//    ```javascript
    const colors = ['red', 'blue', 'green']

    const getRandom = (array) => {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    console.log(getRandom(colors))
    // imprime 'red', 'blue' o 'green'
// ```
//5. Utiliza la función creada `getRandom` para utilizar colores aleatorios de una paleta que hayas escogido de [coolors.co](https://coolors.co/palettes/trending) en los apartados anteriores.

const colorPalette = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];

// Aplicando colores aleatorios en los clics de párrafos y bloques
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].addEventListener('click', () => {
        parrafos[i].style.color = getRandom(colorPalette);
        parrafos[i].style.backgroundColor = getRandom(colorPalette);
    });
}

for (let i = 0; i < bloques.length; i++) {
    bloques[i].addEventListener('click', () => {
        bloques[i].style.backgroundColor = getRandom(colorPalette);
    });
}


//6. Utiliza la función creada `getRandom` para utilizar _gifs_ aleatorios  en los apartados anteriores.

const magicGifs = [
    'assets/magic-1.gif',
    'assets/magic-2.gif',
    'assets/magic-3.gif',
    'assets/magic-4.gif',
    'assets/magic-5.gif',
    'assets/magic-6.gif'
];

for (let i = 0; i < imagen.length; i++) {
    imagen[i].addEventListener('click', () => {
        imagen[i].src = getRandom(magicGifs);
    });
}