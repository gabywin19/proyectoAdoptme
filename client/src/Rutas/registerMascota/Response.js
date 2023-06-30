import React from 'react'
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Response = ({ mascotas }) => {
    if (mascotas === 200) { 
        return( 
        <Grid xs={12} textAlign="center">
          <Box color="success.main">La Mascota se ha Registrado con Exito</Box>
        </Grid>
      )
    }
  
    if (mascotas=== 400) {
      return (
        <Grid xs={12} textAlign="center">
          <Box color="error.main">No puedes Registrar la Mascota</Box>
        </Grid>
      )
    }

    if (mascotas === 500) {
      return (
        <Grid xs={12} textAlign="center">
          <Box color="error.main">Error al Registrar</Box>
        </Grid>
      )
    }
  
    
    return null;
  }

export default Response;
