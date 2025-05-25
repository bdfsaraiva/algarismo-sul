import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Business, EmojiEvents, Group, TrendingUp } from '@mui/icons-material';

const About = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Sobre Nós
      </Typography>
      
      <Box sx={{ maxWidth: 800, mx: 'auto', mb: 8 }}>
        <Typography variant="h5" component="h2" gutterBottom align="center" color="text.secondary">
          A Algarismo Sul é uma empresa líder em contabilidade e consultoria no Algarve,
          oferecendo soluções personalizadas para empresas de todos os setores.
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Nossa Missão
            </Typography>
            <Typography>
              Fornecer serviços contabilísticos e fiscais de excelência, contribuindo para
              o sucesso e crescimento sustentável dos nossos clientes através de soluções
              inovadoras e personalizadas.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 4, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Nossa Visão
            </Typography>
            <Typography>
              Ser reconhecida como a empresa de referência em contabilidade e consultoria
              no Algarve, destacando-nos pela qualidade dos serviços e satisfação dos clientes.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h4" align="center" gutterBottom sx={{ mb: 4 }}>
        Nossa História
      </Typography>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <Business />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">2010</Typography>
              <Typography>Fundação da Algarismo Sul</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <Group />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">2015</Typography>
              <Typography>Expansão da equipa e serviços</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <EmojiEvents />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">2018</Typography>
              <Typography>Certificação de Qualidade ISO 9001</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <TrendingUp />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6">2025</Typography>
              <Typography>Líder em soluções digitais de contabilidade no Algarve</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};

export default About; 