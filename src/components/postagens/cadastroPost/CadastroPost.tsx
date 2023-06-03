import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import {useNavigate, useParams } from 'react-router-dom'
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';
import { toast } from 'react-toastify';
import User from '../../../models/User';

function CadastroPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    // const [token, setToken] = useLocalStorage('token');
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const userId = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    )


    useEffect(() => {
        if (token == "") {
            //alert("Você precisa estar logado")
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

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            descricao: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        tema: null,
        usuario:null,
    })

    const [user, setUser] = useState<User>({
        id: + userId,
        nome: '',
        usuario: '',
        senha: '',
        foto:''
    })

    useEffect(() => { 
        setPostagem({
            ...postagem,
            tema: tema,
            usuario: user
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await busca("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscaId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            //alert('Postagem atualizada com sucesso');
            toast.success('Postagem atualizada com sucesso',{
                position:"top-right",
                autoClose:2000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:false,
                theme:"colored",
                progress:undefined
            })
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
           // alert('Postagem cadastrada com sucesso');
           toast.success('Postagem cadastrada com sucesso',{
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
        back()

    }

    function back() {
        navigate('/postagens')
    }

    return (
        <Container maxWidth="sm" className="cadastroPost">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" style={{color:"white", padding:"30px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"}} component="h1" align="center" >Cadastro postagem</Typography>
                <TextField
  value={postagem.titulo}
  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
  id="asdasd"
  label="titulo"
  variant="outlined"
  name="titulo"
  margin="normal"
  fullWidth
  className="customTextField"
  
/>
                <TextField value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="asdasd" label="texto" name="texto" variant="outlined" margin="normal" fullWidth className="customTextField" />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText id='demo-simple-select-helper'>Escolha um tema para a postagem</FormHelperText>
                    
                <Button type='submit' variant="contained" disableElevation style={{ color: "#000000", fontWeight: "bolder", background:"white" }}>FINALIZAR</Button>
              
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;