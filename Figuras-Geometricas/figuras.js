//Codigo del cuadrado
console.group("Cuadrado");


function perimetroCuadrado(lado) {
    return  lado * 4;
} 


function areaCuadrado(lado) {
    return  lado * lado
} 


console.groupEnd;

//Codigo del triangulo
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1+lado2+base;
} 

function areaTriangulo(base, altura) {
    return (base*altura)/2;
} 


console.groupEnd;


//Codigo del circulo
console.group("Circulo");

function diametroCirculo(radio) {
    return radio*2;
}

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) *PI
}

console.groupEnd;


// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Triangulo
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;
    const area = areaTriangulo(value1, value3);
    alert(area);
}