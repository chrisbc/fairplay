import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardHeader, Divider } from '@mui/material';
import { Lightbulb as LightbulbIcon, BarChart as BarChartIcon, People as PeopleIcon, AttachMoney as AttachMoneyIcon, Feedback as FeedbackIcon, Gavel as GavelIcon } from '@mui/icons-material';

const solutions = [
  {
    title: 'The Ballot Box NZ Platform',
    description: 'A Progressive Web App (PWA) that serves as a comprehensive voting and information hub',
    icon: <LightbulbIcon color="primary" sx={{ fontSize: 40 }} />,
    features: [
      'Pre-enrolment status checker with urgency messaging',
      'Tinder-style policy matcher to find party alignment',
      'Candidate scorecards with voting records and public sentiment',
      'Interactive policy simulators and plain English translations',
    ],
  },
  {
    title: 'Influence Mapping System',
    description: 'Visual tools to track and expose external influences on politicians',
    icon: <BarChartIcon color="primary" sx={{ fontSize: 40 }} />,
    features: [
      'Interactive spider-web charts showing party funding sources',
      'Donor and lobbyist tracking with bill voting correlations',
      'Global affiliation flags for foreign influences',
      'Real-time updates from Electoral Commission data',
    ],
  },
  {
    title: 'Mandate Tracker & Submission Portal',
    description: 'Tools for voter feedback and holding politicians accountable',
    icon: <PeopleIcon color="primary" sx={{ fontSize: 40 }} />,
    features: [
      'Plain English bill summaries for easy understanding',
      'One-click submission tool for Select Committees',
      'Constituent sentiment tracking per electorate',
      'MP responsiveness scoring based on voter feedback',
    ],
  },
  {
    title: 'Honesty Meter',
    description: 'Campaign promise tracking and fact-checking system',
    icon: <GavelIcon color="primary" sx={{ fontSize: 40 }} />,
    features: [
      'Real-time tracking of campaign promises',
      'Status updates: Kept, In Progress, Broken, Compromised',
      'Coalition agreement analysis',
      'Historical track record visualization',
    ],
  },
  {
    title: 'Gamification & Youth Engagement',
    description: 'Interactive features to engage younger voters',
    icon: <AttachMoneyIcon color="primary" sx={{ fontSize: 40 }} />,
    features: [
      'Democracy XP points system for participation',
      'Shareable badges and achievements',
      'TikTok/Instagram social media filters',
      'Short-form video content explaining complex topics',
    ],
  },
  {
    title: 'Media & Communication Tools',
    description: 'Strategic rollout of information and engagement campaigns',
    icon: <FeedbackIcon color="primary" sx={{ fontSize: 40 }} />,
    features: [
      'Phased campaign: Wake Up → Deep Dive → Get Out The Vote',
      'Social media filters for initial engagement',
      'Location-based voting booth finder',
      'Personalized voting guides based on user values',
    ],
  },
];

const Solutions: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Our Proposed Solutions
        </Typography>
        <Grid container spacing={4}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardHeader
                  avatar={solution.icon}
                  title={solution.title}
                  titleTypographyProps={{ variant: 'h5', fontWeight: 600 }}
                  sx={{ bgcolor: 'primary.main', color: 'white' }}
                />
                <CardContent>
                  <Typography variant="body1" paragraph sx={{ mt: 2, fontWeight: 500 }}>
                    {solution.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    Key Features:
                  </Typography>
                  {solution.features.map((feature, featureIndex) => (
                    <Typography key={featureIndex} variant="body2" paragraph sx={{ pl: 2, position: 'relative' }}>
                      <Box
                        component="span"
                        sx={{
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          width: 4,
                          height: 4,
                          bgcolor: 'primary.main',
                          borderRadius: '50%',
                        }}
                      />
                      {feature}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Solutions;