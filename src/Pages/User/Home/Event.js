import { Grid, Box } from "@mui/material";
import React from "react";
import Text from "../../../Component/Text";

const events = [
  {
    id: 1,
    title: "Rapat Hokage",
    image: "../../Assets/img-home.png",
    isRight: false,
    description:
      "Recrutamento de perfis altamente qualificados, trabalhamos com processos de seleção rápidos e eficazes, ajustados à necessidade de cada cliente.Quer necessite de um Gestor de projetos, de 10 programadores para implementar novas tecnologias ou de um administrador de redes, conhecemos o mercado de IT e sabemos como encontrar o profissional ideal.",
  },
  {
    id: 2,
    title: "Rapat kazekage",
    image: "../../Assets/img-home.png",
    isRight: true,
    description:
      "Recrutamento de perfis altamente qualificados, trabalhamos com processos de seleção rápidos e eficazes, ajustados à necessidade de cada cliente.Quer necessite de um Gestor de projetos, de 10 programadores para implementar novas tecnologias ou de um administrador de redes, conhecemos o mercado de IT e sabemos como encontrar o profissional ideal.",
  },
  {
    id: 3,
    title: "Rapat dukun",
    image: "../../Assets/img-home.png",
    isRight: false,
    description:
      "Recrutamento de perfis altamente qualificados, trabalhamos com processos de seleção rápidos e eficazes, ajustados à necessidade de cada cliente.Quer necessite de um Gestor de projetos, de 10 programadores para implementar novas tecnologias ou de um administrador de redes, conhecemos o mercado de IT e sabemos como encontrar o profissional ideal.",
  },
  {
    id: 4,
    title: "Rapat Hokage",
    image: "../../Assets/img-home.png",
    isRight: true,
    description:
      "Recrutamento de perfis altamente qualificados, trabalhamos com processos de seleção rápidos e eficazes, ajustados à necessidade de cada cliente.Quer necessite de um Gestor de projetos, de 10 programadores para implementar novas tecnologias ou de um administrador de redes, conhecemos o mercado de IT e sabemos como encontrar o profissional ideal.",
  },
];

function Events() {
  return (
    <Box maxWidth="lg">
      {events?.map((item, index) => {
        return (
          <Box key={index}>
            <Grid container>
              <Grid item>
                <Box
                  component="img"
                  sx={{
                    maxWidth: { xs: 250, sm: 400, md: 450 },
                  }}
                  alt="image"
                  src={item.image}
                />
              </Grid>
              <Grid item>
                <Text title>{item.title}</Text>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
}

export default Events;
