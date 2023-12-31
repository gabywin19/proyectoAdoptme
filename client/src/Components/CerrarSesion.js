import React from 'react';
import { Button} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import Cookies from "universal-cookie";

const cookies = new Cookies();

const CerrarSesion= ({ close }) => {
  const navigate = useNavigate();
  
  const deleteCookie = () => {
    
      //await axios.post("http://localhost:7070/api/logout", {}, { withCredentials: true });
      cookies.remove("usuario");
      cookies.remove("token");
      close();
     
      navigate('/')
    

  };
  
  return (
    <div>
      <Button  color="inherit" variant="text" endIcon={<LogoutIcon />} onClick={(e) => deleteCookie()}>Cerrar Sesión</Button>
     
    </div>
  )
};

export default CerrarSesion;
