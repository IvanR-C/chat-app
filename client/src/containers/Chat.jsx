import React from 'react'
import {
    Box,
    CssBaseline,
} from '@mui/material'

import ChatBox from '../components/ChatBox'
import ChatHeader from '../components/ChatHeader'

const Chat = () => {
    
    return(
        <Box sx={{minHeight: "100vh", minWidth: "100vh"}}>
            <CssBaseline/>
            <ChatHeader/>
        </Box>
    )
}

export default Chat