/*
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, 
los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
*/
function mostrar()
{
  let nombre;
  let carrera;
  let sexo;
  let cantidadMaterias;
  let notaPromedio;
  let edad;

  let flagP = 1; // A
  let nombreMejorNota; // A
  let mayorPromedio; // A

  let flagAlumna = 1; //B
  let masJoven; //B
  let nombreMasJoven; //B

  let porcentajeQuimica; //C
  let porcentajeFisica; //C
  let porcentajeSistemas; //C
  let contadorQuimica = 0; //C
  let contadorFisica = 0; //C
  let contadorSistemas = 0; //C
  let totalEstudiantes; //C

  let flagMasMaterias = 1; //D
  let maxEdad; //D
  let maxNombre; //D
  let maxMaterias; //D





  for(i = 0; i < 500; i++)
  {

    nombre = prompt("Ingrese su nombre");
    while(nombre.length == 0)
    {
      nombre = prompt("Error.Ingrese su nombre");
    }

    carrera = prompt("Ingrese su carrera.(Quimica;Fisica;Sistemas)").toLowerCase();
    while(carrera != "quimica" && carrera != "fisica" && carrera != "sistemas")
    {
      carrera = prompt("Error. Ingrese su carrera.(Quimica;Fisica;Sistemas)").toLowerCase();

    }

    sexo = prompt("Ingrese su sexo.(masculino - femenino -no binario)").toLowerCase();
    while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario")
    {
      sexo = prompt("Error.Ingrese su sexo.(masculino - femenino -no binario)").toLowerCase();
    }

    cantidadMaterias = parseInt(prompt("Ingrese la cantidad de materias.(entre 1 y 5)"));
    while(cantidadMaterias < 1 && cantidadMaterias > 5)
    {
      cantidadMaterias = parseInt(prompt("Error.Ingrese la cantidad de materias.(entre 1 y 5)"));
    }


    notaPromedio = parseInt(prompt("Ingrese la nota promedio. (entre 0 y 10)"));
    while(notaPromedio < 0 && notaPromedio > 10)
    {
      notaPromedio = parseInt(prompt("Error.Ingrese la nota promedio. (entre 0 y 10)"));
    }


    edad = parseInt(prompt("Ingrese su edad"));
    while(isNaN(edad) || edad < 0)
    {
      edad = parseInt(prompt("Error.Ingrese su edad"));
    }
//**********************fin ingreso de datos*********************************** */


//a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).

    if(carrera == "fisica")
    {
      contadorFisica++;

      if(flagP|| notaPromedio > mayorPromedio)
      {
        mayorPromedio = notaPromedio;
        nombreMejorNota = nombre;
        flag = 0;
      }

    }
    else if(carrera == "quimica"){

      contadorQuimica++;

    }
    else{
      contadorSistemas++;
    }
    //b) El nombre de la alumna mas joven.
    if(sexo == "femenino")
    {

      if(flagAlumna || edad < masJoven){

        masJoven = edad;
        nombreMasJoven = nombre;
        flag = 0;
      }

    }


    //d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
    if(carrera == "fisica" || carrera == "sistemas")
    {

      if(flagMasMaterias || cantidadMaterias > maxMaterias)
      {
        maxMaterias = cantidadMaterias;
        maxEdad = edad;
        maxNombre = nombre;
        flag = 0;

      }

    }










  }//FinFor


  totalEstudiantes = contadorFisica + contadorQuimica + contadorSistemas;
  porcentajeFisica = contadorFisica * 100 / totalEstudiantes;
  porcentajeQuimica = contadorQuimica * 100 / totalEstudiantes;
  porcentajeSistemas = contadorSistemas * 100 / totalEstudiantes;

  console.log("a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo). es : " + nombreMejorNota);
  console.log("b) El nombre de la alumna mas joven es: " + nombreMasJoven);
  console.log("c) Porcentaje de estudiantes que estudia cada carrera es: " + porcentajeSistemas+ "y el porcentaje de quimica es " + porcentajeQuimica + "y el porcentaje de Fisica es: " + porcentajeFisica);
  console.log("d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica es: " + maxEdad + "y el nombre es : " +maxNombre);









}