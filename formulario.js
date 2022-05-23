var datosArray = []
var temArr = []

var mostrarDatos = function () {
    temArr = JSON.parse(localStorage.getItem('File'))
    document.getElementById('tabla').innerHTML = "";
  for (let a = 0; a < temArr.length; a++) {
      document.getElementById('tabla').innerHTML += '<tr><td>'+temArr[a].Nombre+'</td><td>'+temArr[a].Apellido+'</td><td>'+temArr[a].Direccion+'</td><td><button type="button" onclick="eliminar('+a+')" class="btn btn-primary btn-sm">Eliminar</button></td></tr>'    
  }
  datosArray = temArr;
}

var recopilarDatos = function (a,b,c) {
    var datos = {
        Nombre : a,
        Apellido : b,
        Direccion : c
    };
    datosArray.push(datos);
    localStorage.setItem('File', JSON.stringify(datosArray));
}

var guardarDatos = function () {
    var dato1 = document.getElementById('nombre').value;
    var dato2 = document.getElementById('apellido').value;
    var dato3 = document.getElementById('direccion').value;

    recopilarDatos(dato1,dato2,dato3);
    mostrarDatos()
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('direccion').value = "";
}

var cargaInicial = function () {
    temArr = JSON.parse(localStorage.getItem('File'))
    mostrarDatos()
}

cargaInicial()

var eliminar = function (indice) {
   datosArray.splice(indice,1)
   localStorage.setItem('File', JSON.stringify(datosArray))
   mostrarDatos()
}




