import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Drawer, Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CerrarSesion from "./CerrarSesion";
import adoptmerosa from "../imagenes/adoptmerosa.png";
import EditIcon from '@mui/icons-material/Edit';
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import InicarSesion from '@mui/icons-material/Login';





const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((value) => !value);
  };

  return (
    <AppBar elevation={0} position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
        <IconButton onClick={handleOpen} >
          <MenuIcon />
        </IconButton>
        </Box>
      
        <Box sx={{ flexGrow: 1 }}><img src={adoptmerosa} alt="Logo" width="400" height="70" /></Box>
        
      
      </Toolbar>
      <Drawer open={open} onClose={handleOpen}>
        <Box sx={{ width: 300 }}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Typography variant='h2' textAlign='center' sx={{pb:7}}>
                Menú
              </Typography>
            </Grid>
            <Grid textAlign='center' xs={12}>
              <Button onClick={handleOpen} to={'/'} component={NavLink} color="inherit" endIcon={<HouseIcon />}>
                Inicio
              </Button>
            </Grid>
            <Grid textAlign='center' xs={12}>
              <Button onClick={handleOpen} to={'/ver'} component={NavLink} color="inherit" endIcon={<PersonIcon />}>
                Ver mi Perfil
              </Button>
            </Grid>
            <Grid textAlign='center' xs={12}>
              <Button onClick={handleOpen} to={'/editar'} component={NavLink} color="inherit" endIcon={<EditIcon />}>
                Editar Perfil
              </Button>
            </Grid>
            <Grid textAlign='center' xs={12}>
              <Button onClick={handleOpen} to={'/registerMascota'} component={NavLink} color="inherit" >
                Registrar Mascota
              </Button>
            </Grid>
            <Grid textAlign='center' xs={12}>
              <Button onClick={handleOpen} to={'/login'} component={NavLink} color="inherit" endIcon={<InicarSesion />}>
                Login
              </Button>
            </Grid>
            <Grid textAlign='center' xs={12}>
              <CerrarSesion close={handleOpen} />
            </Grid>
          </Grid>
          
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;