(function () {
    document.querySelector('#cc').addEventListener('click', leer);
    table(); 
})();

$(".btn").click(function(){
    var datos = localStorage.getItem('datos');
  
      datos = JSON.parse(datos);
  
      for(let item of datos) {
          if(item.numero == this.dataset.carta) {
              item.cant ++;
          }
      }
  
      localStorage.setItem('datos', JSON.stringify(datos));
      table();
  });

var cartas=[];

function leer(){
    var num=document.getElementById("numero").value;
    var car=document.getElementById("carta").value;

    if(num>13){
        alert("Sólo debe ingresar un número del 1 al 13")
    }else{
     let nuevaC = {
        numero: num,
        carta: car,
        cant: 0
        }; 

        cartas.push(nuevaC);
        localStorageCartas(cartas);   
    }

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
table();