import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import TransitionsModal from "../../../Component/TransitionsModal";
import { TextField } from "@mui/material";

function Create() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <TransitionsModal
      title="Tambah program"
      handleClose={() => navigate(-1)}
      open={location.search.includes("?create-program=true")}
    >
      asdasdasdsasad
    </TransitionsModal>
  );
}

export default Create;
