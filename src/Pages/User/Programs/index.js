import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import UserScreenLayout from "../../../Layout/UserScreenLayout";
import Text from "../../../Component/Text";

function UserProgram() {
  const innerWidth = window.innerWidth - 36;
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
    <UserScreenLayout>
      <Box
        maxWidth="lg"
        margin="auto"
        marginTop={4}
        padding={{ xs: 2, sm: 10, md: 10, lg: 10 }}
      >
        <Text title large textAlign="center" marginBottom={{ xs: 3, sm: 10 }}>
          Program
        </Text>
        {data?.map((item, index) => {
          return (
            <Box key={index} marginBottom={2}>
              <Grid
                container
                sx={{
                  marginBottom: { xs: 4, sm: 4, md: 10, lg: 12 },
                }}
              >
                <Grid item xs={12} sm={12} md={12} lg={4}>
                  <Box
                    component="img"
                    sx={{
                      maxWidth: { xs: innerWidth, sm: 480, md: 380 },
                      borderRadius: "15px",
                    }}
                    alt="image"
                    src={item.image}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8}>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    marginY={{ xs: 2, sm: 0 }}
                  >
                    <Box>
                      <Text title fontWeight="600">
                        {item.title}
                      </Text>
                      <Text paragraf color="#B5B5C3">
                        {item.date}
                      </Text>
                    </Box>
                    <Box sx={{ display: "flex", gap: { xs: 1, sm: 2, lg: 2 } }}>
                      <Button
                        sx={{ color: "#fff", fontSize: "9px", maxHeight: 28 }}
                        size="small"
                        variant="contained"
                      >
                        Detail
                      </Button>
                      <Button
                        sx={{
                          backgroundColor: "#1BC5BD",
                          color: "#fff",
                          fontSize: "9px",
                          maxHeight: 28,
                        }}
                        size="small"
                        variant="contained"
                      >
                        Bergabung
                      </Button>
                    </Box>
                  </Box>
                  <Text paragraf>{item.tag}</Text>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Box>
    </UserScreenLayout>
  );
}

export default UserProgram;
