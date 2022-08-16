import React, { useContext } from "react";
import { Notif } from "../useContextNotification";
import supabase from "../supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function MutationDelete({
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
      console.log(values, "detele");
      return supabase.from(module).delete().match({ id: values });
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

export default MutationDelete;
