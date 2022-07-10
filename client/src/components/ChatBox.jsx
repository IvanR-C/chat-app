import React from "react";
import { Box, TextField, List, Card, Button, Typography } from "@mui/material";
import { chatMessages } from "../fData";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const ChatBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        backgroundColor: "#ffffff",
        borderLeft: "1px solid",
        borderColor: "#f0f0f0",
      }}
    >
      <List sx={{ display: "flex", flexDirection: "column", flexGrow: "1", mb: 2 }}>
        {chatMessages.map(({ id, sender, msg, timeStamp, position, color }) => (
            <ListItem key={id} sx={{justifyContent: `${position}`}}>
              <Card sx={{ backgroundColor: `${color}` }}>
                <CardContent sx={{padding: "10px", "& .MuiCardContent-root:last-child": {
                pb: "10px",
              },}}>
                  <Typography
                    sx={{ fontSize: 10 }}
                    color="text.secondary"

                  >
                    {timeStamp}
                  </Typography>
                  <Typography sx={{ fontSize: 12, fontWeight: 'medium' }}
                   component="div">
                    {sender.name}
                  </Typography>
                  <Typography sx={{fontSize: 11}}>{msg}</Typography>
                </CardContent>
              </Card>
            </ListItem>
        ))}
      </List>

      <TextField
        sx={{
          padding: "10px",

          "& .MuiFilledInput-root": {
            height: "54px",
            borderRadius: "5px",
            backgroundColor: "#d4d4d4",
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
