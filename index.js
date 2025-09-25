const fs = require("fs");
const path = require("path");

// Cargar tokens
const tokens = require("./cosmos.tokens.json");

// Helper para extraer valores de tokens
const getTokenValue = (token, theme = "Cosmos") => {
  if (!token) return undefined;

  // Si tiene $value, extraer el valor para el tema específico
  if (token.$value) {
    if (typeof token.$value === "object") {
      return token.$value[theme] || token.$value["Cosmos"] || Object.values(token.$value)[0];
    }
    return token.$value;
  }

  // Si es un valor directo
  return token;
};

// Helper para convertir valores numéricos
const toNumber = (val) => {
  if (typeof val === 'string') {
    return parseFloat(val.replace('px', '').replace('rem', ''));
  }
  return parseFloat(val);
};

// Función para procesar tokens de paleta
const processPaletteTokens = (palette, theme) => {
  const result = {};

  for (const [key, value] of Object.entries(palette)) {
    if (typeof value === 'object' && !value.$value && !value.$type) {
      // Es un grupo anidado
      result[key] = processPaletteTokens(value, theme);
    } else {
      // Es un token
      result[key] = getTokenValue(value, theme);
    }
  }

  return result;
};

// Función para procesar tokens de tipografía
const processFontTokens = (font, theme) => {
  const result = {};

  for (const [key, value] of Object.entries(font)) {
    if (typeof value === 'object' && !value.$value && !value.$type) {
      result[key] = processFontTokens(value, theme);
    } else {
      result[key] = getTokenValue(value, theme);
    }
  }

  return result;
};

// Función para procesar tokens de componentes
const processComponentTokens = (components, theme) => {
  const result = {};

  for (const [key, value] of Object.entries(components)) {
    if (typeof value === 'object' && !value.$value && !value.$type) {
      result[key] = processComponentTokens(value, theme);
    } else {
      result[key] = getTokenValue(value, theme);
    }
  }

  return result;
};

