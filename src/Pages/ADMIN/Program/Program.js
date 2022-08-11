import React from "react";
import { Box, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";

function Program() {
  const data = [
    {
      title: "Program masker gratis",
      image:
        "https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tag: "lorem ipsunm jasj ,sajsaasdasd  dm jasj  ,sajsajdj hjhsiuhds jjjuadnnlaasff uas ns ihssiaissd haiushsalorem ipsunm jasj  ,sajsajdj hjhsiuhds jjjuadnnlaasff uas ns ihssiaissd haiushsa",
      date: "23 januari 2019",
    },
    {
      title: "Program masker gratis",
      image:
        "https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tag: "lojsajdj hjhsiuhds jjjuadnnlaasff uas ns ihssiaissd haiushsalorem ipsunm jasj  ,sajsajdj hjhsiuhds jjjuadnnlaasff uas ns ihssiaissd haiushsalorem ipsunm jasj  ,sajsajdj hjhsiuhds jjjuadnnlaasff uas ns ihssiaissd haiushsalorem ipsunm jasj  ,sajsajdj hjhsiuhds jjjuadnnlaasff uas ns ihssiaissd haiushsalorem ipsunm jasj  ,sajsajdj hjhsiuhds jjjuadnnlaasff uas ns ihssiaissd haiushsa",
      date: "23 januari 2019",
    },
    {
      title: "Program masker gratis",
      image:
        "https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tag: "lorem ipsunm jasj ,sajsau elit deserunt Lorasdas das dasdasdasd as as dasdasdasdasd asdasdasd asdasdasdsad asdasdasdasd asdadasdas asdasdasd as as das dem ipsum animasdasd  asdasdasd asdasdasd asdasdasdasd asdasd asdas dasd asdasd asdas dasdasdasdasd as asdasdasdas as dasdas asd  laboru",
      date: "23 januari 2019",
    },
    {
      title: "Program masker gratis",
      image:
        "https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tag: "lorem ipsunm jasj ,sajsau elit deserunt Lorasdas das dasdasdasd as as dasdasdasdasd asdasdasd asdasdasdsad asdasdasdasd asdadasdas asdasdasd as as das dem ipsum animasdasd  asdasdasd asdasdasd asdasdasdasd asdasd asdas dasd asdasd asdas dasdasdasdasd as asdasdasdas as dasdas asd  laboru",
      date: "23 januari 2019",
    },
    {
      title: "Program masker gratis",
      image:
        "https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tag: "lorem ipsunm jasj ,sajsau elit deserunt Lorasdas das dasdasdasd as as dasdasdasdasd asdasdasd asdasdasdsad asdasdasdasd asdadasdas asdasdasd as as das dem ipsum animasdasd  asdasdasd asdasdasd asdasdasdasd asdasd asdas dasd asdasd asdas dasdasdasdasd as asdasdasdas as dasdas asd  laboru",
      date: "23 januari 2019",
    },
    {
      title: "Program masker gratis",
      image:
        "https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tag: "lorem ipsunm jasj ,sajsau elit deserunt Lorasdas das dasdasdasd as as dasdasdasdasd asdasdasd asdasdasdsad asdasdasdasd asdadasdas asdasdasd as as das dem ipsum animasdasd  asdasdasd asdasdasd asdasdasdasd asdasd asdas dasd asdasd asdas dasdasdasdasd as asdasdasdas as dasdas asd  laboru",
      date: "23 januari 2019",
    },
    {
      title: "Program masker gratis",
      image:
        "https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tag: "lorem ipsunm jasj ,sajsau elit deserunt Lorasdas das dasdasdasd as as dasdasdasdasd asdasdasd asdasdasdsad asdasdasdasd asdadasdas asdasdasd as as das dem ipsum animasdasd  asdasdasd asdasdasd asdasdasdasd asdasd asdas dasd asdasd asdas dasdasdasdasd as asdasdasdas as dasdas asd  laboru",
      date: "23 januari 2019",
    },
    {
      title: "Program masker gratis",
      image:
        "https://images.pexels.com/photos/939702/pexels-photo-939702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tag: "lorem ipsunm jasj ,sajsau elit deserunt Lorasdas das dasdasdasd as as dasdasdasdasd asdasdasd asdasdasdsad asdasdasdasd asdadasdas asdasdasd as as das dem ipsum animasdasd  asdasdasd asdasdasd asdasdasdasd asdasd asdas dasd asdasd asdas dasdasdasdasd as asdasdasdas as dasdas asd  laboru",
      date: "23 januari 2019",
    },
  ];
  return (
    <Box>
      <Box width="100%">
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              mt: 2,
              display: "flex",
              bgcolor: "#fff",
              p: 2,
              justifyContent: "flex-start",
              borderRadius: "15px",
              width: "100%",
              minHeight: "150px",
            }}
          >
            <Box sx={{ maxWidth: "100%", borderRadius: "5px" }}>
              <img
                style={{ borderRadius: "15px", width: "350px" }}
                src={item.image}
              />
            </Box>
            <Box ml={5}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box>
                  <Typography>{item.title}</Typography>
                  <Typography fontSize={13}>{item.date}</Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Button
                    sx={{ fontWeight: 600, color: "#fff", minWidth: 0 }}
                    size="small"
                    color="warning"
                    variant="contained"
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    sx={{ fontWeight: 600, color: "#fff", minWidth: 0 }}
                    size="small"
                    color="error"
                    variant="contained"
                  >
                    <DeleteIcon />
                  </Button>
                  <Button
                    sx={{ fontWeight: 600, color: "#fff", minWidth: 0 }}
                    size="small"
                    variant="contained"
                  >
                    <InfoIcon />
                  </Button>
                </Box>
              </Box>
              <Box>
                <Typography mt={3}>{item.tag}</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Program;
