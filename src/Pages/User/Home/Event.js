import { Grid, Box, Divider } from "@mui/material";
import React from "react";
import Text from "../../../Component/Text";

const events = [
  {
    id: 1,
    title: "Rapat Hokage",
    image: "../../Assets/rapat.jpg",
    description:
      "Recrutamento de perfis altamente qualificados, trabalhamos com processos de seleção rápidos e eficazes, ajustados à necessidade de cada cliente.Quer necessite de um Gestor de projetos, de 10 programadores para implementar novas tecnologias ou de um administrador de redes, conhecemos o mercado de IT e sabemos como encontrar o profissional ideal.",
  },
  {
    id: 2,
    title: "Rapat kazekage",
    image: "../../Assets/rapat.jpg",
    description:
      "Recrutamento de perfis altamente qualificados, trabalhamos com processos de seleção rápidos e eficazes, ajustados à necessidade de cada cliente.Quer necessite de um Gestor de projetos, de 10 programadores para implementar novas tecnologias ou de um administrador de redes, conhecemos o mercado de IT e sabemos como encontrar o profissional ideal.",
  },
  {
    id: 3,
    title: "Rapat dukun",
    image: "../../Assets/rapat.jpg",
    description:
      "Recrutamento de perfis altamente qualificados, trabalhamos com processos de seleção rápidos e eficazes, ajustados à necessidade de cada cliente.Quer necessite de um Gestor de projetos, de 10 programadores para implementar novas tecnologias ou de um administrador de redes, conhecemos o mercado de IT e sabemos como encontrar o profissional ideal.",
  },
  {
    id: 4,
    title: "Rapat Hokage",
    image: "../../Assets/rapat.jpg",
    description:
      "Recrutamento de perfis altamente qualificados, trabalhamos com processos de seleção rápidos e eficazes, ajustados à necessidade de cada cliente.Quer necessite de um Gestor de projetos, de 10 programadores para implementar novas tecnologias ou de um administrador de redes, conhecemos o mercado de IT e sabemos como encontrar o profissional ideal.",
  },
];

function Events() {
  return (
    <Box maxWidth="lg" margin="auto" marginTop={4} padding={{ xs: 2, sm: 10, md: 10, lg: 10 }}>
      <Text title large textAlign="center" marginBottom={{ xs: 3, sm: 10 }}>
        Program dan Acara
      </Text>
      {events?.map((item, index) => {
        return (
          <Box key={index} marginBottom={2}>
            <Grid
              container
              sx={{
                flexDirection: index % 2 == 0 ? "row" : "row-reverse",
                marginBottom: { xs: 4, sm: 4, md: 10, lg: 12 },
              }}
            >
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Box
                  component="img"
                  sx={{
                    maxWidth: { xs: 328, sm: 480, md: 500 },
                    borderRadius: "15px",
                  }}
                  alt="image"
                  src={item.image}
                />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Text title fontWeight="600">
                  {item.title}
                </Text>
                <Box
                  sx={{
                    marginTop: 0.5,
                    marginBottom: 2,
                    width: { xs: 60, sm: 100 },
                    height: { xs: 2, sm: 4 },
                    backgroundColor: "#FFC800",
                  }}
                />
                <Text paragraf>{item.description}</Text>
              </Grid>
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
}

export default Events;
