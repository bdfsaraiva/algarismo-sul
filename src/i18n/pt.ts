/**
 * Textos em português (pt-PT, Acordo Ortográfico de 1990).
 * Convenção: *texto* → itálico de destaque; \n → quebra de linha.
 */
export const pt = {
  lang: 'pt' as 'pt' | 'en',
  htmlLang: 'pt-PT',
  ogLocale: 'pt_PT',
  meta: {
    title: 'Algarismo Sul — Contabilidade, Fiscalidade e Consultoria em Almada',
    description:
      'Contabilidade, fiscalidade, recursos humanos e consultoria de gestão para empresas e particulares em Almada e na Margem Sul. Contabilistas certificados, atendimento de proximidade.',
  },
  a11y: {
    skip: 'Saltar para o conteúdo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    mainNav: 'Navegação principal',
    menu: 'Menu',
    switchLang: 'Switch to English',
    whatsapp: 'Contactar via WhatsApp',
    home: 'Algarismo Sul — página inicial',
    placeholder: 'Conteúdo provisório',
  },
  nav: {
    servicos: 'Serviços',
    sobre: 'Sobre nós',
    equipa: 'Equipa',
    calendario: 'Calendário fiscal',
    testemunhos: 'Testemunhos',
    faq: 'FAQ',
    contactos: 'Contactos',
  },
  cta: {
    meeting: 'Marcar reunião',
    services: 'Ver serviços',
    call: 'Ligar',
    whatsapp: 'WhatsApp',
    email: 'Enviar email',
  },
  hero: {
    eyebrow: 'Contabilidade em Almada',
    title: 'Profissionais\n*experientes*\ne especializados.',
    lede:
      'Somos uma empresa sólida, especializada no apoio à gestão empresarial, focada no negócio do cliente e na sustentabilidade do seu futuro. Apostamos na personalização e na inovação contínua para garantir a excelência dos nossos serviços.',
    stats: [
      { value: '240', label: 'Clientes ativos', note: 'PME e particulares' },
      { value: '0 €', label: 'Reunião inicial', note: 'Sem compromisso' },
    ],
    meta: ['Contabilistas certificados (OCC)', 'Conformidade com o RGPD', 'Resposta em 24 h úteis'],
  },
  ticker: [
    'Contabilidade e Fiscalidade',
    'Recursos Humanos',
    'Consultoria de Gestão',
    'Apoio ao Empreendedor',
    'Soluções Digitais',
    'IRS · IRC · IVA',
  ],
  services: {
    eyebrow: 'O que fazemos',
    title: 'Serviços\n*integrados*',
    intro:
      'Informação de gestão fiável, no momento certo. Respondemos com rigor aos desafios da contabilidade, fiscalidade, tesouraria, recursos humanos e consultoria, qualquer que seja a dimensão ou o setor da sua atividade.',
    items: [
      {
        title: 'Contabilidade e Fiscalidade',
        desc: 'Organização documental rigorosa, encerramento de contas e relatórios de gestão claros. Planeamento fiscal pensado para a sua realidade: paga o que é devido e nada mais.',
        points: ['Contabilidade geral e analítica (SNC)', 'IVA, IRC, IRS e Imposto do Selo', 'Modelo 22, IES e encerramento anual'],
        keywords: 'SNC · IVA · IRC · IRS',
      },
      {
        title: 'Recursos Humanos',
        desc: 'Processamento salarial, contratos e obrigações com a Segurança Social, com apoio laboral de proximidade para que cada colaborador seja tratado com o cuidado que merece.',
        points: ['Processamento de salários e recibos', 'Declarações à Segurança Social e à AT', 'Contratos e apoio jurídico-laboral'],
        keywords: 'Salários · SS · DMR',
      },
      {
        title: 'Consultoria de Gestão',
        desc: 'Fiscalidade, tecnologia, capital humano e estratégia como catalisadores do negócio. Acompanhamos as decisões, não nos limitamos a registá-las.',
        points: ['Análise de rentabilidade e tesouraria', 'Orçamentos e controlo de gestão', 'Reestruturações e reorganização societária'],
        keywords: 'Estratégia · Tesouraria',
      },
      {
        title: 'Apoio ao Empreendedor',
        desc: 'Da abertura de atividade à escolha do regime fiscal certo. Acompanhamos do primeiro NIF da empresa ao primeiro relatório de contas.',
        points: ['Constituição de empresas e início de atividade', 'Escolha entre regime simplificado e contabilidade organizada', 'Candidaturas a apoios e incentivos'],
        keywords: 'Início de atividade',
      },
      {
        title: 'Soluções Digitais',
        desc: 'Um serviço simples, intuitivo e seguro que lhe permite gerir o negócio totalmente *online*: faturação eletrónica, arquivo digital e indicadores de gestão integrados.',
        points: ['Faturação eletrónica certificada', 'Arquivo digital de documentos', 'Indicadores de gestão em tempo real'],
        keywords: '100% digital',
      },
    ],
  },
  about: {
    eyebrow: 'Quem somos',
    title: 'Mais de uma *década*\nao serviço das empresas.',
    lead:
      'Na Algarismo Sul oferecemos um portefólio completo de serviços de contabilidade para empresas, empreendedores e particulares da região de Almada. Garantimos o rigor documental e o encerramento de contas dentro dos prazos legais, para que se possa concentrar no que importa: fazer crescer o negócio.',
    body:
      'Para além da contabilidade geral e analítica, prestamos consultoria fiscal orientada para a otimização de impostos. Profissionais certificados pela Ordem dos Contabilistas Certificados, atentos à legislação portuguesa e europeia, ajudam-no a pagar apenas o que é justo, sem surpresas no fim do exercício.',
    differentiators: [
      { strong: 'Contabilistas certificados', text: 'inscritos na Ordem dos Contabilistas Certificados.' },
      { strong: 'Atendimento de proximidade', text: 'em Almada, presencial ou por videochamada.' },
      { strong: 'Plataforma documental segura', text: 'em cumprimento integral do RGPD.' },
      { strong: 'Resposta em 24 horas úteis', text: 'para todas as questões urgentes.' },
      { strong: 'Sem fidelizações abusivas.', text: 'Queremos que fique connosco por escolha, não por contrato.' },
    ],
  },
  team: {
    eyebrow: 'A nossa equipa',
    title: 'Conheça quem\n*cuida* do seu negócio.',
    intro:
      'Mais do que técnicos, somos pessoas que tratam o seu negócio como se fosse nosso. Uma equipa pequena, próxima e altamente especializada.',
    members: [
      {
        name: 'Nome Apelido',
        role: 'Sócio-gerente',
        bio: 'Contabilista certificado pela OCC, com mais de duas décadas de experiência em PME e profissões liberais. Lidera a equipa com a convicção de que rigor técnico e proximidade não são opostos.',
        photo: '',
        placeholder: true,
      },
      {
        name: 'Nome Apelido',
        role: 'Coordenação fiscal',
        bio: 'Especialista em fiscalidade empresarial. Acompanha clientes no planeamento fiscal e em reestruturações societárias, do microempresário ao grupo familiar.',
        photo: '',
        placeholder: true,
      },
      {
        name: 'Nome Apelido',
        role: 'Recursos humanos',
        bio: 'Responsável pelo processamento salarial e pela gestão de pessoas. Trata recibos, contratos e obrigações sociais com a precisão de quem sabe que cada colaborador é uma pessoa, não um número.',
        photo: '',
        placeholder: true,
      },
    ],
  },
  calendar: {
    eyebrow: 'Calendário fiscal',
    title: 'As datas que\n*não pode* perder.',
    intro:
      'Os próximos prazos fiscais e contributivos em Portugal, calculados para hoje: dias úteis, feriados nacionais e regras especiais de agosto incluídos.',
    disclaimer:
      'Prazos gerais da Autoridade Tributária e da Segurança Social. Prorrogações por despacho e regimes específicos podem alterar estas datas. Confirme sempre o seu caso connosco.',
    officialLink: 'Agenda fiscal oficial da AT',
    next: 'Próximo prazo',
    opens: 'Abre',
    loadMore: 'Carregar mais datas',
    loading: 'A carregar…',
    done: 'Sem mais datas neste horizonte',
    noscript: 'Ative o JavaScript para ver os próximos prazos, ou consulte a agenda fiscal oficial da AT.',
    horizon: 'Próximos três meses',
  },
  testimonials: {
    eyebrow: 'Testemunhos',
    title: 'O que dizem\n*sobre nós*.',
    intro: 'Mais do que números, são histórias de quem decidiu delegar a parte burocrática para se focar no que sabe fazer melhor.',
    items: [
      {
        quote:
          'A Algarismo Sul foi fundamental no arranque do meu negócio. Ajudaram-me a abrir a empresa e a escolher o regime fiscal mais adequado, o que se traduziu numa poupança real em impostos.',
        name: 'Nome do cliente',
        role: 'Empresária · Comércio',
        placeholder: true,
      },
      {
        quote:
          'Antes, tratava da contabilidade ao fim de semana. Hoje, com tudo em dia, ganhei tempo para o que interessa. É outra qualidade de vida e outra qualidade de empresa.',
        name: 'Nome do cliente',
        role: 'Gerente · Tecnologia',
        placeholder: true,
      },
      {
        quote:
          'A consultoria fiscal ajudou-me a perceber melhor as minhas obrigações e fez uma diferença real na tesouraria da empresa. Recomendo sem hesitar.',
        name: 'Nome do cliente',
        role: 'Diretor financeiro · Indústria',
        placeholder: true,
      },
    ],
  },
  faq: {
    eyebrow: 'Perguntas frequentes',
    title: 'O que nos\n*perguntam* antes de começar.',
    intro: 'Reunimos as dúvidas mais comuns. Se a sua não estiver aqui, ligue-nos ou envie uma mensagem: respondemos no próprio dia.',
    items: [
      {
        q: 'Que serviços de contabilidade prestam em Almada?',
        a: 'Contabilidade geral e analítica, consultoria fiscal, processamento salarial, apoio à abertura de atividade e soluções de gestão integradas. O objetivo é otimizar as finanças do seu negócio e garantir o cumprimento de todas as obrigações fiscais.',
      },
      {
        q: 'Mudar de contabilista é um processo simples?',
        a: 'Sim, sobretudo para o cliente. O código deontológico da Ordem dos Contabilistas Certificados define como a transição é feita, e tratamos diretamente com o contabilista anterior, sem complicações para si.',
      },
      {
        q: 'Tenho de me deslocar para entregar faturas e documentos?',
        a: 'Não. Pode digitalizar os documentos e enviá-los para a nossa pasta partilhada na *cloud* ou, se preferir, combinamos uma recolha mensal. Todo o processo pode ser 100% digital.',
      },
      {
        q: 'Como funciona a contratação?',
        a: 'Marcamos uma primeira reunião, presencial ou por videochamada, para conhecer a sua realidade. Depois enviamos uma proposta personalizada e, assim que for aprovada, começamos a trabalhar. Sem letras pequenas e sem fidelizações abusivas.',
      },
      {
        q: 'Quanto custam os vossos serviços?',
        a: 'O preço depende da complexidade e do volume de operações. Apresentamos sempre um orçamento transparente depois de analisar o seu negócio, sem custos escondidos.',
      },
      {
        q: 'Como garantem a segurança dos dados da minha empresa?',
        a: 'Usamos plataformas de gestão documental atualizadas, com encriptação em trânsito, controlo de acessos e cópias de segurança regulares. Cumprimos integralmente o RGPD.',
      },
      {
        q: 'Como posso otimizar fiscalmente o meu negócio?',
        a: 'Cada caso é um caso. Analisamos a estrutura da empresa, o regime fiscal atual e a evolução prevista, e apresentamos cenários concretos: enquadramento em IVA, escolha entre IRS e IRC, dedução de custos e benefícios fiscais aplicáveis.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contactos',
    title: 'Falemos sobre\no seu *caso*.',
    intro: 'Estamos disponíveis para falar consigo pessoalmente, por telefone ou por videochamada.',
    address: 'Morada',
    phone: 'Telefone / WhatsApp',
    email: 'Email',
    openMap: 'Abrir no Google Maps',
  },
  map: {
    title: 'Mapa da localização do escritório',
    consent: 'O mapa é fornecido pela Google. Ao carregá-lo, a Google pode recolher dados e definir cookies.',
    load: 'Mostrar mapa',
  },
  finalCta: {
    title: 'Agende a sua\n*primeira reunião*.',
    text: 'Sem compromisso e sem letras pequenas. Uma conversa para percebermos onde podemos acrescentar valor à sua gestão financeira e fiscal.',
  },
  footer: {
    tagline: 'Contabilidade, fiscalidade e consultoria de gestão. Profissionais experientes e especializados ao seu serviço.',
    company: 'Empresa',
    services: 'Serviços',
    contacts: 'Contactos',
    servicesLinks: ['Contabilidade', 'Fiscalidade', 'Recursos humanos', 'Consultoria'],
    privacy: 'Política de privacidade',
    complaints: 'Livro de Reclamações',
    rights: 'Almada, Portugal',
  },
  cookie: {
    text: 'Este site não usa cookies de rastreio. O mapa da Google só é carregado se o pedir.',
    more: 'Ver a política de privacidade',
    ok: 'Entendi',
  },
  notFound: {
    title: 'Página não encontrada',
    text: 'A página que procura não existe ou mudou de endereço.',
    back: 'Voltar à página inicial',
  },
};

export type Dict = typeof pt;
