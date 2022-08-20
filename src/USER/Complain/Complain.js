import { Box, TextField } from "@mui/material";
import React from "react";
import LoadingButton from "../../Component/LoadingButton";
import UserScreenLayout from "../../Layout/UserScreenLayout";
import MutationPost from "../../Hooks/Mutation/MutationPost";
import { getStorage } from "../../utils";
import supabase from "../../Hooks/supabase";

function UserComplain() {
  const idVillage = getStorage("village-id");
  const { mutation, isLoading } = MutationPost({ module: "USER_COMPLAINS" });
  const [value, setValue] = React.useState("");
  const handleClick = async () => {
    const { data } = await supabase
      .from("USER_DEVELOPMENT")
      .select("*")
      .eq("user_id", supabase.auth.user()?.id);
    if (data) {
      mutation.mutate({
        message: value,
        village_id: idVillage,
        user_development_id: data[0]?.id,
      });
    }
  };
  return (
    <UserScreenLayout>
      <Box sx={{ m: 2 }}>
        <TextField value={value} onChange={(e) => setValue(e.target.value)} />
        <LoadingButton
          isLoading={isLoading}
          onClick={handleClick}
          variant="contained"
          title="Kirim"
        />
      </Box>
    </UserScreenLayout>
  );
}

export default UserComplain;