// Función para generar el tema
const generateTheme = (themeName, mode = 'light') => {
  const paletteTokens = processPaletteTokens(tokens.palette || {}, themeName);
  const fontTokens = processFontTokens(tokens.font || {}, themeName);
  const componentTokens = processComponentTokens(tokens.Components || {}, themeName);

  // Obtener valores específicos
  const breakpoints = tokens.breakPoints || {};

  const themeVarName = themeName.replace(/\s+/g, '');

  return `
import { createTheme } from "@mui/material/styles";

export const ${themeVarName}Theme = createTheme({
  palette: {
    mode: '${mode}',
    primary: {
      main: '${paletteTokens.primary?.main || '#1976d2'}',
      light: '${paletteTokens.primary?.light || '#42a5f5'}',
      dark: '${paletteTokens.primary?.dark || '#1565c0'}',
      contrastText: '${paletteTokens.primary?.contrast || '#ffffff'}',
      ${paletteTokens.primary?.['50'] ? `50: '${paletteTokens.primary['50']}',` : ''}
      ${paletteTokens.primary?.['100'] ? `100: '${paletteTokens.primary['100']}',` : ''}
      ${paletteTokens.primary?.['200'] ? `200: '${paletteTokens.primary['200']}',` : ''}
      ${paletteTokens.primary?.['300'] ? `300: '${paletteTokens.primary['300']}',` : ''}
      ${paletteTokens.primary?.['400'] ? `400: '${paletteTokens.primary['400']}',` : ''}
      ${paletteTokens.primary?.['500'] ? `500: '${paletteTokens.primary['500']}',` : ''}
      ${paletteTokens.primary?.['600'] ? `600: '${paletteTokens.primary['600']}',` : ''}
      ${paletteTokens.primary?.['700'] ? `700: '${paletteTokens.primary['700']}',` : ''}
      ${paletteTokens.primary?.['800'] ? `800: '${paletteTokens.primary['800']}',` : ''}
      ${paletteTokens.primary?.['900'] ? `900: '${paletteTokens.primary['900']}',` : ''}
    },
    secondary: {
      main: '${paletteTokens.secondary?.main || '#dc004e'}',
      light: '${paletteTokens.secondary?.light || '#f05545'}',
      dark: '${paletteTokens.secondary?.dark || '#9a0036'}',
      contrastText: '${paletteTokens.secondary?.contrast || '#ffffff'}',
      ${paletteTokens.secondary?.['50'] ? `50: '${paletteTokens.secondary['50']}',` : ''}
      ${paletteTokens.secondary?.['100'] ? `100: '${paletteTokens.secondary['100']}',` : ''}
      ${paletteTokens.secondary?.['200'] ? `200: '${paletteTokens.secondary['200']}',` : ''}
      ${paletteTokens.secondary?.['300'] ? `300: '${paletteTokens.secondary['300']}',` : ''}
      ${paletteTokens.secondary?.['400'] ? `400: '${paletteTokens.secondary['400']}',` : ''}
      ${paletteTokens.secondary?.['500'] ? `500: '${paletteTokens.secondary['500']}',` : ''}
      ${paletteTokens.secondary?.['600'] ? `600: '${paletteTokens.secondary['600']}',` : ''}
      ${paletteTokens.secondary?.['700'] ? `700: '${paletteTokens.secondary['700']}',` : ''}
      ${paletteTokens.secondary?.['800'] ? `800: '${paletteTokens.secondary['800']}',` : ''}
      ${paletteTokens.secondary?.['900'] ? `900: '${paletteTokens.secondary['900']}',` : ''}
    },
    error: {
      main: '${paletteTokens.error?.main || '#f44336'}',
      light: '${paletteTokens.error?.light || '#e57373'}',
      dark: '${paletteTokens.error?.dark || '#d32f2f'}',
      contrastText: '${paletteTokens.error?.contrast || '#ffffff'}',
    },
    warning: {
      main: '${paletteTokens.warning?.main || '#ffa726'}',
      light: '${paletteTokens.warning?.light || '#ffb74d'}',
      dark: '${paletteTokens.warning?.dark || '#f57c00'}',
      contrastText: '${paletteTokens.warning?.contrast || '#ffffff'}',
    },
    info: {
      main: '${paletteTokens.info?.main || '#29b6f6'}',
      light: '${paletteTokens.info?.light || '#4fc3f7'}',
      dark: '${paletteTokens.info?.dark || '#0288d1'}',
      contrastText: '${paletteTokens.info?.contrast || '#ffffff'}',
    },
    success: {
      main: '${paletteTokens.success?.main || '#66bb6a'}',
      light: '${paletteTokens.success?.light || '#81c784'}',
      dark: '${paletteTokens.success?.dark || '#388e3c'}',
      contrastText: '${paletteTokens.success?.contrast || '#ffffff'}',
    },
    grey: {
      ${paletteTokens.grey?.['50'] ? `50: '${paletteTokens.grey['50']}',` : ''}
      ${paletteTokens.grey?.['100'] ? `100: '${paletteTokens.grey['100']}',` : ''}
      ${paletteTokens.grey?.['200'] ? `200: '${paletteTokens.grey['200']}',` : ''}
      ${paletteTokens.grey?.['300'] ? `300: '${paletteTokens.grey['300']}',` : ''}
      ${paletteTokens.grey?.['400'] ? `400: '${paletteTokens.grey['400']}',` : ''}
      ${paletteTokens.grey?.['500'] ? `500: '${paletteTokens.grey['500']}',` : ''}
      ${paletteTokens.grey?.['600'] ? `600: '${paletteTokens.grey['600']}',` : ''}
      ${paletteTokens.grey?.['700'] ? `700: '${paletteTokens.grey['700']}',` : ''}
      ${paletteTokens.grey?.['800'] ? `800: '${paletteTokens.grey['800']}',` : ''}
      ${paletteTokens.grey?.['900'] ? `900: '${paletteTokens.grey['900']}',` : ''}
      ${paletteTokens.grey?.['A100'] ? `A100: '${paletteTokens.grey['A100']}',` : ''}
      ${paletteTokens.grey?.['A200'] ? `A200: '${paletteTokens.grey['A200']}',` : ''}
      ${paletteTokens.grey?.['A400'] ? `A400: '${paletteTokens.grey['A400']}',` : ''}
      ${paletteTokens.grey?.['A700'] ? `A700: '${paletteTokens.grey['A700']}',` : ''}
    },
    text: {
      primary: '${paletteTokens.text?.primary || 'rgba(0, 0, 0, 0.87)'}',
      secondary: '${paletteTokens.text?.secondary || 'rgba(0, 0, 0, 0.6)'}',
      disabled: '${paletteTokens.text?.disabled || 'rgba(0, 0, 0, 0.38)'}',
    },
    background: {
      default: '${paletteTokens.background?.Default || paletteTokens.background?.default || '#fafafa'}',
      paper: '${paletteTokens.background?.Paper || paletteTokens.background?.paper || '#ffffff'}',
    },
    divider: '${paletteTokens.divider || 'rgba(0, 0, 0, 0.12)'}',
    action: {
      active: '${paletteTokens.action?.active || paletteTokens.text?.secondary || 'rgba(0, 0, 0, 0.54)'}',
      hover: '${paletteTokens.action?.hover || paletteTokens.text?.hover || 'rgba(0, 0, 0, 0.04)'}',
      hoverOpacity: ${paletteTokens.action?.hoverOpacity || 0.04},
      selected: '${paletteTokens.action?.selected || paletteTokens.text?.selected || 'rgba(0, 0, 0, 0.08)'}',
      selectedOpacity: ${paletteTokens.action?.selectedOpacity || 0.08},
      disabled: '${paletteTokens.action?.disabled || paletteTokens.text?.disabled || 'rgba(0, 0, 0, 0.26)'}',
      disabledBackground: '${paletteTokens.action?.disabledBackground || 'rgba(0, 0, 0, 0.12)'}',
      disabledOpacity: ${paletteTokens.action?.disabledOpacity || 0.38},
      focus: '${paletteTokens.action?.focus || paletteTokens.text?.focus || 'rgba(0, 0, 0, 0.12)'}',
      focusOpacity: ${paletteTokens.action?.focusOpacity || 0.12},
      activatedOpacity: ${paletteTokens.action?.activatedOpacity || 0.12},
    },
  },
  typography: {
    fontFamily: ${fontTokens.Family ? `'"${fontTokens.Family}", "Helvetica", "Arial", sans-serif'` : '"Roboto", "Helvetica", "Arial", sans-serif'},
    ${fontTokens.Size?.H1 ? `h1: {
      fontSize: '${fontTokens.Size.H1}',
      fontWeight: ${fontTokens.Weight?.H1 || 300},
      lineHeight: ${fontTokens.LineHeight?.H1 ? `'${fontTokens.LineHeight.H1}'` : 1.167},
      letterSpacing: ${fontTokens.LetterSpacing?.H1 ? `'${fontTokens.LetterSpacing.H1}'` : '"-0.01562em"'},
    },` : ''}
    ${fontTokens.Size?.H2 ? `h2: {
      fontSize: '${fontTokens.Size.H2}',
      fontWeight: ${fontTokens.Weight?.H2 || 300},
      lineHeight: ${fontTokens.LineHeight?.H2 ? `'${fontTokens.LineHeight.H2}'` : 1.2},
      letterSpacing: ${fontTokens.LetterSpacing?.H2 ? `'${fontTokens.LetterSpacing.H2}'` : '"-0.00833em"'},
    },` : ''}
    ${fontTokens.Size?.H3 ? `h3: {
      fontSize: '${fontTokens.Size.H3}',
      fontWeight: ${fontTokens.Weight?.H3 || 400},
      lineHeight: ${fontTokens.LineHeight?.H3 ? `'${fontTokens.LineHeight.H3}'` : 1.167},
      letterSpacing: ${fontTokens.LetterSpacing?.H3 ? `'${fontTokens.LetterSpacing.H3}'` : '"0em"'},
    },` : ''}
    ${fontTokens.Size?.H4 ? `h4: {
      fontSize: '${fontTokens.Size.H4}',
      fontWeight: ${fontTokens.Weight?.H4 || 400},
      lineHeight: ${fontTokens.LineHeight?.H4 ? `'${fontTokens.LineHeight.H4}'` : 1.235},
      letterSpacing: ${fontTokens.LetterSpacing?.H4 ? `'${fontTokens.LetterSpacing.H4}'` : '"0.00735em"'},
    },` : ''}
    ${fontTokens.Size?.H5 ? `h5: {
      fontSize: '${fontTokens.Size.H5}',
      fontWeight: ${fontTokens.Weight?.H5 || 400},
      lineHeight: ${fontTokens.LineHeight?.H5 ? `'${fontTokens.LineHeight.H5}'` : 1.334},
      letterSpacing: ${fontTokens.LetterSpacing?.H5 ? `'${fontTokens.LetterSpacing.H5}'` : '"0em"'},
    },` : ''}
    ${fontTokens.Size?.H6 ? `h6: {
      fontSize: '${fontTokens.Size.H6}',
      fontWeight: ${fontTokens.Weight?.H6 || 500},
      lineHeight: ${fontTokens.LineHeight?.H6 ? `'${fontTokens.LineHeight.H6}'` : 1.6},
      letterSpacing: ${fontTokens.LetterSpacing?.H6 ? `'${fontTokens.LetterSpacing.H6}'` : '"0.0075em"'},
    },` : ''}
    ${fontTokens.Size?.Body1 ? `body1: {
      fontSize: '${fontTokens.Size.Body1}',
      fontWeight: ${fontTokens.Weight?.Body1 || 400},
      lineHeight: ${fontTokens.LineHeight?.Body1 ? `'${fontTokens.LineHeight.Body1}'` : 1.5},
      letterSpacing: ${fontTokens.LetterSpacing?.Body1 ? `'${fontTokens.LetterSpacing.Body1}'` : '"0.00938em"'},
    },` : ''}
    ${fontTokens.Size?.Body2 ? `body2: {
      fontSize: '${fontTokens.Size.Body2}',
      fontWeight: ${fontTokens.Weight?.Body2 || 400},
      lineHeight: ${fontTokens.LineHeight?.Body2 ? `'${fontTokens.LineHeight.Body2}'` : 1.43},
      letterSpacing: ${fontTokens.LetterSpacing?.Body2 ? `'${fontTokens.LetterSpacing.Body2}'` : '"0.01071em"'},
    },` : ''}
    ${fontTokens.Size?.Subtitle1 ? `subtitle1: {
      fontSize: '${fontTokens.Size.Subtitle1}',
      fontWeight: ${fontTokens.Weight?.Subtitle1 || 400},
      lineHeight: ${fontTokens.LineHeight?.Subtitle1 ? `'${fontTokens.LineHeight.Subtitle1}'` : 1.75},
      letterSpacing: ${fontTokens.LetterSpacing?.Subtitle1 ? `'${fontTokens.LetterSpacing.Subtitle1}'` : '"0.00938em"'},
    },` : ''}
    ${fontTokens.Size?.Subtitle2 ? `subtitle2: {
      fontSize: '${fontTokens.Size.Subtitle2}',
      fontWeight: ${fontTokens.Weight?.Subtitle2 || 500},
      lineHeight: ${fontTokens.LineHeight?.Subtitle2 ? `'${fontTokens.LineHeight.Subtitle2}'` : 1.57},
      letterSpacing: ${fontTokens.LetterSpacing?.Subtitle2 ? `'${fontTokens.LetterSpacing.Subtitle2}'` : '"0.00714em"'},
    },` : ''}
    ${fontTokens.Size?.Caption ? `caption: {
      fontSize: '${fontTokens.Size.Caption}',
      fontWeight: ${fontTokens.Weight?.Caption || 400},
      lineHeight: ${fontTokens.LineHeight?.Caption ? `'${fontTokens.LineHeight.Caption}'` : 1.66},
      letterSpacing: ${fontTokens.LetterSpacing?.Caption ? `'${fontTokens.LetterSpacing.Caption}'` : '"0.03333em"'},
    },` : ''}
    ${fontTokens.Size?.Overline ? `overline: {
      fontSize: '${fontTokens.Size.Overline}',
      fontWeight: ${fontTokens.Weight?.Overline || 400},
      lineHeight: ${fontTokens.LineHeight?.Overline ? `'${fontTokens.LineHeight.Overline}'` : 2.66},
      letterSpacing: ${fontTokens.LetterSpacing?.Overline ? `'${fontTokens.LetterSpacing.Overline}'` : '"0.08333em"'},
      textTransform: 'uppercase',
    },` : ''}
    button: {
      fontSize: '${fontTokens.Size?.Button || '0.875rem'}',
      fontWeight: ${fontTokens.Weight?.Button || 500},
      lineHeight: ${fontTokens.LineHeight?.Button ? `'${fontTokens.LineHeight.Button}'` : 1.75},
      letterSpacing: ${fontTokens.LetterSpacing?.Button ? `'${fontTokens.LetterSpacing.Button}'` : '"0.02857em"'},
      textTransform: 'none',
    },
  },
  ${paletteTokens['border-radius'] || componentTokens['border-radius'] ? `shape: {
    borderRadius: ${toNumber(paletteTokens['border-radius']?.default || componentTokens['border-radius']?.default || 4)},
  },` : 'shape: { borderRadius: 4 },'}
  spacing: ${paletteTokens.spacing || 8},
  ${breakpoints && Object.keys(breakpoints).length > 0 ? `breakpoints: {
    values: {
      xs: 0,
      ${getTokenValue(breakpoints.sm) ? `sm: ${toNumber(getTokenValue(breakpoints.sm))},` : 'sm: 600,'}
      ${getTokenValue(breakpoints.md) ? `md: ${toNumber(getTokenValue(breakpoints.md))},` : 'md: 900,'}
      ${getTokenValue(breakpoints.lg) ? `lg: ${toNumber(getTokenValue(breakpoints.lg))},` : 'lg: 1200,'}
      ${getTokenValue(breakpoints.xl) ? `xl: ${toNumber(getTokenValue(breakpoints.xl))},` : 'xl: 1536,'}
    },
  },` : ''}
  components: {
    ${componentTokens.Button ? `MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          ${componentTokens.Button?.borderRadius ? `borderRadius: ${toNumber(componentTokens.Button.borderRadius)},` : ''}
        },
        ${componentTokens.Button?.large ? `sizeLarge: {
          padding: '${componentTokens.Button.large.paddingVertical || 8}px ${componentTokens.Button.large.paddingHorizontal || 24}px',
          fontSize: '${componentTokens.Button.large.fontSize || '1rem'}',
        },` : ''}
        ${componentTokens.Button?.medium ? `sizeMedium: {
          padding: '${componentTokens.Button.medium.paddingVertical || 6}px ${componentTokens.Button.medium.paddingHorizontal || 16}px',
          fontSize: '${componentTokens.Button.medium.fontSize || '0.875rem'}',
        },` : ''}
        ${componentTokens.Button?.small ? `sizeSmall: {
          padding: '${componentTokens.Button.small.paddingVertical || 4}px ${componentTokens.Button.small.paddingHorizontal || 10}px',
          fontSize: '${componentTokens.Button.small.fontSize || '0.8125rem'}',
        },` : ''}
      },
    },` : ''}
    ${componentTokens.Chip ? `MuiChip: {
      styleOverrides: {
        root: {
          ${componentTokens.Chip?.borderRadius ? `borderRadius: ${toNumber(componentTokens.Chip.borderRadius)},` : ''}
        },
      },
    },` : ''}
    ${componentTokens.Alert ? `MuiAlert: {
      styleOverrides: {
        ${componentTokens.Alert?.error ? `standardError: {
          backgroundColor: '${componentTokens.Alert.error.background}',
          color: '${componentTokens.Alert.error.color}',
        },` : ''}
        ${componentTokens.Alert?.warning ? `standardWarning: {
          backgroundColor: '${componentTokens.Alert.warning.background}',
          color: '${componentTokens.Alert.warning.color}',
        },` : ''}
        ${componentTokens.Alert?.info ? `standardInfo: {
          backgroundColor: '${componentTokens.Alert.info.background}',
          color: '${componentTokens.Alert.info.color}',
        },` : ''}
        ${componentTokens.Alert?.success ? `standardSuccess: {
          backgroundColor: '${componentTokens.Alert.success.background}',
          color: '${componentTokens.Alert.success.color}',
        },` : ''}
      },
    },` : ''}
    ${componentTokens.Tooltip ? `MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '${componentTokens.Tooltip?.fill || '#616161'}',
          color: '${componentTokens.Tooltip?.Text || '#ffffff'}',
        },
      },
    },` : ''}
    ${componentTokens.AppBar ? `MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: '${componentTokens.AppBar?.defaultFill || '#f5f5f5'}',
        },
      },
    },` : ''}
    ${componentTokens.Switch ? `MuiSwitch: {
      styleOverrides: {
        ${componentTokens.Switch?.knobFillEnabled ? `thumb: {
          backgroundColor: '${componentTokens.Switch.knobFillEnabled}',
        },` : ''}
        ${componentTokens.Switch?.slideFill ? `track: {
          backgroundColor: '${componentTokens.Switch.slideFill}',
        },` : ''}
      },
    },` : ''}
    ${componentTokens.Rating ? `MuiRating: {
      styleOverrides: {
        root: {
          color: '${componentTokens.Rating?.activeFill || '#faaf00'}',
        },
      },
    },` : ''}
    ${componentTokens.Avatar ? `MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: '${componentTokens.Avatar?.fill || '#bdbdbd'}',
        },
      },
    },` : ''}
    ${componentTokens.Datagrid ? `MuiDataGrid: {
      styleOverrides: {
        root: {
          ${componentTokens.Datagrid?.BorderRadius ? `borderRadius: ${toNumber(componentTokens.Datagrid.BorderRadius)},` : ''}
        },
        ${componentTokens.Datagrid?.Gap?.Cell ? `cell: {
          padding: '${componentTokens.Datagrid.Gap.Cell}px',
        },` : ''}
      },
    },` : ''}
  },
});
`;
};

