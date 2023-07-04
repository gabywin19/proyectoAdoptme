import React, { useState } from "react";
import Cookies from "universal-cookie";
import { useFormik } from "formik";
import validate from "./InteresadoValidaciones";
import axios from "axios";
import {useParams} from 'react-router-dom'
import { Paper, Button , Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import InputsComponents from "./InputsComponents";
import Response from "./Response";

import perroygato from "../../imagenes/perroygato.jpg";

const cookies = new Cookies();

const MascotasRegister = () => {
  const [interesado, setInteresado] = useState(false);
  const [loading, setLoading] = useState(false);

  let { id } = useParams();

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
      await axios.post("http://localhost:8080/api/interesado", valores).then((result) => {
        setInteresado(200);
      });
      
    } catch (e) {
      console.log("Error", e);
      if (e?.response?.status === 400) {
        setInteresado(400);
      } else {
        setInteresado(500);
      }
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      adoptame_id: id,
      nombre:"",
      telefono: "",
      comuna: "",
      email: "",
      edad: "",
      ocupacion: "",
      dondeVive: "",
      tipoAnimal: "PERRO",
      edadPreferencia: "",
      esterilizar: "SI",
      gastosVeterinario: "SI",
      visitasSeguimiento: "SI",
      pasearAdoptado: "SI",
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
                <img src={perroygato} alt="Logo" width="300" height="140" />
              </Grid>
              <Grid xs={12}>
              <Typography variant='h3' textAlign='center'>
               Persona Interesada
              </Typography>
              </Grid>
             
              <InputsComponents formik={formik} interesado={interesado} />

              <Grid>
                <Grid container justifyContent="center" xs={12}>
                  <Button disabled={loading} type="submit" color="inherit">
                    Registrar Interesado
                  </Button>
                </Grid>

               
                <Response interesado={interesado} />
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </main>
  );
};

export default MascotasRegister;