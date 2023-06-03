import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';

import './Footer.css';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';

export default function Footer() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    var footerComponent;
    if (token !== '') {
        footerComponent =

        <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box style={{ backgroundColor: "black", height: "65px" }}>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography align="center" gutterBottom style={{ color: "white", fontWeight:"60" }}>Siga-me em outras redes </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://www.instagram.com/thiagoatl_/" target="_blank">
                        <InstagramIcon style={{ fontSize: 30, color: "white" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/thiagoatl/" target="_blank">
                        <LinkedInIcon style={{ fontSize: 30, color: "white" }} />
                    </a>
                    <a href="https://github.com/Thiagoatl" target="_blank">
                        <GitHubIcon style={{ fontSize: 30, color: "white" }} />
                    </a>
                    
                </Box>
            </Box>
            <Box id='fot' style={{ backgroundColor: "black", height: "20px" }}>
                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white", fontSize:"8px", fontWeight:"200" }} >© 2023 Thiago Almeida Trevisani</Typography>
            </Box>
        </Grid>
    </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
};