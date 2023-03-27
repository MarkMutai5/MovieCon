import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const LoginForm = () => {

    const router = useRouter()

  return (
    <>
        <Box
        sx = {{display: 'flex', justifyContent: 'center', pt:24,}}>
            <Box sx = {{width: '40%', p:4, border:1, backgroundColor: ''}}>
                <TextField 
                    label = 'Email or Phone Number'
                    name='email'
                    margin='normal'
                    sx = {{width: '100%'}}
                />
                <br />
                <TextField 
                    label = 'Password'
                    name='password'
                    margin='normal'
                    sx = {{width: '100%'}}
                />
                <br />
                <Button variant='outlined' sx = {{width: '100%', p:2}}>Sign In</Button>
                <Box sx = {{display: 'flex', justifyContent: 'space-between'}}>
                    <FormControlLabel control={<Checkbox defaultChecked/>} label = 'Remember Me'/>
                    <Typography variant = 'body1' sx ={{pt:1}}>Need Help?</Typography>
                </Box>
                <Box sx ={{pt:8}}>
                <span>New to Netflix?</span><span onClick={() => router.push('/')} 
                sx = {{cursor: 'pointer'}}> Create One</span>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default LoginForm