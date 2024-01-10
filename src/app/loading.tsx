import { Box, CircularProgress } from "@mui/material";
import React from "react";

function Loading() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%"
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loading;
