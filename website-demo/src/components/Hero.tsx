import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { HowToVote as HowToVoteIcon, Gavel as GavelIcon, Visibility as VisibilityIcon } from '@mui/icons-material';

const Hero: React.FC = () => {
  return (
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
          color: 'white',
        }}
      >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              Building a more transparent democracy
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom sx={{ opacity: 0.9 }}>
              Empowering New Zealand voters with information, tools, and accountability
            </Typography>
            <Typography variant="body1" paragraph sx={{ mt: 3, opacity: 0.8, lineHeight: 1.8 }}>
              The Public Office is a non-partisan initiative dedicated to increasing voter participation,
              enhancing political transparency, and helping citizens understand who their representatives
              truly work for.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                sx={{ mr: 2, bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}
              >
                Learn More
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{ color: 'white', borderColor: 'white' }}
              >
                Get Involved
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', p: 3, borderRadius: 2, mb: 2 }}>
                  <HowToVoteIcon sx={{ fontSize: 60, color: 'white' }} />
                </Box>
                <Typography variant="h6">Vote</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', p: 3, borderRadius: 2, mb: 2 }}>
                  <GavelIcon sx={{ fontSize: 60, color: 'white' }} />
                </Box>
                <Typography variant="h6">Accountability</Typography>
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{ bgcolor: 'rgba(255,255,255,0.1)', p: 3, borderRadius: 2, mb: 2 }}>
                  <VisibilityIcon sx={{ fontSize: 60, color: 'white' }} />
                </Box>
                <Typography variant="h6">Transparency</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;