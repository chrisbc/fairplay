import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider } from '@mui/material';
import { Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon, Email as EmailIcon } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
      <Box
        component="footer"
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 6,
          mt: 8,
        }}
      >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
              The Public Office
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.6 }}>
              A non-partisan initiative dedicated to increasing voter participation
              and political transparency in New Zealand.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                Connect With Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' } }}>
                  <FacebookIcon fontSize="large" />
                </Link>
                <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' } }}>
                  <TwitterIcon fontSize="large" />
                </Link>
                <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' } }}>
                  <InstagramIcon fontSize="large" />
                </Link>
                <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' } }}>
                  <EmailIcon fontSize="large" />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={4}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  Quick Links
                </Typography>
                <Box component="ul" sx={{ pl: 0, listStyle: 'none' }}>
                  <li>
                    <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' }, display: 'block', py: 0.5 }}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' }, display: 'block', py: 0.5 }}>
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' }, display: 'block', py: 0.5 }}>
                      Get Involved
                    </Link>
                  </li>
                  <li>
                    <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' }, display: 'block', py: 0.5 }}>
                      Contact
                    </Link>
                  </li>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  Resources
                </Typography>
                <Box component="ul" sx={{ pl: 0, listStyle: 'none' }}>
                  <li>
                    <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' }, display: 'block', py: 0.5 }}>
                      Voter Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' }, display: 'block', py: 0.5 }}>
                      Policy Explorer
                    </Link>
                  </li>
                  <li>
                    <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' }, display: 'block', py: 0.5 }}>
                      Candidate Database
                    </Link>
                  </li>
                  <li>
                    <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' }, display: 'block', py: 0.5 }}>
                      Influence Tracker
                    </Link>
                  </li>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  Legal
                </Typography>
                <Box component="ul" sx={{ pl: 0, listStyle: 'none' }}>
                  <li>
                    <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' }, display: 'block', py: 0.5 }}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' }, display: 'block', py: 0.5 }}>
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' }, display: 'block', py: 0.5 }}>
                      Data Sources
                    </Link>
                  </li>
                  <li>
                    <Link href="#" color="inherit" sx={{ '&:hover': { color: 'secondary.main' }, display: 'block', py: 0.5 }}>
                      Non-Partisan Policy
                    </Link>
                  </li>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.2)' }} />
        <Typography variant="body2" textAlign="center" sx={{ opacity: 0.7 }}>
          © {new Date().getFullYear()} The Public Office. All rights reserved.
        </Typography>
        <Typography variant="body2" textAlign="center" sx={{ opacity: 0.7, mt: 1 }}>
          A non-partisan initiative for democratic transparency in New Zealand
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;