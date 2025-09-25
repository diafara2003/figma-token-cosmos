
import { createTheme } from "@mui/material/styles";

export const CosmosTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '{primary.main}',
      light: '{primary.light}',
      dark: '{primary.dark}',
      contrastText: '#ffffff',
      50: '{primary.50}',
      100: '{primary.100}',
      200: '{primary.200}',
      300: '{primary.300}',
      
      
      600: '{primary.500}',
      700: '{primary.600}',
      800: '{primary.800}',
      
    },
    secondary: {
      main: '{secondary.main}',
      light: '{secondary.light}',
      dark: '{secondary.dark}',
      contrastText: '#ffffff',
      50: '{secondary.50}',
      100: '{secondary.100}',
      200: '{secondary.200}',
      300: '{secondary.300}',
      
      
      600: '{secondary.600}',
      700: '{secondary.700}',
      800: '{secondary.800}',
      
    },
    error: {
      main: '{error.main}',
      light: '{error.light}',
      dark: '{error.dark}',
      contrastText: '#ffffff',
    },
    warning: {
      main: '{warning.main}',
      light: '{warning.light}',
      dark: '{warning.dark}',
      contrastText: '#ffffff',
    },
    info: {
      main: '{info.main}',
      light: '{info.light}',
      dark: '{info.dark}',
      contrastText: '#ffffff',
    },
    success: {
      main: '{success.main}',
      light: '{success.light}',
      dark: '{success.dark}',
      contrastText: '#ffffff',
    },
    grey: {
      50: '{grey.50}',
      100: '{grey.100}',
      200: '{grey.200}',
      300: '{grey.300}',
      400: '{grey.400}',
      500: '{grey.500}',
      600: '{grey.600}',
      700: '{grey.700}',
      800: '{grey.800}',
      900: '{grey.900}',
      
      
      
      
    },
    text: {
      primary: 'rgba(16, 24, 64, 0.87)',
      secondary: 'rgba(16, 24, 64, 0.60)',
      disabled: 'rgba(16, 24, 64, 0.38)',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    action: {
      active: 'rgba(16, 24, 64, 0.54)',
      hover: 'rgba(16, 24, 64, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(16, 24, 64, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(16, 24, 64, 0.26)',
      disabledBackground: 'rgba(16, 24, 64, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(16, 24, 64, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  typography: {
    fontFamily: '"IBM Plex Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '40',
      fontWeight: 300,
      lineHeight: '48',
      letterSpacing: '-1.5',
    },
    h2: {
      fontSize: '32',
      fontWeight: 300,
      lineHeight: '40',
      letterSpacing: '-0.5',
    },
    h3: {
      fontSize: '28',
      fontWeight: 400,
      lineHeight: '32',
      letterSpacing: "0em",
    },
    h4: {
      fontSize: '22',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: '0.25',
    },
    h5: {
      fontSize: '18',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: "0em",
    },
    h6: {
      fontSize: '16',
      fontWeight: 500,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    body1: {
      fontSize: '14',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    body2: {
      fontSize: '13',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.17000000178813934',
    },
    subtitle1: {
      fontSize: '14',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    subtitle2: {
      fontSize: '13',
      fontWeight: 500,
      lineHeight: '16',
      letterSpacing: '0.10000000149011612',
    },
    caption: {
      fontSize: '11',
      fontWeight: 400,
      lineHeight: '14',
      letterSpacing: '0.4000000059604645',
    },
    overline: {
      fontSize: '11',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: '1',
      textTransform: 'uppercase',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
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
    
    
    
    
    
    
    
    
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: NaN,
        },
        cell: {
          padding: '{0,5Gap}px',
        },
      },
    },
  },
});


import { createTheme } from "@mui/material/styles";

