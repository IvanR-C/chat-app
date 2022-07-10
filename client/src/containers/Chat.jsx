import React from 'react'
import {
    Box,
    CssBaseline,
} from '@mui/material'

import Contacts from '../components/Contacts'
import ChatBox from '../components/ChatBox'
// import ChatHeader from  '../components/ChatHeader'

const Chat = () => {
    
    return(
        <Box sx={{minHeight: "100vh", minWidth: "100vh", display:"flex"}}>
            <CssBaseline/>
            
            <Contacts/>
            <ChatBox/>
            
        </Box>
    )
}

export default Chat