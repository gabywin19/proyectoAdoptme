const validate = (valores)=>{
    let errores={};
   
     
    // eslint-disable-next-line
    if( ! (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valores.email))){
        errores.email= 'Correo Invalido';
    }else if (!valores.email) {
        errores.email = 'Required';
    } 

    if(valores.password.length < 8){
        errores.password= 'La Contraseña debe tener Minimo 8 Carácteres';
    }else if (!valores.password) {
        errores.password = 'Required';
    } 

    if(valores.password !== valores.confirmPassword){
        errores.confirmPassword= 'La Contraseña debe Coincidir con el Campo Contraseña';
    }else if (!valores.confirmPassword) {
        errores.confirmPassword = 'Required';
    } 

    if(valores.userName.length < 8){
        errores.userName= 'El Nombre del usuario debe tener Minimo 8 Carácteres';
    }else if (!valores.userName) {
        errores.userName = 'Required';
    } 

    

 return errores;
}

export default validate;