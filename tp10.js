function generarSecuencia() {
  var semilla = parseInt(document.getElementById('semilla').value);
  var secuencia = [];
  
 
  while (semilla !== 1) {
    secuencia.push(semilla);
    if (semilla % 2 === 0) {
      semilla = semilla / 2;
    } else {
      semilla = semilla * 3 + 1;
    }
  }
  secuencia.push(1); 
  
  mostrarResultados(secuencia);
}

function mostrarResultados(secuencia) {
  var longitud = secuencia.length;
  var maximo = Math.max(...secuencia);

  var resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '<p>Longitud de la secuencia: ' + longitud + '</p>';
  resultadoDiv.innerHTML += '<p>Número más grande: ' + maximo + '</p>';
}
