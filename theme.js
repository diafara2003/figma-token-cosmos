
import { createTheme } from "@mui/material/styles";

export const cosmosTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5323de',
      light: '#9588fd',
      dark: '#3a1a98',
      contrastText: '#ffffff',
      50: '#f3f3ff',
      100: '#f3f3ff',
      200: '#d6d5ff',
      300: '#b9b3ff',
      600: '#7358fa',
      700: '#6135f2',
      800: '#451dba',
    },
    secondary: {
      main: '#00bcd4',
      light: '#26c6da',
      dark: '#0097b9',
      contrastText: '#ffffff',
    },
    error: {
      main: '#d14343',
      light: '#d85f5f',
      dark: '#b51e1e',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#fb8500',
      light: '#fc9726',
      dark: '#f85500',
      contrastText: '#ffffff',
    },
    info: {
      main: '#2d9fc5',
      light: '#4dadce',
      dark: '#1172a3',
      contrastText: '#ffffff',
    },
    success: {
      main: '#8fc93a',
      light: '#a0d158',
      dark: '#60a918',
      contrastText: '#ffffff',
    },
    grey: {
      50: '#fbfbfb',
      100: '#f5f5f6',
      200: '#eaebec',
      300: '#dcdee0',
      400: '#ced1d4',
      500: '#c4c7ca',
      600: '#b9bdc1',
      700: '#b2b7bb',
      800: '#aaaeb3',
      900: '#a2a6ab',
    },
    text: {
      primary: '#101840',
      secondary: '#101840',
      disabled: '#101840',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    divider: '#000000',
    action: {
      active: '#101840',
      hover: '#101840',
      selected: '#101840',
      disabled: '#101840',
      disabledBackground: '#101840',
    },
  },
  typography: {
    fontFamily: '"IBM Plex Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '40px',
      lineHeight: '48px',
      letterSpacing: '-1.5px',
      fontWeight: 500,
    },
    h2: {
      fontSize: '32px',
      lineHeight: '40px',
      letterSpacing: '-0.5px',
      fontWeight: 500,
    },
    h3: {
      fontSize: '28px',
      lineHeight: '32px',
      letterSpacing: '0px',
      fontWeight: 500,
    },
    h4: {
      fontSize: '22px',
      lineHeight: '24px',
      letterSpacing: '0.25px',
      fontWeight: 500,
    },
    h5: {
      fontSize: '18px',
      lineHeight: '24px',
      letterSpacing: '0px',
      fontWeight: 500,
    },
    h6: {
      fontSize: '16px',
      lineHeight: '16px',
      letterSpacing: '0.15000000596046448px',
      fontWeight: 500,
    },
    body1: {
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '0.15000000596046448px',
    },
    body2: {
      fontSize: '13px',
      lineHeight: '16px',
      letterSpacing: '0.17000000178813934px',
    },
    subtitle1: {
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '0.15000000596046448px',
    },
    subtitle2: {
      fontSize: '13px',
      lineHeight: '16px',
      letterSpacing: '0.10000000149011612px',
    },
    overline: {
      fontSize: '11px',
      lineHeight: '24px',
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
    caption: {
      fontSize: '11px',
      lineHeight: '14px',
      letterSpacing: '0.4000000059604645px',
    },
    button: {
      fontSize: '13px',
      lineHeight: '20px',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 4,
        },
        sizeLarge: {
          padding: '8px 22px',
          fontSize: '14px',
        },
        sizeMedium: {
          padding: '6px 16px',
          fontSize: '13px',
        },
        sizeSmall: {
          padding: '4px 10px',
          fontSize: '12.100000381469727px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontSize: '11px',
          lineHeight: '14px',
        },
        colorPrimary: {
          backgroundColor: '#c4e1f5',
          color: '#5a5e73',
        },
        colorSecondary: {
          backgroundColor: '#c4f6fd',
          color: '#5a5e73',
        },
        colorError: {
          backgroundColor: '#fcd4d4',
          color: '#5a5e73',
        },
        colorWarning: {
          backgroundColor: '#fce4c0',
          color: '#5a5e73',
        },
        colorInfo: {
          backgroundColor: '#c0e8fc',
          color: '#5a5e73',
        },
        colorSuccess: {
          backgroundColor: '#ddf8c3',
          color: '#5a5e73',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardError: {
          backgroundColor: '#f9e8e8',
          color: '#101840',
        },
        standardWarning: {
          backgroundColor: '#fff0e0',
          color: '#101840',
        },
        standardInfo: {
          backgroundColor: '#e6f3f8',
          color: '#101840',
        },
        standardSuccess: {
          backgroundColor: '#f2f9e7',
          color: '#101840',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#d6d5ff',
          color: '#3a1a98',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: '#f5f5f6',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        thumb: {
          backgroundColor: '#fbfbfb',
        },
        track: {
          backgroundColor: '#000000',
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          color: '#ffb400',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ced1d4',
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
        cell: {
          padding: '4px',
        },
      },
    },
  },
});

