import { useContext } from "react";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import { UIContext } from "../../context/ui";

const menuItems: string[] = ["Usuario", "Agregar Panel", "Configuracion", "Salir"];

export const Sidebar = () => {
  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sidemenuOpen} onClose={closeSideMenu}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h5" style={{textAlign: 'center'}}>Menú TaakBord</Typography>
        </Box>

        <Stack direction="row" spacing={5}>
          <Avatar alt="Remy Sharp" src=""  sx={{ width: 54, height: 54, margin: 'auto' }} />
        </Stack>

        <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? (
                  <AccountCircleOutlinedIcon />
                ) : (
                  <SettingsApplicationsOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

        <Divider />
      </Box>
    </Drawer>
  );
};
