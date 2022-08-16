import supabase from "../supabase";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function MutationPost({ module }) {
  const client = useQueryClient();
  const AUTH = supabase.auth.user();
  const mutation = useMutation([module], (values) => {
    return supabase.from(module).insert({ ...values, user_id: AUTH?.id });
  });
  return { mutation: mutation, ...mutation };
}

export default MutationPost;
