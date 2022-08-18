import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import UserScreenLayout from "../../../Layout/UserScreenLayout";
import Text from "../../../Component/Text";
import useGetBy from "../../../Hooks/useGetBy";
import { capitalFirstLetter, formatDate } from "../../../utils";

function UserProgram() {
  const innerWidth = window.innerWidth - 36;
  const { items } = useGetBy({
    module: "PROGRAMS",
    select: "*",
    filter: "village_id",
    filterby: "b74f1d79-766b-4846-ace0-610f43382fe2",
  });

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
        {items?.map((item, index) => {
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
                      maxHeight: 280,
                      borderRadius: "15px",
                    }}
                    alt="image"
                    src={item?.image[0]?.link}
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
                        {capitalFirstLetter(item?.title)}
                      </Text>
                      <Text paragraf color="#B5B5C3">
                        {formatDate(item?.created_at)}
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
                  <Text paragraf>{item?.desc}</Text>
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
