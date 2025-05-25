import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ServiceCard from '../components/ServiceCard/ServiceCard';
import {
  AccountBalanceWallet,
  Groups,
  Assessment,
  Receipt,
  BarChart,
  BusinessCenter,
  Calculate,
  Description,
  Storage
} from '@mui/icons-material';

const services = [
  {
    title: 'Contabilidade',
    description: 'Escritório de contabilidade com excelente relação custo/qualidade: Grupos Empresariais | PME | Micro Empresas.',
    icon: AccountBalanceWallet
  },
  {
    title: 'Processamento de Salários',
    description: 'Emissão de recibos de vencimento através de software de gestão | Apoio à Aplicação Da Lei Laboral.',
    icon: Groups
  },
  {
    title: 'Declarações Fiscais',
    description: 'Preenchimento e submissão de declarações fiscais: IVA | IES | IRC | IRS. Assim como de outras obrigações fiscais.',
    icon: Receipt
  },
  {
    title: 'Demonstrações Financeiras',
    description: 'Balancetes, Balanços, Fluxos de Caixa | Demonstração De Resultados | Apoio à tomada de Decisões.',
    icon: Assessment
  },
  {
    title: 'Consultoria',
    description: 'Serviços de consultoria: Fiscalidade | Otimização de Tributação | Análise de Resultados | Otimização de Custos.',
    icon: BusinessCenter
  },
  {
    title: 'Balancetes',
    description: 'Análise e visualização de resultados: Total de débitos e créditos em contas | Saldos (em situação de devedor ou credor).',
    icon: BarChart
  },
  {
    title: 'Gestão Financeira',
    description: 'Gestão completa das finanças empresariais | Planeamento financeiro | Análise de investimentos.',
    icon: Calculate
  },
  {
    title: 'Declaração Intrastat',
    description: 'Informações estatísticas europeias: Expedições | Receção de mercadorias intracomunitárias | Notificação do INE.',
    icon: Description
  },
  {
    title: 'Business Process Outsourcing',
    description: 'Terceirização de processos a empresa externa especializada: Tesouraria | Pagamentos a fornecedores.',
    icon: Storage
  }
];

const Services = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 3,
              fontFamily: 'Cormorant Garamond',
              fontWeight: 600,
              color: 'text.primary',
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Serviços Especializados de Contabilidade
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              fontFamily: 'Montserrat',
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.6
            }}
          >
            Os nossos serviços são disponibilizados por técnicos especializados em contabilidade, 
            fiscalidade e gestão financeira de empresas.
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 4,
          '& > div': {
            flex: '1 1 calc(33.333% - 32px)',
            minWidth: 'calc(33.333% - 32px)',
            maxWidth: 'calc(33.333% - 32px)',
          }
        }}>
          {services.map((service, index) => (
            <Box key={index} sx={{ height: '100%' }}>
              <ServiceCard {...service} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 