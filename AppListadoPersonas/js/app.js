const personas = [
    new Persona('Juan', 'Perez', 25),
    new Persona('Carla', 'Lara', 28)
];


function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido} ${persona.edad}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const edad = forma['edad'];
    if(nombre.value != '' && apellido.value != '' && edad.value != ''){
        const persona = new Persona(nombre.value, apellido.value, edad.value);
        //Para limpiar los campos luego de agregar a la persona.
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('edad').value = '';
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        console.log('No hay información que agregar');
    }
}