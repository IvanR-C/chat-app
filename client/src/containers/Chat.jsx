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
        <Box sx={{ display:"grid", gridTemplateColumns: "1fr 3fr"}}>
            <CssBaseline/>
            <Contacts/>
            <ChatBox/>
            
        </Box>
    )
}

export default Chat