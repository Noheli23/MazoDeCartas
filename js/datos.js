document.querySelector('#cc').addEventListener('click', leer); 
document.querySelector('#cc').addEventListener('click', table); 
table();

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
    var num=document.getElementById("numero").value;
    var car=document.getElementById("carta").value;

    let nuevaC = {
        numero: num,
        carta: car,
        cant: 0
        }; 

        cartas.push(nuevaC);
        localStorageCartas(cartas);
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

function table(){
 var list = getCartas();
 tbody = document.getElementById('tabla');
 
tbody.innerHTML='';

for(var i=0; i<list.length; i++){
    var row= tbody.insertRow(i),
    num=row.insertCell(0),
    car=row.insertCell(1),
    can=row.insertCell(2);

    num.innerHTML=list[i].numero;
    car.innerHTML=list[i].carta;
    can.innerHTML=list[i].cant;

    tbody.appendChild(row);
}

}
