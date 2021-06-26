$(document).ready(function(){
 //alert("hola mundo desde jquery");
//let varBoton=$('button').html();
// console.log(varBoton);
// $('button').html(" cambiando desde query");
// $('.btn').html(" cambiando desde clase del boton ");//el boton tiene dos clases 
// $('#boton').html(" cambiando desde desde el ID "); //llamado desde la clase Id 
// $('button').html(" cambiando desde etiqueta");
// $('#subcontenedor button').html(" desde subcon");
   $('button:first').html("primero");
   $('button:last').html("ultimo");
});


//document.querySelector('#boton').innerHTML=" cambiando desde js";