import React, { useState } from "react";
import Cookies from "universal-cookie";
import { useFormik } from "formik";
import validate from "./AdoptameValidaciones";
import axios from "axios";
import { Paper, Button , Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import InputsComponents from "./InputsComponents";
import Response from "./Response";
import PetSocial from "../../imagenes/PetSocial.png";

const cookies = new Cookies();

const MascotasRegister = () => {
  const [mascotas, setMascotas] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (valores) => {
    //setMascotas(false);
    setLoading(true);
   // const data = new FormData();
    console.log(valores);
  /*  data.append('apodo', valores.apodo);
    data.append('caracteristicas', valores.caracteristicas);
    data.append('edad', valores.edad);
    data.append('descripcionMascota', valores.descripcionMascota);
    data.append('tipoAnimal', valores.tipoAnimal);
    data.append('datosMedicos', valores.datosMedicos);
    data.append('raza', valores.raza);
    data.append('imagen1', valores.imagen1);
    data.append('imagen2', valores.imagen2);
    data.append('imagen3', valores.imagen3);
    data.append('imagen4', valores.imagen4);
    data.append('imagen5', valores.imagen5);
    data.append('telefonoContacto', valores.telefonoContacto);
    data.append('emailContacto', valores.emailContacto);
    data.append('nombreContacto', valores.nombreContacto);
    data.append('userCreate', valores.userCreate);
 
    console.log(data);
  */    
    try {
      await axios.post("http://localhost:8080/api/adoptame", valores).then((result) => {
        setMascotas(200);
      });
      
    } catch (e) {
      console.log("Error", e);
      if (e?.response?.status === 400) {
        setMascotas(400);
      } else {
        setMascotas(500);
      }
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
        apodo:"",
        caracteristicas: "",
        edad: "",
        descripcionMascota: "",
        tipoAnimal: "",
        datosMedicos: "",
        raza: "",
        imagen1: "",
        imagen2: "",
        imagen3: "",
        imagen4: "",
        imagen5: "",
        telefonoContacto: "",
        emailContacto: "",
        nombreContacto: "",
        userCreate: cookies.get("usuario"),
    },
    validate,
    onSubmit: handleSubmit,
  });

  return (
    <main>
      <Grid container justifyContent="center">
        <Paper elevation={0} sx={{ mt: 4, p: 4, width: 600 }}>
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <Grid container spacing={2}>
              <Grid container justifyContent="center" alignItems="center" xs={12}>
                <img src={PetSocial} alt="Logo" width="400" height="80" />
              </Grid>
              <Grid xs={12}>
              <Typography variant='h3' textAlign='center'>
                Registrar Mascota
              </Typography>
              </Grid>
             
              <InputsComponents formik={formik} mascotas={mascotas} />

              <Grid>
                <Grid container justifyContent="center" xs={12}>
                  <Button disabled={loading} type="submit" color="inherit">
                    Registrar Mascota
                  </Button>
                </Grid>

               
                <Response mascotas={mascotas} />
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </main>
  );
};

export default MascotasRegister;