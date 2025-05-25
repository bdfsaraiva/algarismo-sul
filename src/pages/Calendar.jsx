import React from 'react';
import { Container, Typography, Box, Grid, Paper, Chip } from '@mui/material';
import { Event, Warning, CheckCircle } from '@mui/icons-material';

const fiscalCalendar = [
  {
    month: 'Janeiro',
    events: [
      { day: '10', description: 'Entrega da Declaração Mensal de Remunerações', type: 'regular' },
      { day: '20', description: 'Pagamento do IVA mensal', type: 'payment' },
      { day: '20', description: 'Entrega das retenções na fonte de IRS/IRC', type: 'regular' },
      { day: '31', description: 'Entrega da Declaração Mensal do Imposto do Selo', type: 'regular' }
    ]
  },
  {
    month: 'Fevereiro',
    events: [
      { day: '10', description: 'Entrega da Declaração Mensal de Remunerações', type: 'regular' },
      { day: '15', description: 'Pagamento por Conta do IRC', type: 'payment' },
      { day: '20', description: 'Pagamento do IVA mensal', type: 'payment' },
      { day: '28', description: 'Entrega da Declaração Modelo 10', type: 'important' }
    ]
  },
  {
    month: 'Março',
    events: [
      { day: '10', description: 'Entrega da Declaração Mensal de Remunerações', type: 'regular' },
      { day: '20', description: 'Pagamento do IVA mensal', type: 'payment' },
      { day: '31', description: 'Entrega da Declaração Modelo 22 (Ano anterior)', type: 'important' }
    ]
  },
  {
    month: 'Abril',
    events: [
      { day: '10', description: 'Entrega da Declaração Mensal de Remunerações', type: 'regular' },
      { day: '15', description: 'Início do prazo de entrega do IRS', type: 'important' },
      { day: '20', description: 'Pagamento do IVA mensal', type: 'payment' }
    ]
  },
  {
    month: 'Maio',
    events: [
      { day: '10', description: 'Entrega da Declaração Mensal de Remunerações', type: 'regular' },
      { day: '20', description: 'Pagamento do IVA mensal', type: 'payment' },
      { day: '31', description: 'Entrega da IES/DA', type: 'important' }
    ]
  },
  {
    month: 'Junho',
    events: [
      { day: '10', description: 'Entrega da Declaração Mensal de Remunerações', type: 'regular' },
      { day: '20', description: 'Pagamento do IVA mensal', type: 'payment' },
      { day: '30', description: 'Fim do prazo de entrega do IRS', type: 'important' }
    ]
  },
  {
    month: 'Julho',
    events: [
      { day: '10', description: 'Entrega da Declaração Mensal de Remunerações', type: 'regular' },
      { day: '20', description: 'Pagamento do IVA mensal', type: 'payment' },
      { day: '31', description: 'Pagamento por Conta do IRC - 1ª prestação', type: 'payment' },
      { day: '31', description: 'Pagamento Especial por Conta do IRC', type: 'payment' }
    ]
  },
  {
    month: 'Agosto',
    events: [
      { day: '10', description: 'Entrega da Declaração Mensal de Remunerações', type: 'regular' },
      { day: '20', description: 'Pagamento do IVA mensal', type: 'payment' },
      { day: '31', description: 'Pagamento do IUC para veículos com matrícula do mês', type: 'payment' }
    ]
  },
  {
    month: 'Setembro',
    events: [
      { day: '10', description: 'Entrega da Declaração Mensal de Remunerações', type: 'regular' },
      { day: '20', description: 'Pagamento do IVA mensal', type: 'payment' },
      { day: '30', description: 'Pagamento por Conta do IRC - 2ª prestação', type: 'payment' }
    ]
  },
  {
    month: 'Outubro',
    events: [
      { day: '10', description: 'Entrega da Declaração Mensal de Remunerações', type: 'regular' },
      { day: '20', description: 'Pagamento do IVA mensal', type: 'payment' },
      { day: '31', description: 'Entrega da Declaração Modelo 22 (2º pagamento)', type: 'important' }
    ]
  },
  {
    month: 'Novembro',
    events: [
      { day: '10', description: 'Entrega da Declaração Mensal de Remunerações', type: 'regular' },
      { day: '20', description: 'Pagamento do IVA mensal', type: 'payment' },
      { day: '30', description: 'Pagamento por Conta do IRC - 3ª prestação', type: 'payment' }
    ]
  },
  {
    month: 'Dezembro',
    events: [
      { day: '10', description: 'Entrega da Declaração Mensal de Remunerações', type: 'regular' },
      { day: '15', description: 'Pagamento do Subsídio de Natal', type: 'payment' },
      { day: '20', description: 'Pagamento do IVA mensal', type: 'payment' },
      { day: '31', description: 'Comunicação de Inventários', type: 'important' }
    ]
  }
];

