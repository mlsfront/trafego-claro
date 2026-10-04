# Planejamento estratégico e produto

## Visão

O Tráfego Claro ajuda pequenos negócios e profissionais de performance a sair de dados espalhados em plataformas e planilhas para um fluxo simples: **diagnosticar, priorizar, executar e demonstrar resultado**. A dor central não é apenas “comprar tráfego”; é saber por que a campanha não entrega, qual ação vem primeiro e se o lead virou oportunidade comercial.

## Hipótese de produto

Se o usuário conseguir concluir um diagnóstico em poucos minutos, registrar a campanha e acompanhar o lead no mesmo espaço, ele terá mais clareza para otimizar investimento e demonstrar valor ao cliente. A primeira versão deve provar esse fluxo antes de ampliar integrações.

## MVP atual

A versão `0.2.0-dev` entrega o fluxo de demonstração no navegador: dashboard, campanhas, leads, diagnóstico baseado em regras, recomendações, persistência local, exportação JSON e relatório imprimível. O objetivo é validar a experiência e a taxonomia, não simular uma conexão real com as plataformas de anúncios.

## Escopo técnico do próximo incremento

O backend recomendado é PHP 8.2 com PDO e MySQL, em MVC simples. A API deve usar prepared statements, validação de payload no servidor, sessões seguras, CSRF, autorização por workspace e logs de auditoria. O frontend pode continuar em JavaScript Vanilla, consumindo endpoints JSON com estados de carregamento, erro e sucesso.

Entidades mínimas: `users`, `workspaces`, `businesses`, `campaigns`, `campaign_metrics`, `leads`, `lead_interactions`, `diagnoses`, `recommendations`, `reports` e `audit_logs`. Cada tabela de domínio deve possuir `workspace_id`, timestamps e índices coerentes com os filtros mais usados.

## Métricas e definições

- **CTR:** cliques / impressões × 100.
- **CPL:** investimento / leads.
- **CPA:** investimento / conversões comerciais.
- **Taxa de conversão:** conversões / leads ou sessões, sempre exibindo o denominador adotado.
- **ROAS:** receita atribuída / investimento.

Métricas de produto: conclusão do diagnóstico, tempo até primeiro cadastro, leads contatados em 24 horas, retorno em 7 dias, exportações e recomendações marcadas como executadas. Métricas de aquisição: CAC por canal, taxa de ativação e conversão da landing page.

## Plano de validação

Na primeira semana, entrevistar 5–10 usuários do ICP e observar a execução do diagnóstico. Na segunda, medir o funil `visita → início → conclusão → cadastro → retorno`. A hipótese será considerada promissora se pelo menos 60% concluírem o diagnóstico sem ajuda e metade cadastrar uma campanha ou lead durante o teste.

## Go-to-market

O posicionamento recomendado é “clareza para decidir o próximo real investido”. A aquisição inicial deve priorizar intenção: SEO e anúncios de pesquisa para dores específicas (“campanha sem leads”, “CPL alto”, “Google Ads não veicula”), conteúdo educativo de métricas e parcerias com contadores, consultores e freelancers.

A oferta de entrada é um diagnóstico gratuito com resultado imediato. O próximo passo é um workspace com campanhas e leads. Planos pagos podem evoluir de Diagnóstico para Gestão, Leads e Agência, mas só depois da validação de retenção e disposição a pagar.

## Fases

### Fase 0 — Validação

Entrevistas, instrumentação de eventos e teste de usabilidade do fluxo atual.

### Fase 1 — MVP multiusuário

Autenticação, workspace, CRUD, banco MySQL, API, histórico de diagnósticos e permissões.

### Fase 2 — Resultado operacional

Métricas por período, tarefas, relatórios PDF/HTML, alertas e SLA de atendimento dos leads.

### Fase 3 — Integrações governadas

Google Ads, Meta Ads, TikTok, GA4 e GTM com OAuth, feature flags, idempotência, retries e monitoramento de tokens.

## Fora do escopo imediato

Publicação automática de anúncios, automações de WhatsApp, gestão financeira completa, marketplace de influenciadores e IA generativa avançada. Esses itens exigem validação comercial, políticas de consentimento e maior maturidade de segurança.
