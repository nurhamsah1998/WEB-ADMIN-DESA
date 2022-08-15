import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import FormAdd from "./FormAdd";
import TransitionsModal from "../../../Component/TransitionsModal";

function CreateProgram() {
  const location = useLocation();
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSubmit = () => {
    formRef.current?.handleSubmit();
  };
  return (
    <TransitionsModal
      handleSubmit={handleSubmit}
      title="Tambah program"
      handleClose={() => navigate(-1)}
      open={location.search.includes("?create-program=true")}
    >
      <Formik
        innerRef={formRef}
        initialValues={{
          title: "",
          desc: "",
          image: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => <FormAdd {...props} />}
      </Formik>
    </TransitionsModal>
  );
}

export default CreateProgram;
