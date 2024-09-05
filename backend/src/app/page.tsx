import React from "react";
import Image from "next/image";
import styles from "../styles/page.module.css";
import Panel from "@/components/Panel";
import { Grid2,Typography, Button} from "@mui/material";
import GenTeenCineClub from '../app/images/GenTeenCineClub.png'


export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <Grid2 container spacing={4} marginTop={10} >
        <Grid2 size={{xs:12, md:7}} sx={{display:'flex',flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
          <Typography variant="h3" fontWeight={700}>
          Explore movies that speak to you.
          </Typography>
          <Typography variant="h6" >
          With GenTeenMovies, find the films that resonate with your personality and tastes.
          </Typography>
          <Typography variant="h6">
          Each movie is a cinematic adventure tailored just for you.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: '200px', fontSize: '16px', backgroundColor:'#ffbbf5', color:'#000000' }}
          >
            Visit our gallery
          </Button>
        </Grid2>
        <Grid2 size={{xs:12, md:5}} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <Image
              src={GenTeenCineClub} // Remplacez par votre chemin d'image
              alt="GenTeenMovies"
              width={300}
              height={300}
              style={{ borderRadius: '6px' }} // Exemple de style pour l'image
          />
        </Grid2>
      </Grid2>
    </main>
    </>
  );
}

