import React from "react";
import { Box } from "@mui/material";
import useGetBy from "../../../Hooks/useGetBy";
import MutationUpdate from "../../../Hooks/Mutation/MutationUpdate";
import TableComponen from "../../../Component/TableComponen";

export const Account = () => {
  const tableHead = [
    {
      id: "name",
      label: "Nama",
    },
    {
      id: "is_verified",
      label: "Status",
    },
  ];

  const { items } = useGetBy({
    module: "USER_DEVELOPMENT",
    filter: "village_id",
    filterby: localStorage.getItem("village-id"),
  });

  const { mutation } = MutationUpdate({ module: "USER_DEVELOPMENT" });

  const verify = (prop) => {
    const y = [
      {
        id: "awaiting",
        label: "Menunggu",
      },
      {
        id: "denied",
        label: "Ditolak",
      },
      {
        id: "accepted",
        label: "Diterima",
      },
    ];
    const x = y.find((i) => i.id === prop);
    return x.label;
  };
  const dataRebuild = items
    ?.filter((i) => i?.is_admin === false)
    ?.map((i) => ({ ...i, is_verified: verify(i?.is_verified) }));

  const handleClick = (i) => {
    mutation.mutate({ ...i, is_verified: "denied" });
  };

  return (
    <Box>
      <Box mt={1}>
        <TableComponen
          tableHead={tableHead}
          btnLabel="konfirmasi"
          handleClickReply={handleClick}
          tableBody={dataRebuild}
        />
      </Box>
    </Box>
  );
};
