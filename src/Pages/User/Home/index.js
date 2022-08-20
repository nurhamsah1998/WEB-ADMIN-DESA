import React from "react";
import Apparatus from "./Apparatus";
import Events from "./Event";
import UserScreenLayout from "../../../Layout/UserScreenLayout";

export default function index() {
  return (
    <UserScreenLayout>
      <Events />
      <Apparatus />
    </UserScreenLayout>
  );
}
