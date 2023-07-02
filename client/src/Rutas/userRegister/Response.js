import React from 'react'
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Response = ({ user }) => {
    if (user === 200) { 
        return( 
        <Grid xs={12} textAlign="center">
          <Box color="success.main">Te has Registrado con Exito Por Favor Inicia Sesion</Box>
        </Grid>
      )
    }
  
    if (user=== 400) {
      return (
        <Grid xs={12} textAlign="center">
          <Box color="error.main">No puedes Registrarte</Box>
        </Grid>
      )
    }

    if (user === 500) {
      return (
        <Grid xs={12} textAlign="center">
          <Box color="error.main">Error al Registrar</Box>
        </Grid>
      )
    }
  
    
    return null;
  }

export default Response;
