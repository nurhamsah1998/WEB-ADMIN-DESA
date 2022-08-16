import React from "react";
import Apparatus from "./Apparatus";
import Events from "./Event";
import UserScreenLayout from "../../../Layout/UserScreenLayout";
import supabase from "../../../Hooks/supabase";

export default function Home() {
  const getData = async () => {
    const { data } = await supabase
      .from("PROGRAMS")
      .select("*")
      .eq("village_id", "b74f1d79-766b-4846-ace0-610f43382fe2");
    console.log(data, "ini");
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <UserScreenLayout>
      <Events />
      <Apparatus />
    </UserScreenLayout>
  );
}
