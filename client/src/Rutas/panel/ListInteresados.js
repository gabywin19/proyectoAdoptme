import React, { useState } from "react";
import PanelInteresado from "./RenderizarPanelinteresado";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import {useParams} from 'react-router-dom'

const Panel = () => {
  const [view, setView] = useState([]);
  let { id } = useParams();

  const fetch = async () => {
    setView([]);
    try {
      //const res = await axios.get("http://localhost:8080/api/adoptame/inprocess", { withCredentials: true });
       await axios.get("http://localhost:8080/api/losinteresados/" + id)
       .then((result) => {
        setView(result.data);
        console.log(result.data);
      });
      
    } catch (e) {
      console.log("Error", e);
      setView(null);
    }
  };

  return (
    <Container component='main' sx={{pb: 6}}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid xs={12}>
           {/* <Form fetch={fetch} /> */}
          
        </Grid>
        <Grid xs={12}>
          <PanelInteresado data={view} fetch={fetch} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Panel;