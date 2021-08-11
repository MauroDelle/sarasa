/*
Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas)
*/
function mostrar()
{

let tipo;
let origen;
let precio;
let respuesta;

let acumuladorMuñecas = 0; //A
let acumuladorRompecabezas = 0; //A
let acumuladorPelota = 0; //A
let tipoMasVendido; //A

let acumuladorPrecioImportado = 0; //B 
let contadorJuguetesImportados = 0; //B
let promedioImportados; //B

let total; //C

let flagB = 1; //D
let masBarato; //D

let iva;
let precioFinalConIva;




do{

  tipo = prompt("Ingrese el tipo de juguete.(muñeca, “rompecabezas” o “pelota”)").toLowerCase();
  while(tipo != "muñeca" && tipo != "rompecabezas" && tipo != "pelota")
  {
    tipo = prompt("Error.Ingrese el tipo de juguete.(muñeca, “rompecabezas” o “pelota”)").toLowerCase();
  }

  origen = prompt("Ingrese el origen del producto. (nacional, importado)").toLowerCase();
  while(origen != "nacional" && origen != "importado")
  {
    origen = prompt("Error.Ingrese el origen del producto. (nacional, importado)").toLowerCase();

  }

  precio = parseInt(prompt("Ingrese el precio del producto. (entre 1000 y 5000 pesos)"));
  while(isNaN(precio) || precio < 1000 && precio > 5000)
  {
    precio = parseInt(prompt("Error.Ingrese el precio del producto. (entre 1000 y 5000 pesos)"));

  }

//c- La recaudacion total

total = total + precio;

  
  if(tipo == "muñeca"){

    acumuladorMuñecas += tipo;

  }
  else if(tipo == "pelota"){

    acumuladorPelota += tipo;

  }
  else{

    acumuladorRompecabezas += tipo;
  }


//b- El promedio de precio de los juguetes importados

if(origen == "importado")
{
  acumuladorPrecioImportado += precio;
  contadorJuguetesImportados++;

}


//d- Cual es el precio del rompecabezas nacional mas barato

if(origen == "nacional" && tipo == "rompecabezas")
{

  if(flagB || precio < masBarato)
  {
    masBarato = precio;
  }

}








  respuesta = prompt("Desea seguir ingresando ventas? si/no").toLowerCase();
}while(respuesta == "si"); //FinWHile



//a- El tipo de juguete mas vendido

if(acumuladorMuñecas > acumuladorPelota && acumuladorMuñecas > acumuladorRompecabezas)
{
  tipoMasVendido = "muñecas";
}
else if(acumuladorPelota >= acumuladorMuñecas && acumuladorPelota > acumuladorRompecabezas)
{
  tipoMasVendido = "pelota";
} 
else{
  tipoMasVendido = "rompecabezas"
}


//b- El promedio de precio de los juguetes importados
promedioImportados = acumuladorPrecioImportado / contadorJuguetesImportados;


iva = (total * 21) / 100;
precioFinalConIva = total + iva;




console.log("a- El tipo de juguete mas vendido es: " + tipoMasVendido);
console.log("b- El promedio de precio de los juguetes importados es: " +promedioImportados);
console.log("c- La recaudacion total es : " + total);
console.log("d- Cual es el precio del rompecabezas nacional mas barato: " + masBarato);
console.log("Cuanto se percibio de iva en total (es el 21% de las ventas): " + precioFinalConIva)

}//FinFuncion
