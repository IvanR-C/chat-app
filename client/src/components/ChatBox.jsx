import React from "react";
import {
  Paper,
  Box,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";

const ChatBox = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ffffff",
        borderLeft: "1px solid",
        borderColor: "#808080",
      }}
    >
      <TextField sx={{width: "100%", top: "auto", position: "fixed"}} id="outlined-basic" label="Type Here..."  />

    </Box>
  );
};

export default ChatBox;
