(function () {
    document.getElementById('lol').addEventListener('click', validar); 
})();

let json = {
    usuario: "",
    clave: ""
    }; 

    let usuario="admin";
    let clave="1234";
    localStorage.setItem("usuario",usuario);
    localStorage.setItem("clave",clave);
localStorage.setItem("json",JSON.stringify(json));

function validar(){
    var u=document.getElementById("nombre").value;
    var c=document.getElementById("clave").value;

    if (u==usuario && c==clave){
        location.href = 'html/cartas.html'
        console.log(u)
    }else{
        alert("Usuario o contraseña incorrectos "+"\n"+ "admin 1234");
       
    }  
}