import { useContext } from 'react';
import { AppBar, Avatar, IconButton, Link, Stack, Toolbar, Typography } from "@mui/material";
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { UIContext } from '../../context/ui/UIContext';
import NextLink from 'next/link';



export const Navbar = () => {

  const { openSideMenu } = useContext( UIContext )

  return (
    <AppBar position='sticky'>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
                onClick={openSideMenu}
            >
                <ListOutlinedIcon/>
            </IconButton>

            <NextLink href="/" passHref style={{textDecoration:'none', color:'white'}}>

                <Typography variant="h6">TaakBord</Typography>
  
            </NextLink>
        </Toolbar>
    </AppBar>
  )
}