export const CosmosDarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '{primary.light}',
      light: '{primary.300}',
      dark: '{primary.main}',
      contrastText: '#ffffff',
      50: '{primary.600}',
      100: '{primary.50}',
      200: '{primary.100}',
      300: '{primary.200}',
      
      
      600: '{primary.500}',
      700: '{primary.dark}',
      800: '{primary.800}',
      
    },
    secondary: {
      main: '{secondary.light}',
      light: '{secondary.200}',
      dark: '{secondary.main}',
      contrastText: '#ffffff',
      50: '{secondary.50}',
      100: '{secondary.100}',
      200: '{secondary.200}',
      300: '{secondary.300}',
      
      
      600: '{secondary.600}',
      700: '{secondary.700}',
      800: '{secondary.800}',
      
    },
    error: {
      main: '{error.200}',
      light: '{error.50}',
      dark: '{error.600}',
      contrastText: '#ffffff',
    },
    warning: {
      main: '{warning.200}',
      light: '{warning.50}',
      dark: '{warning.600}',
      contrastText: '#ffffff',
    },
    info: {
      main: '{info.200}',
      light: '{info.50}',
      dark: '{info.600}',
      contrastText: '#ffffff',
    },
    success: {
      main: '{success.200}',
      light: '{success.50}',
      dark: '{success.600}',
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
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.60)',
      disabled: 'rgba(255, 255, 255, 0.38)',
    },
    background: {
      default: '#121212',
      paper: '#202020',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    action: {
      active: 'rgba(255, 255, 255, 0.54)',
      hover: 'rgba(255, 255, 255, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(255, 255, 255, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(255, 255, 255, 0.26)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  typography: {
    fontFamily: '"IBM Plex Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '40',
      fontWeight: 300,
      lineHeight: '48',
      letterSpacing: '-1.5',
    },
    h2: {
      fontSize: '32',
      fontWeight: 300,
      lineHeight: '40',
      letterSpacing: '-0.5',
    },
    h3: {
      fontSize: '28',
      fontWeight: 400,
      lineHeight: '32',
      letterSpacing: "0em",
    },
    h4: {
      fontSize: '22',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: '0.25',
    },
    h5: {
      fontSize: '18',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: "0em",
    },
    h6: {
      fontSize: '16',
      fontWeight: 500,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    body1: {
      fontSize: '14',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    body2: {
      fontSize: '13',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.17000000178813934',
    },
    subtitle1: {
      fontSize: '14',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    subtitle2: {
      fontSize: '13',
      fontWeight: 500,
      lineHeight: '16',
      letterSpacing: '0.10000000149011612',
    },
    caption: {
      fontSize: '11',
      fontWeight: 400,
      lineHeight: '14',
      letterSpacing: '0.4000000059604645',
    },
    overline: {
      fontSize: '11',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: '1',
      textTransform: 'uppercase',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
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
    
    
    
    
    
    
    
    
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: NaN,
        },
        cell: {
          padding: '{0,5Gap}px',
        },
      },
    },
  },
});


import { createTheme } from "@mui/material/styles";

export const CosmosTestTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '{test COSMOS.main}',
      light: '{test COSMOS.light}',
      dark: '{test COSMOS.dark}',
      contrastText: '#ffffff',
      50: '{test COSMOS.50}',
      100: '{test COSMOS.100}',
      200: '{test COSMOS.200}',
      300: '{test COSMOS.300}',
      
      
      600: '{test COSMOS.600}',
      700: '{test COSMOS.700}',
      800: '{test COSMOS.800}',
      
    },
    secondary: {
      main: '{secondary.main}',
      light: '{secondary.light}',
      dark: '{secondary.dark}',
      contrastText: '#ffffff',
      50: '{secondary.50}',
      100: '{secondary.100}',
      200: '{secondary.200}',
      300: '{secondary.300}',
      
      
      600: '{secondary.600}',
      700: '{secondary.700}',
      800: '{secondary.800}',
      
    },
    error: {
      main: '{error.main}',
      light: '{error.light}',
      dark: '{error.dark}',
      contrastText: '#ffffff',
    },
    warning: {
      main: '{warning.main}',
      light: '{warning.light}',
      dark: '{warning.dark}',
      contrastText: '#ffffff',
    },
    info: {
      main: '{info.main}',
      light: '{info.light}',
      dark: '{info.dark}',
      contrastText: '#ffffff',
    },
    success: {
      main: '{success.main}',
      light: '{success.light}',
      dark: '{success.dark}',
      contrastText: '#ffffff',
    },
    grey: {
      50: '{grey.50}',
      100: '{grey.100}',
      200: '{grey.200}',
      300: '{grey.300}',
      400: '{grey.400}',
      500: '{grey.400}',
      600: '{grey.600}',
      700: '{grey.700}',
      800: '{grey.800}',
      900: '{grey.900}',
      
      
      
      
    },
    text: {
      primary: 'rgba(16, 24, 64, 0.87)',
      secondary: 'rgba(16, 24, 64, 0.60)',
      disabled: 'rgba(16, 24, 64, 0.38)',
    },
    background: {
      default: '{test COSMOS.100}',
      paper: '{test COSMOS.50}',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    action: {
      active: 'rgba(16, 24, 64, 0.54)',
      hover: 'rgba(16, 24, 64, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(16, 24, 64, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(16, 24, 64, 0.26)',
      disabledBackground: 'rgba(16, 24, 64, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(16, 24, 64, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  typography: {
    fontFamily: '"IBM Plex Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '40',
      fontWeight: 300,
      lineHeight: '48',
      letterSpacing: '-1.5',
    },
    h2: {
      fontSize: '32',
      fontWeight: 300,
      lineHeight: '40',
      letterSpacing: '-0.5',
    },
    h3: {
      fontSize: '28',
      fontWeight: 400,
      lineHeight: '32',
      letterSpacing: "0em",
    },
    h4: {
      fontSize: '22',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: '0.25',
    },
    h5: {
      fontSize: '18',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: "0em",
    },
    h6: {
      fontSize: '16',
      fontWeight: 500,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    body1: {
      fontSize: '14',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    body2: {
      fontSize: '13',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.17000000178813934',
    },
    subtitle1: {
      fontSize: '14',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    subtitle2: {
      fontSize: '13',
      fontWeight: 500,
      lineHeight: '16',
      letterSpacing: '0.10000000149011612',
    },
    caption: {
      fontSize: '11',
      fontWeight: 400,
      lineHeight: '14',
      letterSpacing: '0.4000000059604645',
    },
    overline: {
      fontSize: '11',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: '1',
      textTransform: 'uppercase',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
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
    
    
    
    
    
    
    
    
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: NaN,
        },
        cell: {
          padding: '{0,5Gap}px',
        },
      },
    },
  },
});


