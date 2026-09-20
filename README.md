# Tráfego Claro

Plataforma piloto para diagnosticar campanhas, organizar estratégias de tráfego pago, acompanhar leads e demonstrar resultados de marketing digital.

## Sobre o projeto

O Tráfego Claro foi concebido para atender pequenos negócios, gestores de tráfego e profissionais de marketing que precisam organizar informações de campanhas e identificar oportunidades de melhoria.

A primeira versão funciona como um protótipo visual de um sistema de apoio à gestão de marketing digital, com foco em:

- Diagnóstico de campanhas;
- Organização de campanhas e canais;
- Acompanhamento de métricas;
- Gestão simples de leads;
- Geração de recomendações;
- Apresentação de relatórios.

O projeto faz parte de uma proposta de MVP e, nesta etapa, utiliza dados simulados no front-end.

## Objetivo

Criar uma plataforma simples e acessível para ajudar empresas e profissionais a responderem perguntas como:

- Por que minha campanha não está veiculando?
- Por que estou recebendo poucos leads?
- Meu custo por lead está alto?
- Minha campanha está gerando resultados?
- Quais ações devo priorizar?
- Como demonstrar os resultados para um cliente?
- De onde estão vindo os meus leads?

## Funcionalidades do protótipo

### Dashboard

A tela principal apresenta:

- Investimento total;
- Quantidade de leads;
- Custo por lead;
- Taxa de conversão;
- Gráfico de desempenho;
- Indicador de saúde das campanhas;
- Campanhas ativas;
- Alertas e recomendações.

### Diagnóstico de campanhas

O usuário pode informar:

- Nome do negócio;
- Canal utilizado;
- Objetivo da campanha;
- Problema identificado;
- Investimento mensal;
- Página de destino;
- Observações adicionais.

Após o preenchimento, a aplicação gera recomendações preliminares com base no problema informado.

### Gestão de campanhas

A seção de campanhas permite visualizar:

- Nome da campanha;
- Canal utilizado;
- Objetivo;
- Investimento;
- Quantidade de leads;
- Status da campanha.

### Gestão de leads

A seção de leads apresenta informações como:

- Nome do contato;
- Origem;
- Campanha relacionada;
- Status comercial;
- Data do último contato.

### Relatórios

A área de relatórios apresenta um resumo dos resultados e recomendações para o próximo período de análise.

## Tecnologias utilizadas

- HTML5;
- CSS3;
- JavaScript Vanilla;
- Design responsivo;
- Sem dependências externas obrigatórias;
- Dados simulados no front-end.

## Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/mlsfront/trafego-claro.git
```

### 2. Acesse a pasta do projeto

```bash
cd trafego-claro
```

### 3. Abra o arquivo

Abra o arquivo `index.html` diretamente no navegador.

Também é possível utilizar uma extensão como o Live Server no Visual Studio Code.

## Estrutura inicial

```text
trafego-claro/
│
├── index.html
├── README.md
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── app.js
│   │
│   └── images/
│
└── docs/
    └── planejamento.md