const getEventIcon = (type) => {
  switch (type) {
    case 'important':
      return <Warning color="warning" />;
    case 'payment':
      return <CheckCircle color="success" />;
    default:
      return <Event color="info" />;
  }
};

const getEventColor = (type) => {
  switch (type) {
    case 'important':
      return 'warning';
    case 'payment':
      return 'success';
    default:
      return 'info';
  }
};

const Calendar = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ maxWidth: 800, mx: 'auto', mb: 8 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom color="primary">
          Calendário Fiscal 2025
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Principais datas e obrigações fiscais
        </Typography>

        <Box sx={{ display: 'flex', gap: 4, mb: 4, justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Event color="info" />
            <Typography color="text.primary">Regular</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Warning color="warning" />
            <Typography color="text.primary">Importante</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircle color="success" />
            <Typography color="text.primary">Pagamento</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ 
        maxWidth: 1200, 
        mx: 'auto'
      }}>
        <Grid 
          container 
          spacing={3}
          justifyContent="center"
          alignItems="stretch"
        >
          {fiscalCalendar.map((month) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              key={month.month}
              sx={{
                display: 'flex',
                height: 400
              }}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'linear-gradient(to bottom, rgba(27, 43, 75, 0.05) 0%, rgba(19, 47, 76, 0.1) 100%)',
                  borderRadius: 2,
                  border: '1px solid rgba(27, 43, 75, 0.1)',
                  p: 3
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    pb: 2, 
                    mb: 2,
                    borderBottom: '2px solid',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    fontWeight: 500
                  }}
                >
                  {month.month}
                </Typography>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 2,
                    flexGrow: 1,
                    overflowY: 'auto',
                    pr: 1,
                    '&::-webkit-scrollbar': {
                      width: '6px',
                    },
                    '&::-webkit-scrollbar-track': {
                      background: 'rgba(27, 43, 75, 0.05)',
                      borderRadius: '3px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: 'rgba(27, 43, 75, 0.2)',
                      borderRadius: '3px',
                      '&:hover': {
                        background: 'rgba(27, 43, 75, 0.3)',
                      }
                    }
                  }}
                >
                  {month.events.map((event, index) => (
                    <Box 
                      key={index} 
                      sx={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        bgcolor: 'rgba(27, 43, 75, 0.03)',
                        borderRadius: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: 'rgba(27, 43, 75, 0.08)',
                          transform: 'translateX(8px)'
                        }
                      }}
                    >
                      {getEventIcon(event.type)}
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          minWidth: '32px',
                          color: `${getEventColor(event.type)}.main`,
                          fontSize: '1.5rem',
                          fontWeight: 700,
                          lineHeight: 1
                        }}
                      >
                        {event.day}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          flexGrow: 1,
                          color: 'text.primary'
                        }}
                      >
                        {event.description}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 6, textAlign: 'center' }}>
        * Este calendário é meramente indicativo. Consulte sempre o seu contabilista para confirmação das datas exatas.
      </Typography>
    </Container>
  );
};

export default Calendar; 