import { createTheme } from "@mui/material/styles";

export const CosmosAlternativoTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#436eb4',
      light: '#678dc9',
      dark: '#233455',
      contrastText: '#ffffff',
      50: '#f4f6fc',
      100: '#e7ecf7',
      200: '#cad6ed',
      300: '#9db4dd',
      
      
      600: '#33579a',
      700: '#2a457a',
      800: '#263c66',
      
    },
    secondary: {
      main: '#00bcd4',
      light: '#1adef4',
      dark: '#155265',
      contrastText: '#ffffff',
      50: '#ebffff',
      100: '#cdfdff',
      200: '#a1f8ff',
      300: '#63f0fd',
      
      
      600: '#019ab7',
      700: '#0a7a94',
      800: '#106378',
      
    },
    error: {
      main: '{error.main}',
      light: '{error.light}',
      dark: '{error.dark}',
      contrastText: '#ffffff',
    },
    warning: {
      main: '{warning.main}',
      light: '{warning.light}',
      dark: '{warning.dark}',
      contrastText: '#ffffff',
    },
    info: {
      main: '{info.main}',
      light: '{info.light}',
      dark: '{info.dark}',
      contrastText: '#ffffff',
    },
    success: {
      main: '{success.main}',
      light: '{success.light}',
      dark: '{success.dark}',
      contrastText: '#ffffff',
    },
    grey: {
      50: '{grey.50}',
      100: '{grey.100}',
      200: '{grey.200}',
      300: '{grey.300}',
      400: '{grey.400}',
      500: '{grey.400}',
      600: '{grey.600}',
      700: '{grey.700}',
      800: '{grey.800}',
      900: '{grey.900}',
      
      
      
      
    },
    text: {
      primary: 'rgba(16, 24, 64, 0.87)',
      secondary: 'rgba(16, 24, 64, 0.60)',
      disabled: 'rgba(16, 24, 64, 0.38)',
    },
    background: {
      default: '{primary.200}',
      paper: '{primary.100}',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    action: {
      active: 'rgba(16, 24, 64, 0.54)',
      hover: 'rgba(16, 24, 64, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(16, 24, 64, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(16, 24, 64, 0.26)',
      disabledBackground: 'rgba(16, 24, 64, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(16, 24, 64, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  typography: {
    fontFamily: '"IBM Plex Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '40',
      fontWeight: 300,
      lineHeight: '48',
      letterSpacing: '-1.5',
    },
    h2: {
      fontSize: '32',
      fontWeight: 300,
      lineHeight: '40',
      letterSpacing: '-0.5',
    },
    h3: {
      fontSize: '28',
      fontWeight: 400,
      lineHeight: '32',
      letterSpacing: "0em",
    },
    h4: {
      fontSize: '22',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: '0.25',
    },
    h5: {
      fontSize: '18',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: "0em",
    },
    h6: {
      fontSize: '16',
      fontWeight: 500,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    body1: {
      fontSize: '14',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    body2: {
      fontSize: '13',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.17000000178813934',
    },
    subtitle1: {
      fontSize: '14',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    subtitle2: {
      fontSize: '13',
      fontWeight: 500,
      lineHeight: '16',
      letterSpacing: '0.10000000149011612',
    },
    caption: {
      fontSize: '11',
      fontWeight: 400,
      lineHeight: '14',
      letterSpacing: '0.4000000059604645',
    },
    overline: {
      fontSize: '11',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: '1',
      textTransform: 'uppercase',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
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
    
    
    
    
    
    
    
    
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: NaN,
        },
        cell: {
          padding: '{0,5Gap}px',
        },
      },
    },
  },
});


