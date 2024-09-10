//Fichier qui s'occupe du rendu commun à toutes les pages
"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import '../styles/globals.css';
import { ThemeProvider, CssBaseline } from "@mui/material";
import {Roboto} from '@next/font/google'
import theme from "@/styles/theme";

const roboto = Roboto({
  weight:['300','400','700','900'],
  subsets: ["latin"]
})

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout:React.FC<RootLayoutProps>=({
  children}) =>{
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header/>
          <main>{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default RootLayout;
