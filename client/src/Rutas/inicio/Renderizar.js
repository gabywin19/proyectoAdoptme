import React, { useEffect } from "react";
import {
  Typography,
  Box,
  Avatar,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import HouseIcon from '@mui/icons-material/House';
import Tooltip from "@mui/material/Tooltip";
import { Paper } from "@mui/material";

const Item = ({ item }) => {
  return (
    <Paper elevation={3} sx={{display: 'flex', justifyContent: 'center'}}>
      <Card sx={{ width: 600, height: 400 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height={400}
            image={item.image}
            alt={item.name}
            sx={{objectFit: 'contain'}}
          />
        </CardActionArea>
      </Card>
    </Paper>
  );
};

export const Post = ({ datos, refresh }) => {
  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/interesado/${id}`);
  };

  const ruta = datos.imagen1;
  const post = ruta?.split("\\").slice(-1)[0];
  const imagenes = [
    { name: "imagen1", image: datos.imagen1 },
    { name: "imagen2", image: datos.imagen2 },
    { name: "imagen3", image: datos.imagen3 },
    { name: "imagen4", image: datos.imagen4 },
    { name: "imagen5", image: datos.imagen5 },
  ];
  const images = imagenes.filter((imagen) => imagen.image !== "");

  const ruta2 = datos.imagen1;
  // eslint-disable-next-line
  const avatar = ruta2?.split("\\").slice(-1)[0];

  return (
    <Card elevation={0}>
      <CardHeader
        sx={{ bg: (theme) => theme.palette.primary.main }}
        avatar={
          <Avatar sx={{ mr: 2 }} src={datos.imagen1} alt={datos.apodo}>
            {datos.apodo}
          </Avatar>
        }
        title={datos?.apodo}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid container item={true} xs={6}>
            + Raza: <Typography variant="body1"> {datos.raza}</Typography>
          </Grid>
          <Grid container item={true} xs={6}>
            + Tipo de Animal: <Typography variant="body1"> {datos.tipoAnimal}</Typography>
          </Grid>
          <Grid container item={true} xs={6}>
            + Datos Medicos: <Typography variant="body1"> {datos.datosMedicos}</Typography>
          </Grid>
          <Grid container item={true} xs={6}>
            + Edad: <Typography variant="body1"> {datos.edad}</Typography>
          </Grid>
          <Grid container item={true} xs={12}>
            <Typography variant="body1">{datos.descripcionMascota}</Typography>
          </Grid>
        </Grid>
      </CardContent>
      {post && (
        <Carousel>
          {images.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      )}

      <CardActions disableSpacing>
        <Tooltip title="Adoptar">
          <IconButton onClick={() => handleEdit(datos._id)}>
           <HouseIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

const Renderizar = ({ view, fetch }) => {
  useEffect(() => {
    fetch();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {console.log(view.length)}
      {view?.length <= 0 && (
        <Box sx={{ mt: 4 }} textAlign="center">
          <Typography>No hay Publicación Para Mostrar</Typography>
        </Box>
      )}

      {view === null && (
        <Box sx={{ mt: 4 }} textAlign="center">
          <Typography>No hay Publicación Para Mostrar</Typography>
        </Box>
      )}
      <Grid container justifyContent='center' spacing={4}>
        {view?.map((datos, i) => {
          return (
            <Grid xs={10} key={i}>
              <Post datos={datos} refresh={fetch} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Renderizar;
