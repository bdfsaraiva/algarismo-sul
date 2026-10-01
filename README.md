# Algarismo Sul — site institucional

Site estático da **Algarismo Sul**, gabinete de contabilidade, fiscalidade, recursos humanos e consultoria de gestão em Almada. Está disponível em português (`/`) e inglês (`/en/`).

- **Stack:** [Astro](https://astro.build) 7 com saída 100% estática e TypeScript. O site só envia JavaScript para o calendário fiscal, o menu mobile e o mapa.
- **Design:** azul-marinho do logotipo (`#002250`) sobre branco. Tipografia Cormorant Garamond, Montserrat, Manrope e JetBrains Mono, com as fontes servidas pelo próprio site. A barra "/" do monograma A/S é o motivo gráfico.
- **Requisitos:** Node ≥ 22.12.

## Comandos

| Comando | O que faz |
|---|---|
| `npm install` | Instala as dependências |
| `npm run dev` | Servidor de desenvolvimento em `http://localhost:4321` |
| `npm run build` | Gera o site em `dist/` |
| `npm run preview` | Serve o build localmente |
| `npm test` | Testes do calendário fiscal (Vitest) |
| `npm run check` | Verificação de tipos (`astro check`) |
| `npx html-validate "dist/**/*.html"` | Validação do HTML gerado |

## Estrutura

```
src/
  data/site.ts        Contactos, morada, redes sociais (fonte única)
  data/fiscal.ts      Motor do calendário fiscal português (+ fiscal.test.ts)
  i18n/pt.ts, en.ts   Todos os textos do site, por idioma
  i18n/index.ts       Rotas PT/EN, helpers de texto e de navegação
  lib/paths.ts        Prefixo do base path (GitHub Pages)
  layouts/            BaseLayout: <head>, SEO, JSON-LD, header/footer
  components/         Uma componente por secção (Hero, Services, FiscalCalendar…)
  pages/              index, en/index, privacidade, en/privacy, 404, robots.txt
  styles/             tokens.css (paleta, tipografia) e global.css
public/               Logótipos, favicons e imagem de partilha (og-image.png)
scripts/prepare-brand.py   Gera os ativos de marca a partir dos PNG originais
reference/            Protótipos HTML anteriores (não fazem parte do build)
```

## Editar conteúdos

- **Contactos, morada e redes sociais:** `src/data/site.ts`. As redes sem URL não aparecem no site.
- **Textos (hero, serviços, FAQ, equipa, testemunhos…):** `src/i18n/pt.ts` e `src/i18n/en.ts`. Em todos os textos, `*palavra*` aparece em itálico de destaque e `\n` quebra a linha.
- **Equipa:** preencher `name`, `role`, `bio` e `photo` em ambos os idiomas, e mudar `placeholder` para `false`. As fotos ficam em `public/team/` (retrato 4:5, por exemplo 800×1000, de preferência em WebP) e indicam-se como `/team/nome.webp`.
- **Testemunhos:** mesmo processo. Só devem ser publicados depoimentos reais e autorizados.
- **Conteúdo provisório:** entradas com `placeholder: true` aparecem com o selo "Conteúdo provisório" em desenvolvimento e nos previews, e **ficam ocultas em produção** no Vercel (`VERCEL_ENV=production`). Se uma secção ficar vazia, sai também da navegação.
- **Logótipos:** `python scripts/prepare-brand.py` (requer Pillow) regenera `public/brand/`, os favicons e a `og-image.png`.

## Calendário fiscal

Mostra os prazos gerais da Autoridade Tributária e da Segurança Social para o mês corrente e os dois seguintes, calculados no browser a partir da data do visitante. As regras estão em `src/data/fiscal.ts`:

1. Um prazo que calhe em fim de semana ou feriado nacional passa para o dia útil seguinte. A Páscoa e os feriados móveis são calculados.
2. Os prazos da AT que terminem em agosto podem ser cumpridos até 31 de agosto (art. 57.º-A da LGT). Esta regra não se aplica à Segurança Social.
3. O IVA periódico com prazo em agosto passa para 20/25 de setembro.

Os testes usam como referência o [resumo anual oficial das obrigações de pagamento de 2026](https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/calendario_fiscal/Pages/Quadro_res_Pag_2026.aspx). As prorrogações pontuais por despacho não são previstas automaticamente. Para acrescentar ou corrigir obrigações, editar `OBLIGATIONS` em `fiscal.ts` e correr `npm test`.

## Publicação

| Ambiente | Origem | Endereço |
|---|---|---|
| Produção | branch `main` → Vercel | domínio do projeto no Vercel |
| Preview | branch `feat/astro-site` → GitHub Actions → branch `gh-pages` | `https://bdfsaraiva.github.io/algarismo-sul/` |

- **Vercel:** o `vercel.json` define o framework Astro, o build (`npm run build`), a saída (`dist`) e os cabeçalhos de segurança e cache. Os pushes em branches que não sejam o `main` só criam *previews*, sem alterar a produção.
- **GitHub Pages:** o workflow `.github/workflows/deploy-pages.yml` testa, compila com `BASE_PATH=/algarismo-sul` e publica no branch `gh-pages`. O preview leva `noindex` para não concorrer com o domínio final nos motores de busca. Configuração inicial (uma vez): *Settings → Pages → Build and deployment → Deploy from a branch → `gh-pages` / `(root)`*.
- **Variáveis de build:** `SITE_URL` (URL público, usado no canonical e no sitemap), `BASE_PATH` (sub-caminho) e `SITE_NOINDEX` (`true` em previews). No Vercel, o `SITE_URL` é deduzido de `VERCEL_PROJECT_PRODUCTION_URL` quando não está definido.

## Pendente (dados do cliente)

- [ ] Telefone/WhatsApp e email reais (`site.ts`)
- [ ] Equipa: nomes, cargos, biografias e fotografias
- [ ] Testemunhos reais e autorizados
- [ ] URLs das redes sociais
- [ ] Confirmar os números do hero (240 clientes) e os textos de Serviços, Sobre e FAQ
- [ ] Validar o calendário fiscal e a política de privacidade (denominação social e NIF)
- [ ] Domínio final (`SITE_URL` no Vercel)
