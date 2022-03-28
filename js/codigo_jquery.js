$("document").ready(inicio);

function inicio(){
    $("button").click(saluda);
}
function saluda(){
    $(".caja").html("Hola Mundo");

}