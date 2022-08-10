import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import supabase from "./supabase";

function useGetData({ module, select = "*", enabled }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dataFetch = async () => {
    setLoading(true);
    const { data: dataAPI, error } = await supabase.from(module).select(select);
    setData(dataAPI);
    setLoading(false);
  };
  useEffect(() => {
    if (Boolean(enabled)) {
      dataFetch();
      console.log("tes loop");
    }
  }, [enabled]);
  return { data: data, isLoading: loading };
}

export default useGetData;
