import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar  className="tab"  position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre mim" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h4" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre mim</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='sobreNos'>
            Olá, sou Amanda e tenho 18 anos.

            Sempre fui uma criança apaixonada por tecnologia e desde cedo tive certeza de que meu objetivo era ajudar as pessoas através do desenvolvimento de softwares.
            <br />
            Em 2021, quando eu estava no 2º ano do ensino médio, estudando online devido à pandemia, me vi muito entediada e resolvi aproveitar o meu tempo livre para estudar programação por conta própria.
            <br />
            Até que, alguns meses depois, pude ingressar no curso técnico de Desenvolvimento de Sistemas pelo SENAI. Lá, tive mais contato com tecnologia, com aulas de: hardware e redes, sistemas operacionais, programação orientada a objeto, linguagens de marcação, banco de dados, programação web backend e frontend, testes de softwares. Aprendi também como trabalhar em grupo e sobre metodologias ágeis. Graças ao curso técnico, tive a experiência de trabalhar como jovem aprendiz e entender melhor como um ambiente corporativo funciona.
            <br />
            Após formada no técnico, decidi entrar no bootcamp de Desenvolvimento Java Fullstack da Generation, um programa intenso realizado de forma remota, onde pude desenvolver diversos projetos usando Java, Spring, MySQL, React e outras tecnologias. Além de todos os conhecimentos técnicos, também desenvolvi muitas soft skills.
            <br />
            Atualmente, estou em busca de oportunidades para aplicar os conhecimentos adquiridos e continuar crescendo na área de desenvolvimento de software. Gosto de me desafiar e aprender coisas novas, por isso estou sempre buscando me atualizar e aprender novas tecnologias.
            <br/>
            Para saber mais sobre mim e sobre os projetos que já realizei, é só acessar meu <a target="_blank" className='tabLink' href='https://github.com/amandaribeiro0'>Github</a> e <a className='tabLink' target="_blank" href='https://www.linkedin.com/in/amanda--costa/'>LinkedIn</a>. Vou adorar trocar conhecimentos com vocês. Obrigada!
          
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;