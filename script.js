function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

const productos = [
    { categoria: "Resistencias", nombre: "Resistor 1kΩ", precio: "$2000", imagen: "images/resistor 1k.jpeg" },
    { categoria: "Resistencias", nombre: "Resistor 10kΩ", precio: "$2400", imagen: "images/Resistor 10kΩ.jpg" },
    { categoria: "Resistencias", nombre: "Resistor 100Ω", precio: "$1600", imagen: "images/Resistor 100Ω.jpeg" },
    { categoria: "Resistencias", nombre: "Resistor 220Ω", precio: "$1800", imagen: "images/resistor.jpg" },
    { categoria: "Resistencias", nombre: "Resistor 470Ω", precio: "$2200", imagen: "images/resistor.jpg" },
    { categoria: "Capacitores", nombre: "Capacitor 10uF", precio: "$4000", imagen: "images/Capacitor 10uF.jpg" },
    { categoria: "Capacitores", nombre: "Capacitor 100uF", precio: "$4800", imagen: "images/Capacitor 100uF.jpeg" },
    { categoria: "Capacitores", nombre: "Capacitor 1uF", precio: "$3600", imagen: "images/Capacitor 1uF.jpeg" },
    { categoria: "Capacitores", nombre: "Capacitor 47uF", precio: "$4400", imagen: "images/Capacitor 47uF.jpeg" },
    { categoria: "Capacitores", nombre: "Capacitor 330uF", precio: "$6000", imagen: "images/Capacitor 330uF.jpeg" },
    { categoria: "Microcontroladores", nombre: "ATmega328P", precio: "$16000", imagen: "images/microcontroladores ATmega328P.jpeg" },
    { categoria: "Microcontroladores", nombre: "PIC16F877A", precio: "$22000", imagen: "images/Microcontroladores PIC16F877A.jpeg" },
    { categoria: "Microcontroladores", nombre: "ESP8266", precio: "$24000", imagen: "images/Microcontroladores ESP8266.jpeg" },
    { categoria: "Microcontroladores", nombre: "STM32F103C8T6", precio: "$15200", imagen: "images/Microcontroladores STM32F103C8T6.jpeg" },
    { categoria: "Microcontroladores", nombre: "ESP32", precio: "$32000", imagen: "images/microcontroladores ESP32.jpeg" },
    { categoria: "Diodos", nombre: "Diodo 1N4007", precio: "$800", imagen: "images/Diodo 1N4007.jpeg" },
    { categoria: "Diodos", nombre: "Diodo Zener 5.1V", precio: "$1200", imagen: "images/Diodo Zener 5.1V.jpeg" },
    { categoria: "Diodos", nombre: "Diodo LED Rojo", precio: "$600", imagen: "images/Diodo LED Rojo.jpeg" },
    { categoria: "Diodos", nombre: "Diodo Schottky 1N5819", precio: "$1000", imagen: "images/Diodo Schottky 1N5819.jpeg" },
    { categoria: "Diodos", nombre: "Diodo Emisor de Luz Azul", precio: "$720", imagen: "images/Diodo Emisor de Luz Azul.jpeg" },
    { categoria: "Transistores", nombre: "Transistor NPN BC547", precio: "$1400", imagen: "images/Transistor NPN BC547.jpeg" },
    { categoria: "Transistores", nombre: "Transistor PNP BC557", precio: "$1600", imagen: "images/Transistor PNP BC557.jpeg" },
    { categoria: "Transistores", nombre: "Transistor MOSFET IRF540", precio: "$6000", imagen: "images/Transistor MOSFET IRF540.jpeg" },
    { categoria: "Transistores", nombre: "Transistor TIP120", precio: "$8000", imagen: "images/Transistor TIP120.jpeg" },
    { categoria: "Transistores", nombre: "Transistor 2N2222", precio: "$2000", imagen: "images/Transistor 2N2222.jpeg" }
];

function mostrarProductos(filtro = "Todos") {
    const contenedor = document.getElementById("productos");
    contenedor.innerHTML = "";
    productos.filter(p => filtro === "Todos" || p.categoria === filtro)
        .forEach(p => {
            contenedor.innerHTML += `
                <div class="producto">
                    <img src="${p.imagen}" alt="${p.nombre}">
                    <h3>${p.nombre}</h3>
                    <p>Precio: ${p.precio}</p>
                </div>
            `;
        });
}
function filtrarProductos(categoria) {
    mostrarProductos(categoria);
}
mostrarProductos();

function buscarProductos() {
    const input = document.getElementById('busqueda').value.toLowerCase();
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        const nombre = producto.querySelector('h3').textContent.toLowerCase();
        const descripcion = producto.querySelector('p').textContent.toLowerCase();
        if (nombre.includes(input) || descripcion.includes(input)) {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}


document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".carousel-container img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let index = 0;

    function showImage(idx) {
        images.forEach(img => img.classList.remove("active"));
        images[idx].classList.add("active");
    }

    prevBtn.addEventListener("click", function() {
        index = (index > 0) ? index - 1 : images.length - 1;
        showImage(index);
    });

    nextBtn.addEventListener("click", function() {
        index = (index < images.length - 1) ? index + 1 : 0;
        showImage(index);
    });
});