```

Na versão inicial, o protótipo pode funcionar com todos os estilos e scripts dentro do arquivo `index.html`. Conforme o projeto evoluir, os arquivos devem ser separados para facilitar a manutenção.

## Próxima versão da estrutura

A versão com backend poderá seguir uma organização semelhante a esta:

```text
trafego-claro/
│
├── public/
│   ├── index.php
│   └── assets/
│       ├── css/
│       └── js/
│
├── app/
│   ├── controllers/
│   ├── models/
│   ├── services/
│   └── views/
│
├── config/
│   └── database.php
│
├── database/
│   └── migrations/
│
├── routes/
│   └── web.php
│
└── README.md
```

## Roadmap

### Fase 1 — Protótipo visual

- [x] Dashboard;
- [x] Tela de diagnóstico;
- [x] Listagem de campanhas;
- [x] Listagem de leads;
- [x] Tela de relatórios;
- [x] Layout responsivo;
- [x] Navegação entre telas;
- [x] Recomendações preliminares baseadas em regras.

### Fase 2 — MVP funcional

- [ ] Cadastro de usuários;
- [ ] Login e autenticação;
- [ ] Cadastro de clientes;
- [ ] Cadastro de negócios;
- [ ] Cadastro de campanhas;
- [ ] Cadastro de leads;
- [ ] Persistência dos dados no MySQL;
- [ ] Edição e exclusão de registros;
- [ ] Filtros por cliente, canal e status;
- [ ] Histórico de diagnósticos.

### Fase 3 — Relatórios e inteligência operacional

- [ ] Exportação de relatórios;
- [ ] Geração de relatórios em PDF;
- [ ] Indicadores personalizados;
- [ ] Histórico de métricas;
- [ ] Alertas de desempenho;
- [ ] Biblioteca de recomendações;
- [ ] Modelos de diagnóstico por segmento;
- [ ] Permissões para usuários e clientes.

### Fase 4 — Integrações

- [ ] Google Ads;
- [ ] Meta Ads;
- [ ] TikTok Ads;
- [ ] Google Analytics;
- [ ] Google Tag Manager;
- [ ] Plataformas de e-commerce;
- [ ] WhatsApp;
- [ ] Integração com formulários e landing pages.

## Banco de dados planejado

As principais entidades previstas são:

```text
usuarios
clientes
negocios
campanhas
canais
diagnosticos
perguntas_diagnostico
respostas_diagnostico
recomendacoes
metricas
leads
interacoes_leads
relatorios
```

## Exemplo de indicadores

A plataforma poderá calcular indicadores como:

### Taxa de cliques

```text
CTR = cliques / impressões × 100
```

### Custo por lead

```text
CPL = investimento / quantidade de leads
```

### Custo por aquisição

```text
CPA = investimento / quantidade de clientes
```

### Taxa de conversão

```text
Taxa de conversão = conversões / visitantes × 100
```

### Retorno sobre investimento em anúncios

```text
ROAS = receita atribuída aos anúncios / investimento
```

## Público-alvo

O projeto pode atender diferentes perfis:

- Gestores de tráfego autônomos;
- Pequenas agências;
- Prestadores de serviços;
- Negócios locais;
- Lojas virtuais;
- Profissionais liberais;
- Infoprodutores;
- Pequenas empresas;
- Consultores de marketing digital.

## Proposta de valor

O Tráfego Claro pretende centralizar informações que normalmente ficam espalhadas em planilhas, mensagens e diferentes plataformas.

A proposta é oferecer uma visão mais simples sobre:

- O que está acontecendo com uma campanha;
- Quais problemas precisam de atenção;
- Quais leads foram gerados;
- Quanto está sendo investido;
- Quais resultados foram obtidos;
- Quais ações devem ser executadas.

## Escopo do piloto

O piloto não realiza, inicialmente:

- Publicação automática de anúncios;
- Alterações diretas nas contas de anúncios;
- Gestão financeira completa;
- Edição de vídeos;
- Automação completa de redes sociais;
- Marketplace de influenciadores;
- Integrações oficiais com plataformas de anúncios.

Essas funcionalidades poderão ser avaliadas após a validação do MVP.

## Princípios do projeto

- Simplicidade de uso;
- Foco em pequenos negócios;
- Dados organizados;
- Recomendações práticas;
- Interface objetiva;
- Evolução modular;
- Validação antes de grandes integrações;
- Separação entre métricas e resultados comerciais.

## Possíveis planos comerciais

### Plano Diagnóstico

- Diagnóstico de campanhas;
- Checklist de problemas;
- Recomendações básicas;
- Histórico de análises.

### Plano Gestão

- Cadastro de campanhas;
- Acompanhamento de métricas;
- Alertas;
- Relatórios periódicos.

### Plano Leads

- CRM simplificado;
- Organização dos contatos;
- Origem dos leads;
- Funil comercial;
- Histórico de atendimento.

### Plano Agência

- Múltiplos clientes;
- Usuários adicionais;
- Relatórios personalizados;
- Identidade visual;
- Permissões por cliente.

## Status do projeto

> Protótipo visual em desenvolvimento.

O projeto ainda não possui backend, autenticação ou integração com plataformas externas. O objetivo atual é validar a proposta visual, a estrutura do produto e os principais fluxos de uso.

## Licença

Este projeto está em fase de protótipo e possui finalidade experimental e de validação.

A licença definitiva deverá ser definida antes da publicação da primeira versão comercial.
