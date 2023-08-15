import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { useThemeHook } from "../Hooks/useThemeHook";

const customTheme = createTheme({
    pageColor: '#4A90E2',
    // BackgroundColors
    bgPrimary: '#fff',
    bgSecondary: '#FBFBFF',
    bgTertiary: '#EBF3FE',
    bgQuaternary: '#4e96ff14',
    // TextColors
    textPrimary: '#000',
    textSecondary: '#0000009e',
    Approvecolor: '#0BAF0B',
    Defeatedcolor: '#FF2424',
    GrayHeading: '#6C757D',
    BrdrColr: '#4e96ff7d',
    textFailed: '#cb0606',
    //buttonColors
    btnPrimary: '#0365F5',
    btnDisable: '#DAE8FB',
    tabDisable: '#7D7D7F',
    btnMainNet: '#515964',
    btnTxtPrimary: '#ffffff',
    btnPrimaryHover: '#d3287d',
    // others
    switchColor: '#161616',
    // BG-Gradients
    BgGradientPrimary: 'linear-gradient(156deg, rgba(56,56,56,1) 18%, rgba(0,0,0,1) 100%)',
    BgGradientSecondary: 'linear-gradient(156deg, rgba(255,255,255,1) 18%, rgba(242,242,244,1) 100%)',
    BgGradientTertiary: 'linear-gradient(156deg, rgba(78,150,255,1) 18%, rgba(3,101,245,1) 100%)',
    BgGradientQuaternary: 'linear-gradient(156deg, rgba(251,251,255,1) 18%, rgba(235,243,254,1) 100%)',
    BgFailed: '#cb06063d',
    // Box Shadow
    BoxShadowPrimary: '0px 0px 10px 3px rgb(0 0 0 / 5%)',
  })

  const HomePageTheme = ({children}) => {

    return (
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    );
  }
  export default HomePageTheme;