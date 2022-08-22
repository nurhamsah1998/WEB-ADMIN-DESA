import React, { useRef } from "react";
import { Box, TextField, Typography } from "@mui/material";
import TableComponen from "../../../Component/TableComponen";
import { grey } from "@mui/material/colors";
import useGetData from "../../../Hooks/useGetData";
import Loading from "../../../Component/Loading";
import TransitionsModal from "../../../Component/TransitionsModal";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import useFetchByTrigger from "../../../Hooks/useFetchByTrigger";

function Complain() {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, isLoading } = useGetData({
    module: "USER_COMPLAINS",
    select: `*,user_development_id:user_development_id(*)`,
  });

  const formref = useRef();
  const idUser = location.search.replace("reply-message-to=", "");
  const { items: DATA_USER, isLoading: USER_LOADING } = useFetchByTrigger({
    module: "USER_DEVELOPMENT",
    enabled: location.search.includes(
      `?reply-message-to=${idUser?.replace("?", "")}`
    ),
    filterBy: "user_id",
    value: idUser?.replace("?", ""),
  });
  const itemRebuild = items?.map((i) => ({
    ...i,
    profile: i?.user_development_id?.name,
    nik: i?.user_development_id?.nik,
    program: "kukang",
    message: `"${i?.message}"`,
  }));

  const tableHead = [
    {
      id: "profile",
      label: "Profile",
      isImage: true,
    },
    {
      id: "program",
      label: "Program terakhir",
      isGrid: true,
    },
    {
      id: "message",
      label: "Komentar",
    },
  ];
  const handleClickReply = (i) => {
    navigate(`?reply-message-to=${i?.user_id}`);
  };

  const handleSubmit = () => {
    formref.current?.handleSubmit();
  };
  return (
    <Box>
      <Box>
        <Typography>Akun terdaftar</Typography>
        <Typography color={grey[400]} mt={2}>
          100 akun telah terdaftar
        </Typography>
      </Box>
      <Box mt={1}>
        {isLoading ? (
          <Loading />
        ) : (
          <TableComponen
            tableHead={tableHead}
            handleClickReply={handleClickReply}
            tableBody={itemRebuild}
          />
        )}
      </Box>
      <TransitionsModal
        isLoading={isLoading}
        title={`Kirim pesan ke ${DATA_USER?.[0]?.name}`}
        handleSubmit={handleSubmit}
        handleClose={() => navigate(-1)}
        open={location.search.includes(
          `?reply-message-to=${idUser.replace("?", "")}`
        )}
      >
        <Typography>Tulis balasan</Typography>
        <Formik
          innerRef={formref}
          initialValues={{
            message: "",
          }}
          onSubmit={(e) => {
            console.log(e);
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <Box>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  name="message"
                  id="message"
                  value={values?.message}
                  onChange={(i) => setFieldValue("message", i.target.value)}
                />
              </Box>
              <button type="submit" style={{ display: "none" }}>
                {null}
              </button>
            </Form>
          )}
        </Formik>
      </TransitionsModal>
    </Box>
  );
}

export default Complain;
