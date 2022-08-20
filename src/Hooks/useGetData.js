import { useQuery } from "@tanstack/react-query";
import supabase from "./supabase";

function useGetData({ module, select = "*" }) {
  const query = useQuery([module], () => supabase.from(module).select(select));
  const items = query.data?.data;
  return { items: items, ...query };
}

export default useGetData;
