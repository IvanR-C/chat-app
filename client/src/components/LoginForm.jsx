import React, {useState} from 'react'

import {
    Paper, TextField, Typography, Box, Button, IconButton, InputAdornment, Alert
} from '@mui/material'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginForm = () => {

    const [visibility, setVisibility] = useState(false)

    const loginErrorMessage = "Invalid Username or Password"

    const [loginError, setLoginError] = useState(false)

    const toggleVisibility = () => {
        setVisibility(!visibility)
    }

    const toggleLoginError = (boolean) => {
        setLoginError(boolean)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget)
        const login = data.get("login")
        const password = data.get("password")

        if(login != "guillesaez15" || password != "1234"){
            console.log(login + " " + password)
            toggleLoginError(true)
        }


        /*
        try{
            const response = await axios.post('/sever/login', {login : login, password: password})

        } catch(err){
            console.log(err)
        }
        
        */
     }

    return(
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "200px"}}>
            <Paper sx={{height: "400px", width: "350px", textAlign: "center", borderRadius: '20px'}}>
                <Typography
                sx={{marginTop: "20px"}}>
                    Sign In
                </Typography>
                {loginError ? <Alert severity='error'>
                    {loginErrorMessage}
                </Alert> : <></>}
                <Box component="form" onSubmit={handleSubmit} id="login-form-box"  display={"flex"} sx={{textAlign: "center", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <TextField
                        margin="normal"
                        id="username"
                        label="Username"
                        autoComplete="current-username"
                        size="small"
                        name="login"
                        sx={{width: "200px", 
                            '& .MuiOutlinedInput-root': {
                                borderRadius: "15px"
                            }
                        }}
                        required
                        onChange={e => toggleLoginError(false)}
                    />
                    <TextField 
                        margin="normal"
                        id="password"
                        label="Password"
                        autoComplete="current-password"
                        size="small"
                        name="password"
                        sx={{width: "200px", 
                            '& .MuiOutlinedInput-root': {
                                borderRadius: "15px"
                            }
                        }}
                        required
                        type={visibility ? "text" : "password"}
                        InputProps={{
                            endAdornment: <InputAdornment position='end'>
                                <IconButton onClick={toggleVisibility}>
                                    {visibility ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                                </IconButton>
                            </InputAdornment>
                        }}
                        onChange={e => toggleLoginError(false)}
                    />
                    <Button 
                        margin="normal"
                        type="submit"
                        variant = "outlined"
                        sx={{marginTop: '20px', borderRadius: "15px"}}
                    >
                        SIGN IN
                    </Button>
                </Box>
            </Paper>
        </Box>
        
        
    )
}

export default LoginForm