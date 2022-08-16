import React, { useContext } from "react";
import { Notif } from "../useContextNotification";
import supabase from "../supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function MutationPost({
  module,
  successMessage = "success",
  errorMessage = "error",
}) {
  const { setNotif } = useContext(Notif);
  const client = useQueryClient();
  const AUTH = supabase.auth.user();
  const mutation = useMutation(
    [module],
    (values) => {
      return supabase.from(module).insert({ ...values, user_id: AUTH?.id });
    },
    {
      onSuccess: (res) => {
        if (res.error !== null) {
          setNotif((e) => ({
            ...e,
            v: true,
            message: errorMessage,
            variant: "error",
          }));
        }
        if (res.error === null) {
          client.invalidateQueries(module);
          setNotif((e) => ({
            ...e,
            v: true,
            message: successMessage,
            variant: "success",
          }));
        }
      },
    }
  );
  return { mutation: mutation, ...mutation };
}

export default MutationPost;
