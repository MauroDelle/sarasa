/*
Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de
 cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad
*/
function mostrar()
{
  let nombre;
  let tipo;
  let sangre;
  let edad;
  let sexo;
  let respuesta;

  let contadorReptiles = 0; //A
  let acumuladorEdadReptiles = 0; // A
  let promedioEdadReptiles = 0; // A

  let flagM = 1; //B
  let masJoven; // B
  let tipoMasJoven; // B
  let sexoMasJoven; // B

  let contadorMamiferos = 0; //c
  let contadorAves = 0; // C
  let totalMascotas; //C
  let porcentajeMascotas; //C

  let mayorCantidadMascotas; // D



do{

  nombre = prompt("Ingrese el nombre de su mascota.");
  while(nombre.length < 3 || nombre.length > 8)
  {
    nombre = prompt("Error.Ingrese el nombre de su mascota.");

  }

  tipo = prompt("Ingrese el tipo de su mascota.(“mamifero”, “ave”, “reptil”)").toLowerCase();
  while(tipo != "mamifero" && tipo != "ave" && tipo != "reptil")
  {
    tipo = prompt("Error.Ingrese el tipo de su mascota.(“mamifero”, “ave”, “reptil”)").toLowerCase();
  }

  if(tipo == "reptil")
  {
    sangre = "fria";
  }
  else
  {
    sangre = prompt("Ingrese que tipo de sangre es.( fria, calida)").toLowerCase();
    while(sangre != "fria" && sangre != "calida")
    {
      sangre = prompt("Error.Ingrese que tipo de sangre es.( fria, calida)").toLowerCase();

    }
  }


  edad = parseInt(prompt("Ingrese la edad"));
  while(isNaN(edad) || edad <= 0)
  {
    edad = parseInt(prompt("Error.Ingrese la edad"));
  }


  sexo = prompt("Ingrese el sexo.( “m” de macho o “h” de hembra )").toLowerCase();
  while(sexo != "m" && sexo != "h")
  {
    sexo = prompt("Error.Ingrese el sexo.( “m” de macho o “h” de hembra )").toLowerCase();
  }


  if(tipo == "reptil")
  {
    acumuladorEdadReptiles += edad;
    contadorReptiles++;

  }
  else if(tipo == "ave")
  {
    contadorAves++;
  }
  else{
    contadorMamiferos++;
  }
  if(flagM || edad < masJoven)
  {
    masJoven = edad;
    tipoMasJoven = tipo;
    sexoMasJoven = sexo;
    flag = 0;
  }



  respuesta = prompt("Desea seguir ingresando animales? si/no").toLowerCase();
}while(respuesta == "si");


promedioEdadReptiles = acumuladorEdadReptiles / contadorReptiles; // A

totalMascotas = contadorAves + contadorMamiferos + contadorReptiles; // C
porcentajeMascotas = contadorAves * 100 / totalMascotas; // C



if(contadorAves > contadorMamiferos && contadorAves > contadorReptiles)
{
  mayorCantidadMascotas = "aves";
}
else if(contadorMamiferos >= contadorAves && contadorMamiferos > contadorReptiles)
{
  mayorCantidadMascotas = "mamiferos";
}
else{
  mayorCantidadMascotas = "reptiles";
}






console.log("El promedio de edad de los reptiles es: " + promedioEdadReptiles);
console.log("b- tipo y sexo de la mascota mas joven es " + tipoMasJoven + " y el sexo es " + sexoMasJoven);
console.log("c- Del total de mascotas que porcentaje son aves: " + porcentajeMascotas);
console.log("d- De que tipo de mascota hay mas cantidad: " + mayorCantidadMascotas);




}//FinFuncion
