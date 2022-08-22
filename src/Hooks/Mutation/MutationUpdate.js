import React, { useContext } from "react";
import { Notif } from "../useContextNotification";
import supabase from "../supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function MutationUpdate({
  module,
  successMessage = "success",
  errorMessage = "error",
}) {
  const { setNotif } = useContext(Notif);
  const [onSuccess, setonSuccess] = React.useState(false);
  const client = useQueryClient();
  const AUTH = supabase.auth.user();
  const mutation = useMutation(
    [module],
    (values) => {
      setonSuccess(false);
      return supabase.from(module).update({ ...values });
    },
    {
      onSuccess: (res) => {
        if (res.error !== null) {
          setonSuccess(true);
          setNotif((e) => ({
            ...e,
            v: true,
            message: errorMessage,
            variant: "error",
          }));
        }
        if (res.error === null) {
          setonSuccess(true);
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
  return { mutation: mutation, onSuccess: onSuccess, ...mutation };
}

export default MutationUpdate;
