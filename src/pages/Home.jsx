import React from 'react';
import { Container, Typography, Box, Grid, Paper, Button, Card, CardContent, CardMedia } from '@mui/material';
import { AccountBalance, Assessment, CalendarMonth, Business, People, TrendingUp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Contabilidade e Fiscalidade',
    description: 'A informação de gestão, fiável e no momento certo',
    icon: AccountBalance,
    link: '/servicos/contabilidade'
  },
  {
    title: 'Recursos Humanos',
    description: 'Apoiamos na seleção dos seus recursos humanos e na utilização dos incentivos existentes',
    icon: People,
    link: '/servicos/rh'
  },
  {
    title: 'Consultoria',
    description: 'Tecnologia, fiscalidade e capital humano como catalisadores de negócio',
    icon: TrendingUp,
    link: '/servicos/consultoria'
  }
];

const news = [
  {
    title: 'Regime excecional de pagamento em prestações',
    date: '13 Janeiro, 2025',
    description: 'Novo regime excecional de pagamento em prestações para dívidas tributárias.',
    image: '/news1.jpg'
  },
  {
    title: 'Alterações ao Código do IVA',
    date: '11 Janeiro, 2025',
    description: 'Principais alterações ao código do IVA para 2025.',
    image: '/news2.jpg'
  },
  {
    title: 'Incentivos às Empresas',
    date: '22 Dezembro, 2023',
    description: 'Novos programas de incentivos para adaptação das empresas.',
    image: '/news3.jpg'
  }
];

const campaigns = [
  {
    title: 'Comércio Local',
    description: 'Condições especiais para comerciantes locais do Algarve.',
    icon: Business
  },
  {
    title: 'Startups',
    description: 'Apoio especializado para empresas em início de atividade.',
    icon: TrendingUp
  },
  {
    title: 'PMEs',
    description: 'Soluções adaptadas para pequenas e médias empresas.',
    icon: Business
  }
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 12 }}>
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Um grupo de profissionais perto de si
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ maxWidth: '800px', mb: 4 }}>
            Com mais de uma década de experiência, a Algarismo Sul presta atualmente apoio a centenas de clientes no Algarve,
            com dimensões e atividades muito diversas.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Saber Mais
          </Button>
        </Container>
      </Box>

      {/* Serviços Section */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <Paper sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                  <IconComponent sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography sx={{ mb: 3 }}>
                    {service.description}
                  </Typography>
                  <Button variant="outlined" color="primary" component={Link} to={service.link}>
                    Saiba Mais
                  </Button>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Notícias Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container>
          <Typography variant="h3" component="h2" gutterBottom align="center">
            Destaques
          </Typography>
          <Grid container spacing={4}>
            {news.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="subtitle2" color="text.secondary">
                      {item.date}
                    </Typography>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Button sx={{ mt: 2 }} color="primary">
                      Ver Artigo Completo
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Campanhas Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center">
          Campanhas
        </Typography>
        <Grid container spacing={4}>
          {campaigns.map((campaign, index) => {
            const IconComponent = campaign.icon;
            return (
              <Grid item xs={12} md={4} key={index}>
                <Paper sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                  <IconComponent sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" component="h3" gutterBottom>
                    {campaign.title}
                  </Typography>
                  <Typography>
                    {campaign.description}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ mt: 3 }}>
                    Fale Connosco
                  </Button>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 