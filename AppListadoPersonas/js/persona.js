class Persona{

    constructor(nombre, apellido, edad) {
         this._nombre = nombre;
         this._apellido = apellido;
         this._edad = edad;
    }
   
    get nombre(){
         return this._nombre;
    }

    set nombre(nombre){
        this._nombre = this.nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){ 
       return this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(apellido){
        return this._edad = this.edad;
    }
}