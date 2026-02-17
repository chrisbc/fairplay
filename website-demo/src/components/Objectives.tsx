import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';

const objectives = [
  {
    title: 'Increase Voter Participation',
    description: 'Encourage citizens of all ages to engage in political discussion and vote on election day',
    icon: <CheckCircleIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Promote Pre-Enrolment',
    description: 'Educate voters about pre-enrolment requirements and deadlines for the 2026 election',
    icon: <CheckCircleIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Make Policies Accessible',
    description: 'Transform dry policy documents into engaging, interactive content for better understanding',
    icon: <CheckCircleIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Engage Young Voters',
    description: 'Create tools and content specifically designed to interest and educate new voters',
    icon: <CheckCircleIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Candidate Transparency',
    description: 'Provide comprehensive rankings and comparisons of candidate track records and agendas',
    icon: <CheckCircleIcon color="primary" sx={{ fontSize: 40 }} />,
  },
  {
    title: 'Expose External Influences',
    description: 'Highlight candidate and party connections to sponsors, donors, lobbyists, and global affiliations',
    icon: <CheckCircleIcon color="primary" sx={{ fontSize: 40 }} />,
  },
];

const Objectives: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Our Key Objectives
        </Typography>
        <Grid container spacing={4}>
          {objectives.map((objective, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                  <Box sx={{ mb: 3 }}>
                    {objective.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {objective.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {objective.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Objectives;