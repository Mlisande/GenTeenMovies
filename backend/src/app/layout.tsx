//Fichier qui s'occupe du rendu commun à toutes les pages
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout:React.FC<RootLayoutProps>=({
  children}) =>{
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout;
