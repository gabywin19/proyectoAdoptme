import React from "react";
import { TextField, MenuItem, Select, InputLabel } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const InputsComponents = ({ formik, loading }) => {
  return (
    <>
    
     
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="apodo"
          name="apodo"
          label="Apodo"
          value={formik.values.apodo}
          onChange={formik.apodo}
          error={formik.touched.apodo && Boolean(formik.errors.apodo)}
          helperText={formik.touched.apodo && formik.errors.apodo}
        />
      </Grid>

      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="caracteristicas"
          name="caracteristicas"
          label="Carácteristicas"
          value={formik.values.caracteristicas}
          onChange={formik.caracteristicas}
          error={formik.touched.caracteristicas && Boolean(formik.errors.caracteristicas)}
          helperText={formik.touched.caracteristicas && formik.errors.caracteristicas}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="edad"
          name="edad"
          label="Edad"
          value={formik.values.edad}
          onChange={formik.edad}
          error={formik.touched.edad && Boolean(formik.errors.edad)}
          helperText={formik.touched.edad && formik.errors.edad}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="descripcionMascota"
          name="descripcionMascota"
          label="Descripción de la Mascota"
          value={formik.values.descripcionMascota}
          onChange={formik.descripcionMascota}
          error={formik.touched.descripcionMascota && Boolean(formik.errors.descripcionMascota)}
          helperText={formik.touched.descripcionMascota && formik.errors.descripcionMascota}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="tipoAnimal"
          name="tipoAnimal"
          label="Tipo de Animal"
          value={formik.values.tipoAnimal}
          onChange={formik.tipoAnimal}
          error={formik.touched.tipoAnimal && Boolean(formik.errors.tipoAnimal)}
          helperText={formik.touched.tipoAnimal && formik.errors.tipoAnimal}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="datosMedicos"
          name="datosMedicos"
          label="Datos Medicos"
          value={formik.values.datosMedicos}
          onChange={formik.datosMedicos}
          error={formik.touched.datosMedicos && Boolean(formik.errors.datosMedicos)}
          helperText={formik.touched.datosMedicos && formik.errors.datosMedicos}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="raza"
          name="raza"
          label="Raza"
          value={formik.values.raza}
          onChange={formik.raza}
          error={formik.touched.raza && Boolean(formik.errors.raza)}
          helperText={formik.touched.raza && formik.errors.raza}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="imagen1"
          name="imagen1"
          label="Imagen 1"
          value={formik.values.imagen1}
          onChange={formik.imagen1}
          error={formik.touched.imagen1 && Boolean(formik.errors.imagen1)}
          helperText={formik.touched.imagen1 && formik.errors.imagen1}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="imagen2"
          name="imagen2"
          label="Imagen 2"
          value={formik.values.imagen2}
          onChange={formik.imagen2}
          error={formik.touched.imagen2 && Boolean(formik.errors.imagen2)}
          helperText={formik.touched.imagen2 && formik.errors.imagen2}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="imagen3"
          name="imagen3"
          label="Imagen 3"
          value={formik.values.imagen3}
          onChange={formik.imagen3}
          error={formik.touched.imagen3 && Boolean(formik.errors.imagen3)}
          helperText={formik.touched.imagen3 && formik.errors.imagen3}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="imagen4"
          name="imagen4"
          label="Imagen 4"
          value={formik.values.imagen4}
          onChange={formik.imagen4}
          error={formik.touched.imagen4 && Boolean(formik.errors.imagen4)}
          helperText={formik.touched.imagen4 && formik.errors.imagen4}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="imagen5"
          name="imagen5"
          label="Imagen 5"
          value={formik.values.imagen5}
          onChange={formik.imagen5}
          error={formik.touched.imagen5 && Boolean(formik.errors.imagen5)}
          helperText={formik.touched.imagen5 && formik.errors.imagen5}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="telefonoContacto"
          name="telefonoContacto"
          label="Telefono del Contacto"
          value={formik.values.telefonoContacto}
          onChange={formik.telefonoContacto}
          error={formik.touched.telefonoContacto && Boolean(formik.errors.telefonoContacto)}
          helperText={formik.touched.telefonoContacto && formik.errors.telefonoContacto}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="emailContacto"
          name="emailContacto"
          label="Email del Contacto"
          value={formik.values.emailContacto}
          onChange={formik.emailContacto}
          error={formik.touched.emailContacto && Boolean(formik.errors.emailContacto)}
          helperText={formik.touched.emailContacto && formik.errors.emailContacto}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="nombreContacto"
          name="nombreContacto"
          label="Nombre del Contacto"
          value={formik.values.nombreContacto}
          onChange={formik.nombreContacto}
          error={formik.touched.nombreContacto && Boolean(formik.errors.nombreContacto)}
          helperText={formik.touched.nombreContacto && formik.errors.nombreContacto}
        />
      </Grid>
      
    </>
  );
};

export default InputsComponents;