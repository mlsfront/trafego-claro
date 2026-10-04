# Tráfego Claro

Plataforma de diagnóstico, planejamento e acompanhamento de marketing digital para pequenos negócios e profissionais de performance.

> **Versão atual:** `0.2.0-dev` — MVP front-end operacional, com dados locais para demonstração.

## O que foi melhorado

Esta versão transforma o protótipo visual em uma demonstração navegável e testável. O dashboard calcula investimento, leads, CPL e conversão a partir dos dados atuais; campanhas e leads têm filtros; novos registros podem ser criados sem backend; o diagnóstico usa regras explicáveis e pode ser salvo localmente; os dados podem ser exportados em JSON; e o relatório pode ser impresso para conversão em PDF pelo navegador.

Também foram adicionados estados vazios, mensagens de feedback, foco visível, rótulos acessíveis, `meta description`, impressão otimizada, layout responsivo e a documentação de contexto do projeto.

## Execução

O projeto é compatível com Apache/XAMPP e não requer instalação de dependências:

```bash
cd /opt/lampp/htdocs/trafego-claro
# Apache servindo a pasta:
http://localhost/trafego-claro/
```

Para uma verificação rápida sem Apache:

```bash
python3 -m http.server 8080
# abra http://localhost:8080
```

Os dados de demonstração são gravados no `localStorage` do navegador. Para restaurar o estado inicial, remova a chave `trafego-claro-mvp-v1` no armazenamento do site.

## Estrutura

```text
trafego-claro/
├── index.html
├── CONTEXTO_PROJETO.md
├── README.md
├── CHANGELOG.md
├── assets/
│   ├── css/style.css
│   ├── js/app.js
│   └── images/
└── docs/planejamento.md
```

## Princípios de implementação

A interface permanece sem dependências externas para facilitar a implantação no ambiente informado (Linux/Debian, Apache e PHP 8.2). O JavaScript usa `BASE_URL` para recursos, funções pequenas e renderização baseada em estado. A camada local é um adaptador de demonstração: no backend, ela deve ser substituída por API PHP com PDO, autenticação e autorização por workspace.

Não são usados valores vindos do usuário diretamente em `innerHTML` sem escape; a função `escapeHtml` protege as áreas de conteúdo dinâmico. Isso não substitui validação no servidor quando a API for criada.

## Roadmap priorizado

### 0 — Validação do problema (imediato)

- Entrevistar 5–10 pequenos negócios, gestores e microagências.
- Medir conclusão do diagnóstico, recomendações aceitas e retorno à plataforma.
- Validar a taxonomia mínima de campanha, lead, conversão e tarefa.

### 1 — MVP multiusuário (próximo ciclo)

- PHP 8.2 + PDO + MySQL, migrations e seed de ambiente.
- Cadastro, login, recuperação de senha e isolamento por workspace.
- CRUD de negócios, campanhas, leads e diagnósticos.
- API JSON com validação, CSRF, rate limiting básico e logs de auditoria.
- Filtros persistentes, tarefas derivadas das recomendações e histórico.

### 2 — Resultado e retenção

- Métricas manuais por período: investimento, impressões, cliques, leads, vendas e receita.
- Cálculo de CTR, CPL, CPA, taxa de conversão e ROAS com denominadores explícitos.
- Relatório HTML/PDF com marca branca, comentários e compartilhamento seguro.
- Alertas de anomalia e acompanhamento de SLA de primeiro contato.

### 3 — Integrações com governança

- OAuth e ingestão incremental para Google Ads, Meta Ads e TikTok Ads.
- GA4/GTM para validação de eventos e UTMs.
- Fila de sincronização, idempotência, retries e monitoramento de tokens.
- WhatsApp e formulários somente após política de consentimento e LGPD.

### Estratégia de tráfego e crescimento

A aquisição inicial deve priorizar intenção e prova de valor, não volume. A landing page deve oferecer um diagnóstico gratuito com resultado em poucos minutos; campanhas de pesquisa devem capturar dores específicas como “campanha não gera leads” e “CPL alto”; conteúdo deve explicar métricas sem jargão e apontar para o diagnóstico; e parcerias com contadores, consultores e freelancers podem reduzir CAC. O funil mínimo deve acompanhar visita → início do diagnóstico → diagnóstico concluído → primeiro cadastro → retorno em 7 dias.

## Critérios de aceite da próxima fase

O backend só deve ser considerado pronto quando houver testes de autenticação e autorização, validação de payloads, isolamento entre workspaces, migrations reproduzíveis, logs sem dados sensíveis, backup testado e um ambiente de staging. A primeira integração de mídia deve ser liberada atrás de feature flag e comparada com um conjunto de dados de referência.

## Licença

Este projeto está em fase de protótipo e possui finalidade experimental e de validação.

A licença definitiva deverá ser definida antes da publicação da primeira versão comercial.
