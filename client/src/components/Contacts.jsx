import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const messages = [
  {
    id: 1,
    primary: "Manolo",
    secondary:
      "Online",
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 2,
    primary: "Facundo",
    secondary: "Online",
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 3,
    primary: "Julian",
    secondary:
      "Online",
    person: "/static/images/avatar/2.jpg",
  },
  {
    id: 4,
    primary: "Agustin",
    secondary: "Online",
    person: "/static/images/avatar/3.jpg",
  },
  {
    id: 5,
    primary: "Eduardo",
    secondary:
      "Online",
    person: "/static/images/avatar/4.jpg",
  },
  {
    id: 6,
    primary: "Juaquina",
    secondary: "Offline",
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 7,
    primary: "Ediberta",
    secondary: "Offline",
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 8,
    primary: "Samuel",
    secondary: "Offline",
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 9,
    primary: "Paolo",
    secondary: "Offline",
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 10,
    primary: "Federico",
    secondary: "Offline",
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 11,
    primary: "Demetrio",
    secondary: "Offline",
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 12,
    primary: "Chaple",
    secondary: "Offline",
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 13,
    primary: "Chueco",
    secondary: "Offline",
    person: "/static/images/avatar/1.jpg",
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "150px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Contacts() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{minHeight:"100vh", minWidth: "360px", pb: "50px" }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ p: 2, pb: 0 }}
        >
          Inbox
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <React.Fragment key={id}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt= {primary} src={person} />
                </ListItemAvatar>
                <ListItemText primary={primary} secondary={secondary} />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
      <AppBar
        color="primary"
        sx={{ maxWidth: "360px", height: "60px", top: "auto", bottom: 0, left: "0" }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <AccountCircleIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </IconButton>
          <IconButton color="inherit">
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
