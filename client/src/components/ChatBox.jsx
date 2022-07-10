import React from "react";
import {
  Paper,
  Box,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  List,
} from "@mui/material";
import {chatMessages} from "../fData"
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";


const ChatBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        backgroundColor: "#ffffff",
        borderLeft: "1px solid",
        borderColor: "#f0f0f0",
      }}
    >
      <List sx={{flexGrow: "1", mb: 2 }}>
          {chatMessages.map(({ id, sender, msg, timeStamp }) => (
            <React.Fragment key={id}>
              <ListItem>
                <ListItemText primary={sender.name} secondary={msg}  />
              </ListItem>
            </React.Fragment>
          ))}
        </List>

      <TextField
        sx={{
          
          padding: "10px",

          "& .MuiFilledInput-root": {
            height: "54px",
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
