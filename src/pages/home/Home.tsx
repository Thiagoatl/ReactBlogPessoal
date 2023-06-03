import React, { useEffect } from 'react';
import './Home.css';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import imagem from '../../assets/imagens/influencer.svg'
import imagem2 from '../../assets/imagens/influencer2.svg'
import imagem3 from '../../assets/imagens/influencer3.svg'
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/token/Reducer';
import { toast } from 'react-toastify';

export default function Home() {

    let navigate = useNavigate();
    // const [token, setToken] = useLocalStorage('token');

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    useEffect(() => {
        if (token == "") {
            // alert("Você precisa estar logado")
            toast.error('Você precisa estar logado',{
                position:"top-right",
                autoClose:2000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:false,
                theme:"colored",
                progress:undefined
            })
            navigate("/login")

        }
    }, [token])
   return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ height: 320, backgroundColor: "#dedede" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Seja bem vindo(a) ao AltBlog!</Typography>
                        <Typography variant="h5" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Fique a vontade para ver postagens!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button id="button-p" variant="outlined" >
                            <Link to="/postagens" style={{ textDecoration: 'none' }}><span style={{color:'black', fontFamily: 'inherit', fontSize: 'inherit' }}>
                                Ver Postagens
                            </span></Link>
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src={imagem} alt="logo" width="450px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

            <Grid container direction="row-reverse" justifyContent="center" alignItems="center" style={{ height: 300, backgroundColor: "black" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Ou se preferir...</Typography>
                        <Typography variant="h5" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>Veja os nossos temas!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button id="button-p" variant="outlined" >
                            <Link to="/temas" style={{ textDecoration: 'none' }}><span style={{color:'black', fontFamily: 'inherit', fontSize: 'inherit' }}>
                                Ver Temas
                            </span></Link>
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src={imagem2} alt="logo" width="450px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ height: 300, backgroundColor: "#dedede" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Também conheça</Typography>
                        <Typography variant="h5" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Nossos outros projetos!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button id="button-p" variant="outlined">Ver Projetos</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src={imagem3} alt="logo" width="450px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}