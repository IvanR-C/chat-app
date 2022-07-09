import React, { useState } from "react";

import {
  Paper,
  TextField,
  Typography,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Alert,

} from "@mui/material";

import { Link} from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const RegisterForm = () => {
  const [visibility, setVisibility] = useState(false);

  const invalidUsernameMessage = "Username already taken";

  const [invalidUsername, setInvalidUsername] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  const toggleInvalidUsername = (boolean) => {
    setInvalidUsername(boolean);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const login = data.get("login");
    const password = data.get("password");

    if (login != "guillesaez15" || password != "1234") {
      console.log(login + " " + password);
      toggleInvalidUsername(true);
    }

    /*
        try{
            const response = await axios.post('/sever/login', {login : login, password: password})

        } catch(err){
            console.log(err)
        }
        
        */
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "200px",
      }}
    >
      <Paper elevation = {12}
        sx={{
          height: "550px",
          width: "450px",
          textAlign: "center",
          borderRadius: "20px",
        }}
      >
        <Typography
          sx={{ marginTop: "40px", marginBottom: "30px", fontSize: "2rem" }}
        >
          <b>Register</b>
        </Typography>
        {invalidUsername ? (
          <Alert severity="error">{invalidUsernameMessage}</Alert>
        ) : (
          <></>
        )}
        <Box
          component="form"
          onSubmit={handleSubmit}
          id="login-form-box"
          display={"flex"}
          sx={{
            textAlign: "center",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            margin="normal"
            id="username"
            label="Username"
            autoComplete="current-username"
            size="small"
            name="login"
            sx={{
              width: "250px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
              },
            }}
            required
            onChange={(e) => toggleInvalidUsername(false)}
          />
          <TextField
            margin="normal"
            id="email"
            label="Email"
            autoComplete="current-email"
            size="small"
            name="login"
            sx={{
              width: "250px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
              },
            }}
            required
            onChange={(e) => toggleInvalidUsername(false)}
          />
          <TextField
            margin="normal"
            id="password"
            label="Password"
            autoComplete="current-password"
            size="small"
            name="password"
            sx={{
              width: "250px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
              },
            }}
            required
            type={visibility ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleVisibility}>
                    {visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(e) => toggleInvalidUsername(false)}
          />
                    <TextField
            margin="normal"
            id="confirm-password"
            label="Confirm Password"
            autoComplete="current-password"
            size="small"
            name="password"
            sx={{
              width: "250px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
              },
            }}
            required
            type={visibility ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleVisibility}>
                    {visibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={(e) => toggleInvalidUsername(false)}
          />
          <Button
            margin="normal"
            type="submit"
            variant="contained"
            sx={{ marginTop: "20px", borderRadius: "15px", marginBottom: "30px" }}
          >
            REGISTER
          </Button>
          Already have an account?
          <Link to ="/Login">
            {'LOGIN'}
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default RegisterForm;
