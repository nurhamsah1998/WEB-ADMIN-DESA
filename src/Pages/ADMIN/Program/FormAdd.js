import React from "react";
import { Form } from "formik";
import { TextField, Box, Typography } from "@mui/material";

function FormAdd({ getFieldProps, setFieldValue }) {
  const handleUpload = (e) => {
    const path = e.target.files[0];
    const link = URL.createObjectURL(path);
    setFieldValue("image", { link: link, file: path });
  };
  return (
    <Form>
      <Box>
        <input type="file" onChange={handleUpload} />
      </Box>
      {[
        {
          name: "title",
          label: "judul",
          placeholder: "judul",
        },
        {
          name: "desc",
          label: "diskripsi",
          placeholder: "diskripsi",
          isMultiline: true,
          rows: 6,
        },
      ].map((item, index) => (
        <Box key={index}>
          <Typography sx={{ textTransform: "capitalize" }}>
            {item.label}
          </Typography>
          <TextField
            {...getFieldProps(item.name)}
            fullWidth
            multiline={item.isMultiline}
            rows={item.rows}
            sx={{ mb: 2 }}
            placeholder={item.placeholder}
          />
        </Box>
      ))}
      <button type="submit" style={{ display: "none" }}>
        {null}
      </button>
    </Form>
  );
}

export default FormAdd;
