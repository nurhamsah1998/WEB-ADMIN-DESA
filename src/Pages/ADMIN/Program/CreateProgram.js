import React, { useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { Notif } from "../../../Hooks/useContextNotification";
import FormAdd from "./FormAdd";
import supabase from "../../../Hooks/supabase";
import MutationPost from "../../../Hooks/Mutation/MutationPost";
import TransitionsModal from "../../../Component/TransitionsModal";

function CreateProgram() {
  const { setNotif } = useContext(Notif);
  const [loading, setLoading] = React.useState(false);
  const { mutation } = MutationPost({
    module: "PROGRAMS",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const formRef = useRef();
  const handleSubmit = () => {
    formRef.current?.handleSubmit();
  };
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
