import React from "react";
import { useQuery } from "@tanstack/react-query";
import supabase from "./supabase";

function useFetchByTrigger({
  enabled,
  filterBy = "",
  value = "",
  select = "*",
  module,
}) {
  const query = useQuery(
    [module, enabled],
    () => supabase.from(module).select(select).eq(filterBy, value),
    { enabled: Boolean(enabled) }
  );
  const items = query.data?.data;
  return { items: items, ...query };
}

export default useFetchByTrigger;
