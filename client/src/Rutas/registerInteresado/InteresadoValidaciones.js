const validate = (valores)=>{
    let errores={};

    if (!valores.nombre) {
        errores.nombre = 'Required';
    } 

    
    if (!valores.telefono) {
        errores.telefono = 'Required';
    } 

    if (!valores.comuna) {
        errores.comuna = 'Required';
    } 

    // eslint-disable-next-line
    if( ! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valores.email))){
        errores.email= 'Correo Invalido';
    }else if (!valores.email) {
        errores.email = 'Required';
    } 

    if (!valores.edad) {
        errores.edad = 'Required';
    } 

    if (!valores.ocupacion) {
        errores.ocupacion = 'Required';
    } 

    if (!valores.dondeVive) {
        errores.dondeVive= 'Required';
    } 

    if (!valores.tipoAnimal) {
        errores.tipoAnimal= 'Required';
    } 

    if (!valores.edadPreferencia) {
        errores.edadPreferencia= 'Required';
    } 

    if (!valores.esterilizar) {
        errores.esterilizar= 'Required';
    } 


   
    if (!valores.gastosVeterinario) {
        errores.gastosVeterinario = 'Required';
    } 

    if (!valores.visitasSeguimiento) {
        errores.visitasSeguimiento = 'Required';
    } 

    if (!valores.pasearAdoptado) {
        errores.pasearAdoptado = 'Required';
    } 


  

return errores;
}

export default validate;