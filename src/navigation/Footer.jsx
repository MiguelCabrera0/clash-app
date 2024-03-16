import { Box, Container, Paper, Typography } from "@mui/material";
import React from "react";
import './nav.css';

const Footer = () => {
    return (
        <Paper
            component="footer"
            square
            variant="outlined"
            className="footer"
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        my: 1
                    }}
                >
                    <div>
                        <img src="/clash-app/clashIcon.png" width={75} alt="Logo" />
                    </div>
                </Box>
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography variant="caption" color="initial">
                        Miguel Cabrera 2024.
                    </Typography>
                </Box>
            </Container>
        </Paper>
    )
};

export default Footer;
