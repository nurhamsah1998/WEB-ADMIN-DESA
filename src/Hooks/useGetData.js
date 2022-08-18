import { useQuery } from "@tanstack/react-query";
import supabase from "./supabase";

function useGetData({ module }) {
  const query = useQuery([module], () => supabase.from(module).select("*"));
  const items = query.data?.data;
  return { items: items, ...query };
}

export default useGetData;
