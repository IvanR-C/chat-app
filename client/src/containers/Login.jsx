import React from 'react'
import {
    Container,
    CssBaseline
} from '@mui/material'

import LoginForm from '../components/LoginForm'

const Login = () => {
    
    return(
        <Container maxWidth="xs" id="login-container" sx={{height: "100vh"}}>
            <CssBaseline/>
            <LoginForm/>
        </Container>
    )
}

export default Login