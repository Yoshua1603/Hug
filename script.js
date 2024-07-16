function cambiar(){
document.getElementById("mensaje").innerText = "Enviado!";
}
setTimeout(cambiar,3000);

setTimeout(function(){
    alert("Recibiste un abrazo!");
},3400);