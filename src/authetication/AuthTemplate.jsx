import { Button, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import './Auth.css';

const AuthTemplate = ({ onSubmit, handleChangePage }) => {
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
                <form className='loginForm' onSubmit={onSubmit}>
                    <img
                        src='/clash-app/clashIcon.png'
                        alt='clashLogo'
                        style={{ width: 150, justifySelf: 'center' }}
                    />
                    <Typography variant='h5'>
                        Sign In
                    </Typography>
                    <TextField id="user" label="User" variant="outlined" />
                    <TextField id="password" label="Password" variant="outlined" type='password' />
                    <Button type='submit' variant='contained'>
                        Sign In
                    </Button>
                    <Link onClick={() => handleChangePage('signup')} style={{ justifySelf: 'end' }}>
                        Sign Up
                    </Link>
                </form>
            </Grid>
        </Grid>
    );
};

export default AuthTemplate;
