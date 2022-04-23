function btnSuscripcion()
{
alert("Las suscripciones se habilitarán pronto");

// De esta forma creamos nuestro alert con las opciones
//let age = prompt ('¿Desea dejar una consulta online?');
//alert(`Tienes ${age} años!`); //Tienes 100 años!
// De esta forma creamos nuestro alert con las opciones
var respuesta = confirm("¿Desea dejar una consulta online?")
         
if(respuesta)
  window.location.replace(href="contacto.html");

else
  window.location.href = "inicio.html";

}

function btnConfirmar() 
{
  
  var elem = document.getElementById('nombre').value;
  alert(`Gracias por tu mensaje,${elem} !`); 
  
}

function switchSheet() {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "modoDia.css") {
    theme.href = "modoNoche.css";
  } else {
    theme.href = "modoDia.css";
  }
}