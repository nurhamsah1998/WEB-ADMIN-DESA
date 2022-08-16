import React from "react";
import moment from "moment";

export const FormatDate = (props) => {
  const formatDate = moment(props).format("MMMM Do YYYY, h:mm:ss a");
  return formatDate;
};
