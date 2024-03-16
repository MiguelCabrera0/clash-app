import { Box, Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import '../Auth.css';

const SignUpTemplate = ({ onSubmit }) => {
    return (
        <Grid
            container
            className='loginBox'>
            <Grid
                item
                xs={12}
                sm={8}
                md={4}
                component={Paper}
                elevation={1}
            >
                <form className='loginForm2' onSubmit={onSubmit}>
                    <img
                        src='/clashIcon.png'
                        alt='clashLogo'
                        style={{ width: 150, justifySelf: 'center' }}
                    />
                    <Typography variant='h5'>
                        Sign Up
                    </Typography>
                    <TextField id="user" label="User Name" variant="outlined" />
                    <TextField id="name" label="Name" variant="outlined" />
                    <TextField id="lastName" label="Last Name" variant="outlined" />
                    <TextField id="password" label="Password" variant="outlined" type='password' />
                    <TextField id="password2" label="Confirm Password" variant="outlined" type='password' />
                    <Button type='submit' variant='contained'>
                        Submit
                    </Button>
                    <Link href="/signin" style={{ justifySelf: 'end' }}>
                        Sign In
                    </Link>
                </form>
            </Grid>
        </Grid>
    );
};

export default SignUpTemplate;
