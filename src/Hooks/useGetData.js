import { useQuery } from "@tanstack/react-query";
import supabase from "./supabase";

function useGetData({ module, select = "*" }) {
  const query = useQuery(module, () => supabase.from(module).select(select));

  return {
    ...query,
    dataFetch: query?.data?.data,
  };
}

export default useGetData;
