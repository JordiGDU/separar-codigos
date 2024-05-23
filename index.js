function separarNumeros() {
    // Obtener el valor del campo de entrada
    let input = document.getElementById("numberInput").value;
    
    // Separar los números utilizando una expresión regular
    let numbers = input.split(/[-/\s]+/);
    
    // Obtener el elemento donde se mostrará el resultado
    let resultDiv = document.getElementById("result");
    
    // Limpiar el contenido anterior del resultado
    resultDiv.innerHTML = "";
    
    // Crear una lista para mostrar los números en columna
    let ul = document.createElement("ul");
    
    // Añadir cada número como un elemento de la lista
    numbers.forEach(function(number) {
        let li = document.createElement("li");
        li.textContent = number;
        ul.appendChild(li);
    });
    
    // Añadir la lista al resultado
    resultDiv.appendChild(ul);
}
