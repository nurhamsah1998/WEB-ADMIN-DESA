import React from "react";
import Apparatus from "./Apparatus";
import Events from "./Event";
import UserScreenLayout from "../../Layout/UserScreenLayout";

export default function Home() {
  return (
    <UserScreenLayout>
      <Events />
      <Apparatus />
    </UserScreenLayout>
  );
}
