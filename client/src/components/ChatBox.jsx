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
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        backgroundColor: "#ffffff",
        borderLeft: "1px solid",
        borderColor: "#f0f0f0",
      }}
    >
      <TextField
        sx={{
          
          padding: "4px",
          "& .MuiFilledInput-root": {
            borderRadius: "5px",
            backgroundColor: "#d4d4d4"
          },
        }}
        id="filled-basic"
        variant="filled"
        fullWidth
        InputProps={{ disableUnderline: true }}
      />
    </Box>
  );
};

export default ChatBox;
