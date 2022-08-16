import React from "react";
import { Box, Button, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation, useNavigate } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import MutationDelete from "../../../Hooks/Mutation/MutationDeleete";
import useFetch from "../../../Hooks/useFetch";
import FestivalIcon from "@mui/icons-material/Festival";
import CreateProgram from "./CreateProgram";
import { FormatDate } from "../../../Component/FormatDate";
import TransitionsModal from "../../../Component/TransitionsModal";

function Program() {
  const [id, setId] = React.useState(null);
  const { mutation, isLoading } = MutationDelete({
    module: "PROGRAMS",
    errorMessage: "gagal menghapus program",
    successMessage: "berhasil menghapus program",
  });
  const location = useLocation();
  const { items } = useFetch({ module: "PROGRAMS" });
  // const { items: data } = useFetch({
  //   module: "USER_DEVELOPMENT",
  //   select: `*, vilage:village_id(*)`,
  // });
  // console.log(data, "ini");
  const navigate = useNavigate();

  const handleDelete = (i, e) => {
    setId(i);
    if (e === "delete") {
      mutation.mutate(i);
    } else {
      navigate(`?${i}`);
    }
  };
  return (
    <Box>
      <TransitionsModal
        isLoading={isLoading}
        handleSubmit={() => handleDelete("event", "delete")}
        title="Tambah program"
        handleClose={() => navigate(-1)}
        open={location.search.includes(`?${id}`)}
      >
        apakah anda yakin ingin menghapus? menghapus berati anda telah
        brader!!!!!
      </TransitionsModal>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 5 }}>
        <Button
          startIcon={<FestivalIcon />}
          onClick={() => navigate("?create-program=true")}
          variant="contained"
        >
          Tambah program
        </Button>
      </Box>
      <Box>
        {items?.map((item, index) => (
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
        ))}
      </Box>
      <CreateProgram />
    </Box>
  );
}

export default Program;
