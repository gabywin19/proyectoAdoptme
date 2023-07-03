import React from "react";
import { TextField} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const InputsComponents = ({ formik, loading }) => {
  return (
    <>
     <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="nombre"
          name="nombre"
          label="Nombre"
          value={formik.values.nombre}
          onChange={formik.handleChange}
          error={formik.touched.nombre && Boolean(formik.errors.nombre)}
          helperText={formik.touched.nombre && formik.errors.nombre}
        />
      </Grid>

      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="telefono"
          name="telefono"
          label="Telefono"
          value={formik.values.telefono}
          onChange={formik.handleChange}

          error={formik.touched.telefono && Boolean(formik.errors.telefono)}
          helperText={formik.touched.telefono && formik.errors.telefono}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="comuna"
          name="comuna"
          label="Comuna"
          value={formik.values.comuna}
          onChange={formik.handleChange}
          error={formik.touched.comuna && Boolean(formik.errors.comuna)}
          helperText={formik.touched.comuna && formik.errors.comuna}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
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
          onChange={formik.handleChange}
          error={formik.touched.edad && Boolean(formik.errors.edad)}
          helperText={formik.touched.edad && formik.errors.edad}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="ocupacion"
          name="ocupacion"
          label="Ocupacion"
          value={formik.values.ocupacion}
          onChange={formik.handleChange}
          error={formik.touched.ocupacion && Boolean(formik.errors.ocupacion)}
          helperText={formik.touched.ocupacion && formik.errors.ocupacion}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="dondeVive"
          name="dondeVive"
          label="Ubicación"
          value={formik.values.dondeVive}
          onChange={formik.handleChange}
          error={formik.touched.dondeVive && Boolean(formik.errors.dondeVive)}
          helperText={formik.touched.dondeVive && formik.errors.dondeVive}
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
          onChange={formik.handleChange}
          error={formik.touched.tipoAnimal && Boolean(formik.errors.tipoAnimal)}
          helperText={formik.touched.tipoAnimal && formik.errors.tipoAnimal}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="edadPreferencia"
          name="edadPreferencia"
          label="Preferencia de Edad"
          value={formik.values.edadPreferencia}
          onChange={formik.handleChange}
          error={formik.touched.edadPreferencia && Boolean(formik.errors.edadPreferencia)}
          helperText={formik.touched.edadPreferencia && formik.errors.edadPreferencia}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="esterilizar"
          name="esterilizar"
          label="Esterilizar"
          value={formik.values.esterilizar}
          onChange={formik.handleChange}
          error={formik.touched.esterilizar && Boolean(formik.errors.esterilizar)}
          helperText={formik.touched.esterilizar && formik.errors.esterilizar}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="gastosVeterinario"
          name="gastosVeterinario"
          label="Gastos Medicos"
          value={formik.values.gastosVeterinario}
          onChange={formik.handleChange}
          error={formik.touched.gastosVeterinario && Boolean(formik.errors.gastosVeterinario)}
          helperText={formik.touched.gastosVeterinario && formik.errors.gastosVeterinario}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="visitasSeguimiento"
          name="visitasSeguimiento"
          label="Visitas-Seguimiento"
          value={formik.values.visitasSeguimiento}
          onChange={formik.handleChange}
          error={formik.touched.visitasSeguimiento && Boolean(formik.errors.visitasSeguimiento)}
          helperText={formik.touched.visitasSeguimiento && formik.errors.visitasSeguimiento}
        />
      </Grid>
      <Grid xs={12}>
        <TextField
          fullWidth
          disabled={loading}
          id="pasearAdoptado"
          name="pasearAdoptado"
          label="Pasear Adoptado"
          value={formik.values.pasearAdoptado}
          onChange={formik.handleChange}
          error={formik.touched.pasearAdoptado && Boolean(formik.errors.pasearAdoptado)}
          helperText={formik.touched.pasearAdoptado && formik.errors.pasearAdoptado}
        />
      </Grid>
    
      
    </>
  );
};

export default InputsComponents;