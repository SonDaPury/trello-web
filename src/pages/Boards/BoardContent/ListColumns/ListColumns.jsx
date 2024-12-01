import { Box } from "@mui/material";
import React from "react";

import Column from "./Column/Column";

function ListColumns() {
  return (
    <Box
      sx={{
        bgcolor: "inherit",
        width: "100%",
        height: "100%",
        overflowX: "auto",
        overflowY: "hidden",
        display: "flex",
        "&::-webkit-scrollbar-track": {
          m: 2,
        },
      }}
    >
      <Column />
    </Box>
  );
}

export default ListColumns;
