import React, { useState } from "react";
import Renderizar from "./Renderizar";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";


const Index = () => {
  const [view, setView] = useState([]);

  const fetch = async () => {
    setView([]);
    try {
      const res = await axios.get("http://localhost:8080/api/publicaciones", { withCredentials: true });

      setView(res.data);
      console.log(res.data[0].apodo);
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
          <Renderizar view={view} fetch={fetch} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;