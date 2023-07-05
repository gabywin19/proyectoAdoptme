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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

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

export const MascotasEnProceso = ({ datos, refresh }) => {
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
    navigate('/admin/interesados/'+id);
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

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(apodo, categoria, tipo, raza, contacto, id) {
    return { apodo, categoria, tipo, raza, contacto,id};
  }


let filas = []
  
  if(Array.isArray(datos)){
    datos.map((dato, id) => {
      filas.push(createData(dato.apodo, dato.edad, dato.tipoAnimal, dato.raza, dato.nombreContacto, dato._id))
    } )
  }else {
    filas.push(createData(datos.apodo, datos.edad, datos.tipoAnimal, datos.raza, datos.nombreContacto,datos._id))
  }

  console.log(filas);
  


  return (
    <Card elevation={0}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Apodo</StyledTableCell>
            <StyledTableCell align="right">Rango Edad</StyledTableCell>
            <StyledTableCell align="right">Tipo</StyledTableCell>
            <StyledTableCell align="right">Raza</StyledTableCell>
            <StyledTableCell align="right">Contacto</StyledTableCell>
            <StyledTableCell align="right">Interesados</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filas.map((row, id) => (
            <StyledTableRow key={id}>
              <StyledTableCell component="th" scope="row">
                {row.apodo}
              </StyledTableCell>
              <StyledTableCell align="right">{row.categoria}</StyledTableCell>
              <StyledTableCell align="right">{row.tipo}</StyledTableCell>
              <StyledTableCell align="right">{row.raza}</StyledTableCell>
              <StyledTableCell align="right">{row.contacto}</StyledTableCell>
              <StyledTableCell align="right">
                            
               <Button variant="outlined" onClick={() => handleEdit(row.id)}>Ver</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Card>
  );
};

const RenderizarPanel = ({ data, fetch }) => {
  useEffect(() => {
    fetch();
    // eslint-disable-next-line
  
  }, []);

  return (
    <>
    {console.log(data?.length)}
      {data?.length <= 0 && (
        <Box sx={{ mt: 4 }} textAlign="center">
           <Typography>No hay Publicación Para Mostrar</Typography>
        </Box>
      )}

      {data === null && (
        <Box sx={{ mt: 4 }} textAlign="center">
          <Typography>No hay Publicación Para Mostrar</Typography>
        </Box>
      )}
      <Grid container spacing={4}>
      {data !== null  && (
        <Grid xs={12} >
        <MascotasEnProceso  datos={data} refresh={fetch} />
      </Grid>
      )}
 
      
      </Grid>
    </>
  );
};

export default RenderizarPanel;