// Detectar temas disponibles
const detectAvailableThemes = () => {
  const themes = new Set();

  // Buscar en todos los tokens para encontrar los temas disponibles
  const findThemes = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
      if (value && typeof value === 'object') {
        if (value.$value && typeof value.$value === 'object') {
          Object.keys(value.$value).forEach(theme => themes.add(theme));
        } else if (!value.$type) {
          findThemes(value);
        }
      }
    }
  };

  findThemes(tokens);
  return Array.from(themes);
};

// Generar todos los temas
const generateAllThemes = () => {
  const availableThemes = detectAvailableThemes();
  console.log("🔍 Temas detectados:", availableThemes);

  let allThemes = '';
  const themeExports = [];

  availableThemes.forEach(themeName => {
    const mode = themeName.toLowerCase().includes('dark') ? 'dark' : 'light';
    const themeContent = generateTheme(themeName, mode);
    allThemes += themeContent + '\n';

    const themeVarName = themeName.replace(/\s+/g, '');
    themeExports.push(`${themeVarName}: ${themeVarName}Theme`);
  });

  // Agregar exportaciones
  const defaultThemeName = availableThemes[0].replace(/\s+/g, '');
  allThemes += `
// Exportar tema por defecto
export default ${defaultThemeName}Theme;

// Exportar todos los temas disponibles
export const themes = {
  ${themeExports.join(',\n  ')}
};
`;

  return allThemes;
};

// Crear directorio src si no existe
if (!fs.existsSync(path.join(__dirname, "src"))) {
  fs.mkdirSync(path.join(__dirname, "src"));
}

// Generar y guardar el archivo de tema
const themeContent = generateAllThemes();
fs.writeFileSync(path.join(__dirname, "src", "theme.js"), themeContent);

console.log("✅ Temas generados exitosamente en src/theme.js");
console.log("📦 Temas disponibles:");
const availableThemes = detectAvailableThemes();
availableThemes.forEach(theme => {
  const themeVarName = theme.replace(/\s+/g, '');
  const mode = theme.toLowerCase().includes('dark') ? 'dark' : 'light';
  console.log(`   - ${themeVarName}Theme (${mode})`);
});
console.log("");
console.log("💡 Uso en React:");
console.log("   import { themes } from './src/theme';");
console.log("   // O importar un tema específico");
console.log(`   import ${availableThemes[0].replace(/\s+/g, '')}Theme from './src/theme';`);
console.log("   <ThemeProvider theme={theme}>...</ThemeProvider>");