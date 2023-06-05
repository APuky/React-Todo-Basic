import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [validation, setValidation] = useState()

    const navigate = useNavigate()
    function handleFormSubmit(e){
        e.preventDefault()
        if (!username){
            setValidation("username")
            return ;
        }
        if (!password) {
            setValidation("password")
            return;
        }
        localStorage.setItem("isLoggedIn", 1)
        navigate("/")


    }
    return <>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <LoginIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleFormSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        helperText={validation === "username" ? "Please enter a username." : ""}
                        error = {validation === "username" ? true : ""}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        helperText={validation === "password" ? "Please enter a password." : ""}
                        error = {validation === "password" ? true : ""}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>

        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >  
        </Box>
    </>
}