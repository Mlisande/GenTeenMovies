//Fichier qui s'occupe du rendu commun à toutes les pages
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import '../styles/globals.css'
import {Roboto} from '@next/font/google'

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
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;
