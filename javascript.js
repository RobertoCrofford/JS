/*$(document).ready(function(){
 //alert("hola mundo desde jquery");
//let varBoton=$('button').html();
// console.log(varBoton);
// $('button').html(" cambiando desde query");
// $('.btn').html(" cambiando desde clase del boton ");//el boton tiene dos clases 
// $('#boton').html(" cambiando desde desde el ID "); //llamado desde la clase Id 
// $('button').html(" cambiando desde etiqueta");
// $('#subcontenedor button').html(" desde subcon");
//    $('button:first').html("primero");
//    $('button:last').html("ultimo");
    $('#boton').addClass('btn-danger');
    $('#boton').removeClass('btn-primary');

    $('#subcontenedor').append(' <button type="button" class="btn btn-danger"> agregado con append</button>');
    $('#subcontenedor').prepend(' <button type="button" class="btn btn-danger"> agregado con prepend</button>');

    // $('#boton').css('color', 'blue');
    // $('#boton').css('background-color', 'yellow');
    $('#boton').css({'color':'blue', 'background-color' :'yellow'});
    // ('#subcontenedor').remove();
    // $('img').attr('src', 'logo2.jpg');// es la segunda imagen logo2
    $('img').attr({'src':'logo2.jpg', 'width':'400px'});
});*/
$(document).ready(function(){
    $('#boton').click(function (e) { 
        e.preventDefault();
        $('img').attr('src', 'logo2.jpg');
    });
    
    $('#subcontenedor button:nth-child(1)').click(function (e) { 
        e.preventDefault();
        $('img').attr('width', '450px');
    });

    $('#subcontenedor button:nth-child(2)').click(function (e) { 
        e.preventDefault();
        let margen= $('img').css('margin-left');
        //alerta(margen); 
        margen=parseInt(margen.replace('px',''));
        margen=margen+30;
        $('img').css('margin-left',margen+'px');
    });

    $('#subcontenedor button:nth-child(3)').click(function (e) { 
        e.preventDefault();
        $('img').toggleClass('d-none');
    });
});

//document.querySelector('#boton').innerHTML=" cambiando desde js";