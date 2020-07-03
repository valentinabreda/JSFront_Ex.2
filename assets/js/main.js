window.onload = () => {
    ex3()
    ex4()
    ex5()
    ex6()
}


const ex3 = () => {
    
    const btnAbracadabra = document.querySelector('#abracadabra');
    
    btnAbracadabra.addEventListener('click', () => {

        const name = prompt('Ingrese su nombre...');
        const saludo = document.querySelector('h1 strong');
            saludo.innerText = name; 
    })
}

const ex4 = () => {

    const btnContactarme = document.getElementById("contactarme");
    btnContactarme.addEventListener('dblclick', () => {

        //obtener el parrafor clase parrafo-color y modificar su estilo a color rojo=style.color 

        const parrafoColor = document.querySelector('.parrafo-color')
        parrafoColor.style.color = 'red'
    })
}

const ex5 = () => {

    const btnContactarme = document.getElementById("contactarme");
    btnContactarme.addEventListener('dblclick', () => {
        
        const arrayDeColores = ['red', 'blue', 'orange', 'hotpink', 'mediumaquamarine'];

        const numeroAleatorio = Math.round(Math.random() * 4);
        //console.log(numeroAleatorio); ---> va mostrando los colores

        const parrafoColor = document.querySelector('.parrafo-color')
        parrafoColor.style.color = arrayDeColores[numeroAleatorio];
    })
}

const ex6 = () => {

    const sections = document.querySelectorAll('section');

    //iterar sobre cada section
    for (const section of sections) {
        //la funcion se escribe de la forma tradicional y no como flecha para poder ejecutar el this.queryselector .
        section.addEventListener('click', function() {
            const textoDeSection = this.querySelector('h3');
            alert('Clickeaste sobre ' + textoDeSection.innerHTML)
        })
    }
}