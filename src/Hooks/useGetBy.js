import { useQuery } from "@tanstack/react-query";
import supabase from "./supabase";

function useGetBy({ module, select, filter, filterby }) {
  const query = useQuery([module, filterby], () =>
    supabase.from(module).select(select).eq(`${filter}`, `${filterby}`)
  );
  return {
    ...query,
    items: query.data?.data || [],
  };
}

export default useGetBy;
