import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import MutationDelete from "../../../Hooks/Mutation/MutationDeleete";
import useFetchByTrigger from "../../../Hooks/useFetchByTrigger";
import FestivalIcon from "@mui/icons-material/Festival";
import CreateProgram from "./CreateProgram";
import { FormatDate } from "../../../Component/FormatDate";
import TransitionsModal from "../../../Component/TransitionsModal";
import supabase from "../../../Hooks/supabase";
import { getStorage } from "../../../utils";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import "moment/locale/id";
import Loading from "../../../Component/Loading";
import { grey } from "@mui/material/colors";
import CardComponent from "../../../Component/CardComponent";

function Program() {
  moment.locale("id");
  const idVillage = getStorage("village-id");
  const [id, setId] = React.useState(null);
  const [data, setData] = React.useState(false);
  const { mutation, isLoading } = MutationDelete({
    module: "PROGRAMS",
    errorMessage: "gagal menghapus program",
    successMessage: "berhasil menghapus program",
  });
  const location = useLocation();
  const { items, isLoading: loadingFetch } = useFetchByTrigger({
    module: "PROGRAMS",
    filterBy: "village_id",
    value: idVillage,
    enabled: Boolean(data),
  });
  const getData = async () => {
    const { data: USER, error } = await supabase
      .from("USER_DEVELOPMENT")
      .select("*")
      .eq("village_id", idVillage);
    if (!error) {
      setData(USER[0]?.village_id);
    }
  };
  const navigate = useNavigate();
  const handleClick = (i, e) => {
    setId(i);
    navigate(`?delete-program-id=${i}`);
  };

  const handleDelete = () => {
    mutation.mutate(id);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <TransitionsModal
        isLoading={isLoading}
        handleSubmit={handleDelete}
        title="Anda yakin ingin menghapus ?"
        handleClose={() => navigate(-1)}
        open={location.search.includes(`?delete-program-id=${id}`)}
      >
        apakah anda yakin ingin menghapus? menghapus berati anda telah
        brader!!!!!
      </TransitionsModal>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 5,
        }}
      >
        <Typography variant="h6" color={grey[700]} fontWeight={600}>
          Daftar program
        </Typography>
        <Button
          disabled={loadingFetch}
          startIcon={<FestivalIcon />}
          onClick={() => navigate("?create-program=true")}
          variant="contained"
        >
          Tambah program
        </Button>
      </Box>
      <Box>
        {loadingFetch ? (
          <Loading />
        ) : (
          <Grid container direction="column" gap={2}>
            {items?.map((item, index) => (
              <Grid item sx={{ width: { lg: "100%" } }} key={index}>
                <Box>
                  <Box
                    key={index}
                    sx={{
                      display: {
                        xs: "none",
                        md: "none",
                        lg: "flex",
                        xl: "flex",
                      },
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
                        src={item.image[0]?.link}
                      />
                    </Box>
                    <Box ml={5} width="100%">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                        }}
                      >
                        <Box>
                          <Typography>{item.title}</Typography>
                          <Typography fontSize={13}>
                            {FormatDate(item.created_at)}
                          </Typography>
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
                            onClick={() => handleDelete(item?.id)}
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
                        <Typography mt={3}>{item.desc}</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: {
                        xs: "block",
                        md: "block",
                        lg: "none",
                        xl: "none",
                      },
                    }}
                  >
                    <CardComponent
                      handleDelete={() => handleClick(item.id)}
                      tag={item?.desc}
                      title={item?.title}
                      date={moment(item?.created_at).format("LLLL")}
                      image={item.image[0]?.link}
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      <Box>
        {items?.length <= 0 && (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" fontWeight={600} color={grey[600]}>
              Tidak ada program desa yang ditampilkan
            </Typography>
            <Typography color={grey[600]}>
              sepertinya anda belum membuat program.
            </Typography>
          </Box>
        )}
      </Box>
      <CreateProgram />
    </Box>
  );
}

export default Program;
