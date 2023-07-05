import React, { useEffect, useState } from "react";
import {Typography,Box,Avatar,Menu,MenuItem,IconButton,Card,CardHeader,CardContent,CardActions,CardMedia,Collapse, CardActionArea } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate, NavLink } from "react-router-dom";
import CommentIcon from "@mui/icons-material/Comment";
import AddCommentIcon from '@mui/icons-material/AddComment';
import Eliminar from "../inicio/Eliminar";
import EliminarComentario from "../comentar/EliminarComentario";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'

const Item = ({item}) =>{
  return (
    <Paper  elevation={3} >
      <Card sx={{ width: 600, height: 400 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="100%"
          
          image={item.image}
          alt={item.name}
        />
       
      </CardActionArea>
      </Card>

        
    </Paper>
)

}

export const Post = ({ datos, refresh }) => {
  const [comentar, setComentar] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  const handleEdit = (id) => {
    navigate(`/interesado/${id}`);
  };

  const handleComments = () => {
    setComentar((value) => !value);
  };
  const ruta = datos.imagen1;
  const post = ruta?.split('\\').slice(-1)[0];
  const imagenes =[{name: "imagen1", image: datos.imagen1 },
                   {name: "imagen2", image: datos.imagen2 },
                   {name: "imagen3",image: datos.imagen3 },
                   {name: "imagen4", image: datos.imagen4 },
                   {name: "imagen5", image: datos.imagen5 },
                   ];
  const images = imagenes.filter(imagen => imagen.image !=="");                 

  const ruta2 = datos.imagen1
  const avatar = ruta2?.split('\\').slice(-1)[0]

  return (
    <Card elevation={0}>
      <CardHeader
        sx={{bg: (theme) => theme.palette.primary.main}}
        avatar={
          <Avatar
            sx={{ mr: 2 }}
            src={datos.imagen1}
            alt={datos.apodo}
          >
            {datos.apodo}
          </Avatar>
        }
        action={
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={datos?.apodo}
      />
      <CardContent>
   
        <p>Descripción: {datos.descripcionMascota}</p>
          
   
      </CardContent>
      {post && (
          
          <Carousel>
          {
              images.map( (item, i) => <Item key={i} item={item} /> )
          }
          </Carousel>
     
                
      )}
                   <CardContent>
                  
                </CardContent>
      <CardActions disableSpacing>
        <IconButton
          to={"/comentarios/" + datos._id}
          component={NavLink}
        >
          <AddCommentIcon />
        </IconButton>
        <IconButton
          onClick={() => handleComments()}
          sx={{ml: 'auto'}}
        >
          <CommentIcon />
        </IconButton>
      </CardActions>
      <Collapse in={comentar} timeout="auto" unmountOnExit>
        <CardContent>
        {datos.comentarios?.map((item, i) => (
          <Typography key={i}>
            {item.comentario}
            <EliminarComentario id={item._id} refresh={refresh}/>
          </Typography>
        ))}
        {!datos.length && (
          <Typography>No hay comentarios disponibles...</Typography>
        )}
        </CardContent>
      </Collapse>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleEdit(datos._id)}>Quiero Adoptar</MenuItem>
        
      </Menu>
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
      <Grid container spacing={4}>
        {view?.map((datos, i) => {
          return (
            <Grid xs={12} key={i}>
              <Post datos={datos} refresh={fetch} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Renderizar;
