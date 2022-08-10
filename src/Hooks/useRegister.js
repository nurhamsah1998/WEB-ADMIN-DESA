import { useMutation } from "@tanstack/react-query";
import supabase from "./supabase";

function useRegister({ module }) {
  const mutation = useMutation(module, (value) =>
    supabase.auth.signUp({ ...value })
  );

  return { mutate: mutation, ...mutation };
}

export default useRegister;
