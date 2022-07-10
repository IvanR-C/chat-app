import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material';
import Login from './Login'
import Register from './Register'
import Chat from './Chat'
const font = "'Montserrat', sans-serif"
const theme = createTheme ({ typography: {fontFamily:font}, palette: {AppBar: {background: "#9c9c9c"}}})

function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Routes>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Register" element={<Register/>}/>
        <Route exact path="/Chat" element={<Chat/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