import { createTheme } from "@mui/material/styles";

export const ERPTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '{primary.main}',
      light: '{primary.light}',
      dark: '{primary.dark}',
      contrastText: '#ffffff',
      50: '{primary.50}',
      100: '{primary.100}',
      200: '{primary.200}',
      300: '{primary.300}',
      
      
      600: '{primary.500}',
      700: '{primary.600}',
      800: '{primary.800}',
      
    },
    secondary: {
      main: '{secondary.main}',
      light: '{secondary.light}',
      dark: '{secondary.dark}',
      contrastText: '#ffffff',
      50: '{secondary.50}',
      100: '{secondary.100}',
      200: '{secondary.200}',
      300: '{secondary.300}',
      
      
      600: '{secondary.600}',
      700: '{secondary.700}',
      800: '{secondary.800}',
      
    },
    error: {
      main: '{error.main}',
      light: '{error.light}',
      dark: '{error.dark}',
      contrastText: '#ffffff',
    },
    warning: {
      main: '{warning.main}',
      light: '{warning.light}',
      dark: '{warning.dark}',
      contrastText: '#ffffff',
    },
    info: {
      main: '{info.main}',
      light: '{info.light}',
      dark: '{info.dark}',
      contrastText: '#ffffff',
    },
    success: {
      main: '{success.main}',
      light: '{success.light}',
      dark: '{success.dark}',
      contrastText: '#ffffff',
    },
    grey: {
      50: '{grey.50}',
      100: '{grey.100}',
      200: '{grey.200}',
      300: '{grey.300}',
      400: '{grey.400}',
      500: '{grey.500}',
      600: '{grey.600}',
      700: '{grey.700}',
      800: '{grey.800}',
      900: '{grey.900}',
      
      
      
      
    },
    text: {
      primary: 'rgba(16, 24, 64, 0.87)',
      secondary: 'rgba(16, 24, 64, 0.60)',
      disabled: 'rgba(16, 24, 64, 0.38)',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    action: {
      active: 'rgba(16, 24, 64, 0.54)',
      hover: 'rgba(16, 24, 64, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(16, 24, 64, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(16, 24, 64, 0.26)',
      disabledBackground: 'rgba(16, 24, 64, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(16, 24, 64, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '40',
      fontWeight: 300,
      lineHeight: '48',
      letterSpacing: '-1.5',
    },
    h2: {
      fontSize: '32',
      fontWeight: 300,
      lineHeight: '40',
      letterSpacing: '-0.5',
    },
    h3: {
      fontSize: '28',
      fontWeight: 400,
      lineHeight: '32',
      letterSpacing: "0em",
    },
    h4: {
      fontSize: '22',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: '0.25',
    },
    h5: {
      fontSize: '18',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: "0em",
    },
    h6: {
      fontSize: '16',
      fontWeight: 500,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    body1: {
      fontSize: '14',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    body2: {
      fontSize: '13',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.17000000178813934',
    },
    subtitle1: {
      fontSize: '14',
      fontWeight: 400,
      lineHeight: '16',
      letterSpacing: '0.15000000596046448',
    },
    subtitle2: {
      fontSize: '13',
      fontWeight: 500,
      lineHeight: '16',
      letterSpacing: '0.10000000149011612',
    },
    caption: {
      fontSize: '11',
      fontWeight: 400,
      lineHeight: '14',
      letterSpacing: '0.4000000059604645',
    },
    overline: {
      fontSize: '11',
      fontWeight: 400,
      lineHeight: '24',
      letterSpacing: '1',
      textTransform: 'uppercase',
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
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
    
    
    
    
    
    
    
    
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: NaN,
        },
        cell: {
          padding: '{0,5Gap}px',
        },
      },
    },
  },
});


// Exportar tema por defecto
export default CosmosTheme;

// Exportar todos los temas disponibles
export const themes = {
  Cosmos: CosmosTheme,
  CosmosDark: CosmosDarkTheme,
  CosmosTest: CosmosTestTheme,
  CosmosAlternativo: CosmosAlternativoTheme,
  ERP: ERPTheme
};
