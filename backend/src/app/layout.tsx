//Fichier qui s'occupe du rendu commun à toutes les pages
'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/globals.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Poppins } from 'next/font/google';
import theme from '@/styles/theme';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600'],
  subsets: ['latin'],
});

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={poppins.className}
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <main style={{ flex: '1' }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
