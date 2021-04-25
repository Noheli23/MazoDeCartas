(function () {
    document.getElementById('cc').addEventListener('click', getCartas()); 
})();

const url= '../data.json'

fetch(url)
.then(response => response.json())
.then(data => {

    let res=document.getElementById('tabla')
    for (let i of data) {
        
        res.innerHTML+= `
         <tr>
            <td>${i.numero}</td>
            <td>${i.carta}</td>
            <td>${i.cant}</td>
                    
            </tr>
          `          
    }

})


var cartas=[];

function leer(){
    var num=document.getElementById("numero");
    var car=document.getElementById("carta");

    let nuevaC = {
        numero: num,
        carta: car,
        cant: 0
        }; 

        cartas.push(nuevaC);
}

function getCartas(){
    var storedList=localStorage.getItem('datos');

    if(storedList==null){
        cartas=[];
    }else{
        cartas=JSON.parse(storedList);
        console.log(cartas);
    }
    return cartas;
    
}

function localStorageCartas(list){
localStorage.setItem('datos',JSON.stringify(list));
}