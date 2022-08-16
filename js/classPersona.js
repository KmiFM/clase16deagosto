//usando export se exporta la clase para usarla desde otro archivo para reutilizarlo en app

export class Persona {
    constructor(nombre,edad,dni,sexo,peso,altura,anioNacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.dni=dni;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.anioNacimiento=anioNacimiento;
    }
    mostrarDetalleGeneracion(generacion, marcoTemporal, historia, rasgo) {
        return `<ul>
        <li> Generación: ${generacion}</li>
        <li> Marco temporal:  ${marcoTemporal} </li>
        <li> Circunstancia histórica:  ${historia}</li>
        <li> Rasgo característico: ${rasgo} </li>
      </ul>
      `;
      }
      mostrarGeneracion() {
        if (this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948) {
          return this.mostrarDetalleGeneracion(
            "Silent Generation",
            "1930-1948",
            "Conflictos bélicos",
            "Austeridad 😐"
          );
        } else if (this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968) {
          return this.mostrarDetalleGeneracion(
            "baby Boom",
            "1949-1968",
            "Paz y explosión demográfica",
            "Ambicion 🤑"
          );
        } else if (this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980) {
          return this.mostrarDetalleGeneracion(
            "Generación X",
            "1969 - 1980",
            "Crisis del 73 y transición española",
            "Obsesión por el exito 😎"
          );
        } else if (this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993) {
          return this.mostrarDetalleGeneracion(
            "Generación Y (Millenials)",
            "1981 - 1993",
            "Inicio de la digitalización",
            "Frustración 😕"
          );
        } else if (this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010) {
          return this.mostrarDetalleGeneracion(
            "Generación Z (Centennials)",
            "1994 - 2010",
            "Expansión masiva de internet",
            "Irreverencia 😋"
          );
        } else if (this.anioNacimiento >= 2011) {
          return this.mostrarDetalleGeneracion(
            "Generación Alfa",
            "2011 - Actualidad",
            "Nativos Digitales al 100%",
            "Son predilectos 😜"
          );
        } else {
          return '<p>No se posee datos para la fecha seleccionada</p>';
        }
      }
      
    esMayorDeEdad(){
        if(this.edad >= 18 ){
            return (`${this.nombre} es mayor de edad.<br>`);
         }
    }
    mostrarDatos(){
        return (`
        <ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>DNI: ${this.dni}</li>
        <li>Genero:  ${(this.sexo ==='H')?'Hombre':'Mujer'}</li>
        <li>Peso: ${this.peso}</li>
        <li>Altura: ${this.altura}</li>
        <li>Año de nacimiento: ${this.anioNacimiento}</li>
        <li>DNI Aleatorio generado: ${this.dni}</li>
        </ul>
        `);
    }
     generaDNI(){
        let numRandom=Math.round(Math.random()*(99999999-10000000)+parseInt(1));
        this.nuevoDni=numRandom;
    }
  
    get mostrarNombre(){
        return this.nombre;
      }
  }