import React, {ChangeEvent, useState, useEffect} from 'react';
import './Login.css'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import { useDispatch } from 'react-redux';
import { addId, addToken } from '../../store/token/Action';
import { toast } from 'react-toastify';


export default function Login() {
    let history = useNavigate();
        //  const [token, setToken] = useLocalStorage('token');

    const dispatch = useDispatch();
    const [token, setToken] = useState("");
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id:0,
            usuario:'',
            senha:'',
            token:''
        }
    )

    const  [respUserLogin, setRespUserLogin] = useState <UserLogin> ({
        id:0,
        usuario:'',
        senha:'',
        token:''
    })

    function UpdatedModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [e.target.name]:e.target.value
     })
    }
    useEffect(()=>{
        if(token !== ''){
            console.log("Token: ", token)
            dispatch(addToken(token))
            history('/home')
        }
    }, [token])


    useEffect (()=>{
        if (respUserLogin.token !== ''){
        dispatch(addToken(respUserLogin.token))
        dispatch(addId(respUserLogin.id.toString()))
        history('/home')
        }
    },[respUserLogin.token] )

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
          await login(`/usuarios/logar`, userLogin, setRespUserLogin)
           // alert("Usuario logado com sucesso!");
           toast.success('Usuario logado com sucesso',{
            position:"top-right",
            autoClose:2000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:false,
            theme:"colored",
            progress:undefined
        })
        }catch(error){
            // alert("Usuario não encontrado")
            toast.error('Usuario não encontrado',{
                position:"top-right",
                autoClose:2000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:false,
                theme:"colored",
                progress:undefined
            })
        }
      // console.log("userLogin:" + Object.values(userLogin))
    }

    return (
        <>
        <Grid container direction='row' justifyContent='center' alignItems='center' style={{ backgroundColor: 'white'}}>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => UpdatedModel(e)} id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => UpdatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password'fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                            
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>

        </>
    )
};