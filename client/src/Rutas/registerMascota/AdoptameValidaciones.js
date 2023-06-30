const validate = (valores)=>{
    let errores={};

    if (!valores.apodo) {
        errores.apodo = 'Required';
    } 

    
    if (!valores.caracteristicas) {
        errores.caracteristicas = 'Required';
    } 

    if (!valores.edad) {
        errores.edad = 'Required';
    } 

    if (!valores.descripcionMascota) {
        errores.descripcionMascota = 'Required';
    } 

    if (!valores.tipoAnimal) {
        errores.tipoAnimal = 'Required';
    } 

    if (!valores.datosMedicos) {
        errores.datosMedicos = 'Required';
    } 

    if (!valores.raza) {
        errores.raza= 'Required';
    } 

    if (!valores.imagen1) {
        errores.imagen1= 'Required';
    } 

    if (!valores.telefonoContacto) {
        errores.telefonoContacto= 'Required';
    } 

    // eslint-disable-next-line
    if( ! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valores.emailContacto))){
        errores.emailContacto= 'Correo Invalido';
    }else if (!valores.emailContacto) {
        errores.emailContacto = 'Required';
    } 

 

    if (!valores.nombreContacto) {
        errores.nombreContacto = 'Required';
    } 

  

return errores;
}

export default validate;