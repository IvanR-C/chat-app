import React from 'react'
import {
    Box,
    CssBaseline,
} from '@mui/material'

import Contactos from '../components/Contactos'
import ChatHeader from '../components/ChatHeader'

const Chat = () => {
    
    return(
        <Box sx={{minHeight: "100vh", minWidth: "100vh"}}>
            <CssBaseline/>
            <Contactos/>
        </Box>
    )
}

export default Chat