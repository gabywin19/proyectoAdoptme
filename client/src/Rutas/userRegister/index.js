import React, { useState } from "react";
import { useFormik } from "formik";
import validate from "./RegisterValidaciones";
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';
import { Paper, Button , Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import InputsComponents from "./InputsComponents";
import Response from "./Response";
import adoptme from '../../imagenes/adoptme.png'

const UserRegister = () => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (valores) => {
    //setUser(false);
    setLoading(true);
    console.log(valores);
    const data = new FormData();
    const userName = valores.userName;
    const email = valores.email;
    const password = valores.password;

   //data.append('imagen', valores.imagen);
   data.append('email', valores.email);
   data.append('password', valores.password);
   //data.append('confirmPassword', valores.confirmPassword);
   data.append('userName', valores.userName);
   

    try {
      await axios.post("http://localhost:8080/api/register", {userName, email, password }).then((result) => {
        setUser(200);
        navigate('/login');
      });
      
    } catch (e) {
      console.log("Error", e);
      if (e?.response?.status === 400) {
        setUser(400);
      } else {
        setUser(500);
      }
    }
    setLoading(false);
  };

  const formik = useFormik({
    initialValues: {
      imagen:null,
      email: "",
      password: "",
      confirmPassword: "",
      userName: "",      
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
                <img src={adoptme} alt="Logo" width="400" height="80" />
              </Grid>
              <Grid xs={12}>
              <Typography variant='h3' textAlign='center'>
                Registrate
              </Typography>
              </Grid>
             
              <InputsComponents formik={formik} user={user} />

              <Grid>
                <Grid container justifyContent="center" xs={12}>
                  <Button disabled={loading} type="submit" color="inherit">
                    Registrar Usuario
                  </Button>
                </Grid>

                <Grid container justifyContent="center" xs={12}>
                  <NavLink to="/login">Iniciar Sesion</NavLink>
                </Grid>
                <Response user={user} />
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </main>
  );
};

export default UserRegister;
