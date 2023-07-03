import React from 'react'
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const Response = ({ interesado }) => {
    if (interesado === 200) { 
        return( 
        <Grid xs={12} textAlign="center">
          <Box color="success.main">El Interesado se ha Registrado con Exito</Box>
        </Grid>
      )
    }
  
    if (interesado=== 400) {
      return (
        <Grid xs={12} textAlign="center">
          <Box color="error.main">No puedes Registrar el Interesado</Box>
        </Grid>
      )
    }

    if (interesado === 500) {
      return (
        <Grid xs={12} textAlign="center">
          <Box color="error.main">Error al Registrar</Box>
        </Grid>
      )
    }
  
    
    return null;
  }

export default Response;
