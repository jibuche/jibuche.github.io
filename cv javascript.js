let boton=document.querySelector("#cambiar_color");

function aleatorio(){
return Math.floor(Math.random() * (255+1-0) + 0)
}
 boton.addEventListener("click", ()=>
    {
        document.body.style.backgroundColor=`rgba(${aleatorio()}, ${aleatorio()}, ${aleatorio()}, ${aleatorio()})`;
    });