import React from "react";
import { Box } from "@mui/material";

export interface PanelProps {
    children: React.ReactNode;
  }
  
const Panel: React.FC<PanelProps> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#f0e7dc',
        padding: '2rem',
        borderRadius: '10px',
        textAlign: 'center',
        //maxWidth: '600px',
        width:'80%',
        height:'65vh',
        boxShadow: '15px 10px 1px rgb(238, 145, 223)',
      }}
    >
      {children}
    </Box>
    );
  };
  
  export default Panel;