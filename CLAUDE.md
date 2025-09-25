# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a design token transformation project that generates Material-UI (MUI) theme configurations from Figma design tokens. The project converts `variables.tokens.json` (exported from Figma via the Luckino plugin) into JavaScript theme files compatible with MUI v5.

## Architecture

### Core Components

1. **Token Source**: `variables.tokens.json` - Contains design tokens organized by theme variants (Cosmos, Cosmos Dark, Cosmos Test, Cosmos Alternativo)
2. **Theme Generator**: `index.js` - Node.js script that transforms tokens into MUI theme configurations
3. **Generated Output**: `src/theme.js` - The resulting MUI theme file ready for import in React applications

### Token Structure

The tokens are organized into categories:
- `palette/[ThemeName]` - Color tokens (primary, secondary, error, warning, info, success, grey, text, background, action)
- `font/[ThemeName]` - Typography tokens (font families, sizes, weights, line heights)
- `Components/[ThemeName]` - Component-specific tokens (buttons, inputs, cards, etc.)

## Commands

### Generate Themes
```bash
node index.js
```
This reads `variables.tokens.json` and generates theme files in the `src/` directory.

### Development Notes

- No package.json exists - this is a standalone Node.js script
- Requires Node.js with CommonJS support (fs and path modules)
- Output files are MUI v5 compatible ES modules
- Each theme variant generates a separate theme file (`cosmosTheme.js`, `cosmosDarkTheme.js`, etc.)

## File Conventions

- Token values support both numeric and string formats (e.g., "16" or "16px")
- Color values are preserved as-is from the token file
- Typography values are converted to appropriate MUI format (rem units for spacing)
- Component tokens map directly to MUI component theme overrides