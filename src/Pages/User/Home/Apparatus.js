import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";
import Text from "../../../Component/Text";
import Slider from "react-slick";

export default function Apparatus() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    {
      id: 1,
      name: "Atta Gledek",
      position: "Kepala Desa",
      image: "../../Assets/atta.jpg",
      description:
        "   Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continentsexcept Antarctica",
    },
    {
      id: 1,
      name: "Doraemon",
      position: "Sekertaris",
      image: "../../Assets/atta.jpg",
      description:
        "   Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continentsexcept Antarctica",
    },
    {
      id: 1,
      name: "Sony wakwaw",
      position: "Kamituwo",
      image: "../../Assets/atta.jpg",
      description:
        "   Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continentsexcept Antarctica",
    },
  ];
  return (
    <Box maxWidth="lg" margin="auto" padding={{ xs: 2, sm: 10, md: 10, lg: 10 }} marginBottom={6}>
      <Text title large textAlign="center" marginBottom={{ xs: 3, sm: 10 }}>
        Aparat Desa
      </Text>
      <Slider {...settings}></Slider>
      <Box display={{ xs: "grid", sm: "flex" }} gap={4} style={{ overflowX: "scroll" }}>
        {data?.map((item, index) => {
          return (
            <Card
              key={index}
              sx={{ maxWidth: 345, minWidth: 300, backgroundColor: "#F6F6F6" }}
              onClick={() => alert("Bapa Mana?")}
            >
              <CardContent sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar src={item.image} sx={{ width: 80, height: 80 }} />
              </CardContent>
              <CardContent>
                <Text subTitle textAlign="center" color="00385F">
                  {`${item.name} - ${item.position}`}
                </Text>
                <Typography variant="body2" color="text.secondary" marginTop={2}>
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
