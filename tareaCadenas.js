//Tarea OpenBootcamp

//- Una cadena de texto con tu Nombre
//- Otra cadena de texto con tu Apellido
let miNombre = "Jose Luis  "
let miApellido = "Echeverri "
//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = miNombre + " " +  miApellido
console.log(estudiante);
//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);
//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLocaleLowerCase();
console.log(estudianteMinus);
//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numeroLetras = estudiante.length
console.log(numeroLetras);
//- Una variable que contenga la primera letra del Nombre
let primerLetraNombre = miNombre.charAt(0)
console.log(primerLetraNombre)
//- Otra variable que contenga la última letra del Apellido
let ultimaLetraApellido = miApellido.charAt(8)
console.log(ultimaLetraApellido)
//- Una cadena de texto que elimine los espacios de la variable "estudiante"
let trim = estudiante.trim().length
console.log(trim)
//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let nombreContenido = estudiante.includes("Jose Luis")
console.log(nombreContenido)

