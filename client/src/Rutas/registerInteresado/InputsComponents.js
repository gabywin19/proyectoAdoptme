import React from "react";
import { TextField,Select,MenuItem,InputLabel} from "@mui/material";
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
        <InputLabel id="demo-simple-select-label">Tipo de Animal</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          disabled={loading}
          id="tipoAnimal"
          name='tipoAnimal'
          value={formik.values.tipoAnimal}
          label="Tipo de Animal"
          onChange={formik.handleChange}
        >
          <MenuItem value="PERRO">Perro</MenuItem>
          <MenuItem value="GATO">Gato</MenuItem>
          
        </Select>
      </Grid>

      <Grid xs={12}>
        <InputLabel id="demo-simple-select-label">Edad de Preferencia</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          disabled={loading}
          id="edadPreferencia"
          name='edadPreferencia'
          value={formik.values.edadPreferencia}
          label="Edad de Preferencia"
          onChange={formik.handleChange}
        >
          <MenuItem value=""></MenuItem>
          <MenuItem value="CACHORRO">Menor a 2 Años</MenuItem>
          <MenuItem value="ADOLESCENTE">Entre 2 a 5 Años</MenuItem>
          <MenuItem value="ADULTO">Mayor a 5 Años</MenuItem>
          
        </Select>
      </Grid>
      <Grid xs={12}>
        <InputLabel id="demo-simple-select-label">Esterilizar</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          disabled={loading}
          id="esterilizar"
          name='esterilizar'
          value={formik.values.esterilizar}
          label="Esterilizar"
          onChange={formik.handleChange}
        >
          <MenuItem value="SI">Si</MenuItem>
          <MenuItem value="NO">No</MenuItem>
          
        </Select>
      </Grid>
      <Grid xs={12}>
        <InputLabel id="demo-simple-select-label">Gastos Veterinario</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          disabled={loading}
          id="gastosVeterinario"
          name='gastosVeterinario'
          value={formik.values.gastosVeterinario}
          label="Gastos Veterinario"
          onChange={formik.handleChange}
        >
          <MenuItem value="SI">Si</MenuItem>
          <MenuItem value="NO">No</MenuItem>
          
        </Select>
      </Grid>
      <Grid xs={12}>
        <InputLabel id="demo-simple-select-label">Acepta Visitas</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          disabled={loading}
          id="visitasSeguimiento"
          name='visitasSeguimiento'
          value={formik.values.visitasSeguimiento}
          label="Acepta Visitas"
          onChange={formik.handleChange}
        >
          <MenuItem value="SI">Si</MenuItem>
          <MenuItem value="NO">No</MenuItem>
          
        </Select>
      </Grid>
      <Grid xs={12}>
        <InputLabel id="demo-simple-select-label">Pasear Adoptado</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          disabled={loading}
          id="pasearAdoptado"
          name='pasearAdoptado'
          value={formik.values.pasearAdoptado}
          label="Pasear Adoptado"
          onChange={formik.handleChange}
        >
          <MenuItem value="SI">Si</MenuItem>
          <MenuItem value="NO">No</MenuItem>
          
        </Select>
      </Grid>
    
      
    </>
  );
};

export default InputsComponents;