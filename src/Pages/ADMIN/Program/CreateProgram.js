import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import FormAdd from "./FormAdd";
import supabase from "../../../Hooks/supabase";
import MutationPost from "../../../Hooks/Mutation/MutationPost";
import TransitionsModal from "../../../Component/TransitionsModal";
import useFetchByTrigger from "../../../Hooks/useFetchByTrigger";

function CreateProgram() {
  const [loading, setLoading] = React.useState(false);
  const { mutation } = MutationPost({
    module: "PROGRAMS",
    errorMessage: "gagal menambah program",
    successMessage: "berhasil menambah program",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const formRef = useRef();
  const handleSubmit = () => {
    formRef.current?.handleSubmit();
  };
  const { items } = useFetchByTrigger({
    module: "USER_DEVELOPMENT",
    enabled: location.search.includes("?create-program=true"),
  });
  return (
    <TransitionsModal
      isLoading={loading}
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
          image: [],
          village_id: "",
        }}
        onSubmit={async (values) => {
          setLoading(true);
          const image = values?.image?.file;
          const { data, error } = await supabase.storage
            .from("web-desa")
            .upload(
              `Program/${
                supabase.auth.user()?.email
              }/web-desa-${new Date().getTime()}`,
              image
            );
          const imageUrl = supabase.storage.from("").getPublicUrl(data?.Key)
            .data.publicURL;
          if (error) {
            setLoading(false);
          }
          if (data) {
            mutation.mutate({
              ...values,
              village_id: items[0]?.village_id,
              image: [
                {
                  type: "cover",
                  link: imageUrl,
                },
              ],
            });
            navigate(-1);
            setLoading(false);
          }
        }}
      >
        {(props) => <FormAdd {...props} />}
      </Formik>
    </TransitionsModal>
  );
}

export default CreateProgram;
