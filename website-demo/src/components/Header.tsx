import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { Public as PublicIcon } from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <PublicIcon sx={{ mr: 2, fontSize: 40 }} />
          <Typography variant="h4" component="h1" sx={{ flexGrow: 1, fontWeight: 700 }}>
            The Public Office
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;