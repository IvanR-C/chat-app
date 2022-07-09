import React from 'react'
import {
    Container,
    CssBaseline
} from '@mui/material'

import RegisterForm from '../components/RegisterForm'

const Register = () => {
    
    return(
        <Container maxWidth="xs" id="login-container" sx={{height: "100vh"}}>
            <CssBaseline/>
            <RegisterForm/>
        </Container>
    )
}

export default Register