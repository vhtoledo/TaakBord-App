import { useContext } from 'react';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { UIContext } from '../../context/ui/UIContext';



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

            <Typography variant="h6">TaakBord</Typography>
        </Toolbar>
    </AppBar>
  )
}