export const cosmosDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9588fd',
      light: '#b9b3ff',
      dark: '#5323de',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#26c6da',
      light: '#80deea',
      dark: '#00bcd4',
      contrastText: '#ffffff',
    },
    error: {
      main: '#e8a1a1',
      light: '#f9e8e8',
      dark: '#cc3d3d',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#fdc280',
      light: '#fff0e0',
      dark: '#fa7d00',
      contrastText: '#ffffff',
    },
    info: {
      main: '#96cfe2',
      light: '#e6f3f8',
      dark: '#2897bf',
      contrastText: '#ffffff',
    },
    success: {
      main: '#c7e49d',
      light: '#f2f9e7',
      dark: '#87c334',
      contrastText: '#ffffff',
    },
    grey: {
      50: '#202020',
      100: '#242424',
      200: '#262626',
      300: '#282828',
      400: '#323232',
      500: '#343434',
      600: '#383838',
      700: '#424242',
      800: '#464646',
      900: '#484848',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
      disabled: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#202020',
    },
    divider: '#ffffff',
    action: {
      active: '#ffffff',
      hover: '#ffffff',
      selected: '#ffffff',
      disabled: '#ffffff',
      disabledBackground: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"IBM Plex Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '40px',
      lineHeight: '48px',
      letterSpacing: '-1.5px',
      fontWeight: 500,
    },
    h2: {
      fontSize: '32px',
      lineHeight: '40px',
      letterSpacing: '-0.5px',
      fontWeight: 500,
    },
    h3: {
      fontSize: '28px',
      lineHeight: '32px',
      letterSpacing: '0px',
      fontWeight: 500,
    },
    h4: {
      fontSize: '22px',
      lineHeight: '24px',
      letterSpacing: '0.25px',
      fontWeight: 500,
    },
    h5: {
      fontSize: '18px',
      lineHeight: '24px',
      letterSpacing: '0px',
      fontWeight: 500,
    },
    h6: {
      fontSize: '16px',
      lineHeight: '16px',
      letterSpacing: '0.15000000596046448px',
      fontWeight: 500,
    },
    body1: {
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '0.15000000596046448px',
    },
    body2: {
      fontSize: '13px',
      lineHeight: '16px',
      letterSpacing: '0.17000000178813934px',
    },
    button: {
      fontSize: '13px',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardError: {
          backgroundColor: '#cc3d3d',
          color: '#101840',
        },
        standardWarning: {
          backgroundColor: '#fa7d00',
          color: '#101840',
        },
        standardInfo: {
          backgroundColor: '#2897bf',
          color: '#101840',
        },
        standardSuccess: {
          backgroundColor: '#87c334',
          color: '#101840',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#424242',
          color: '#424242',
        },
      },
    },
  },
});

// Exportar tema por defecto
export default cosmosTheme;

// Exportar todos los temas disponibles
export const themes = {
  cosmos: cosmosTheme,
  cosmosDark: cosmosDarkTheme,
};
