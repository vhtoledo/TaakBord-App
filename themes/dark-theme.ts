import { createTheme } from "@mui/material";
import { blue, red } from '@mui/material/colors'

export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: blue[300]
      },
      primary: {
        main: '#fff'
      },
      secondary: {
        main: '#fff'
      },
      error: {
        main: red.A400
      }
    },

    components: {
        MuiAppBar: {
          defaultProps: {
            elevation: 5
          },
          styleOverrides: {
            root: {
              backgroundColor: '#000'
            }
          }
        }
    }
  });