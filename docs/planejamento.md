# Planejamento Estratégico: Plataforma de Diagnóstico, Planejamento e Acompanhamento de Marketing Digital

## 1. Visão Geral da Dor de Mercado

Com base na alta demanda identificada nos e-mails (gestão, análise, implantação de tráfego pago, publicidade em redes sociais, geração de leads e vendas online), constatamos que a dor real do mercado não é apenas a necessidade de tráfego pago, mas sim:

> **Pequenas empresas têm dificuldade para planejar, configurar, acompanhar e otimizar suas campanhas de marketing digital de forma organizada e orientada a resultados.**

Devido à falta de conhecimento técnico, tempo ou estrutura, esses profissionais e pequenos negócios precisam de uma solução centralizada e prática.

---

## 2. Abordagem: Uma Solução Única vs. Múltiplas Ferramentas

Para atender às necessidades do mercado sem dispersar os esforços de desenvolvimento, a melhor estratégia é **uma solução principal modular**, com diferentes módulos e planos progressivos. 

Uma única ferramenta não conseguirá abranger inicialmente com profundidade todas as áreas (gestão, diagnóstico, influenciadores, redes sociais, administração e consultoria), mas uma plataforma central modular permite começar de forma simples e evoluir gradualmente.

---

## 3. Produto Recomendado

Uma **plataforma de diagnóstico, planejamento e acompanhamento de marketing digital para pequenos negócios**, desenvolvida sob medida para apoiar o fluxo de trabalho sem exigir integrações complexas com APIs de anúncios logo no início.

### Funcionalidades de Apoio Inicial:
1. Cadastro do negócio
2. Definição de objetivos
3. Identificação do público-alvo
4. Elaboração de planos de campanha
5. Geração de checklists
6. Acompanhamento de métricas
7. Registro de problemas
8. Organização de leads
9. Apresentação de relatórios para clientes

---

## 4. Módulos do Sistema

### 4.1. Diagnóstico de Campanhas
Atende a problemas comuns como: campanhas do Google Ads sem veiculação, anúncios sem impressões, baixo CTR, custo elevado, problemas de segmentação e ausência de rastreamento.
* **Funcionamento:** Questionário estruturado onde o usuário preenche informações (objetivo, público, orçamento, palavras-chave, anúncios, páginas de destino, tags e conversões) e o sistema gera análises e recomendações baseadas em regras pré-cadastradas.

### 4.2. Planejador de Campanhas
O usuário informa os dados do negócio, produto, região, orçamento, objetivo e canal desejado. O sistema gera:
* Estrutura de campanha e grupos de anúncios
* Sugestões de palavras-chave e copies (textos e chamadas para ação)
* Checklist de configuração e eventos de rastreamento

### 4.3. Painel de Acompanhamento (Métricas)
Permite o registro manual de investimentos, impressões, cliques, leads, vendas e faturamento, calculando automaticamente indicadores essenciais:

$$
CTR = \frac{\text{cliques}}{\text{impressões}} \times 100
$$

$$
CPL = \frac{\text{investimento}}{\text{leads}}
$$

$$
CPA = \frac{\text{investimento}}{\text{clientes}}
$$

$$
ROAS = \frac{\text{receita atribuída aos anúncios}}{\text{investimento}}
$$

### 4.4. CRM Simples de Leads
Conecta o tráfego pago ao resultado comercial, indo além dos cliques:
* Cadastro de leads, origem, campanha e estágio de atendimento
* Status de acompanhamento: *novo, contatado, proposta enviada, convertido ou perdido*

### 4.5. Gerador de Relatórios
Geração de relatórios claros em formato HTML (prontos para impressão ou conversão para PDF) contendo período, investimentos, alcance, cliques, leads, vendas, problemas e recomendações.

---

## 5. Escopo do MVP (Mínimo Produto Viável)

Para garantir agilidade no lançamento, o MVP conterá apenas quatro frentes essenciais:
1. **Cadastro de clientes e negócios**
2. **Diagnóstico de campanhas**
3. **Planejamento de campanhas**
4. **Painel manual de métricas e leads**

### O que fica para a Segunda Fase (Expansão):
* Publicidade automática e integrações completas com APIs (Google Ads, Meta Ads, TikTok Ads)
* Automações de WhatsApp, stories e inteligência artificial avançada
* Gestão financeira completa e marketplace de influenciadores

---

## 6. Fases de Desenvolvimento e Validação

* **Fase 1 — Validação da dor:** Entrevistas com gestores de tráfego, agências pequenas, prestadores de serviço e infoprodutores para investigar comportamentos reais e demandas recorrentes.
* **Fase 2 — MVP operacional:** Desenvolvimento do login, cadastros, formulário de diagnóstico, regras de recomendação, painel de métricas e relatórios básicos.
* **Fase 3 — Produto comercial:** Adição de múltiplos usuários, planos de assinatura, exportação em PDF e biblioteca de criativos.
* **Fase 4 — Integrações:** Conexão nativa com plataformas de anúncios e ferramentas de análise (Google Analytics, GTM, etc.) validadas pelo uso real.

---

## 7. Arquitetura Técnica Recomendada

A stack tecnológica informada é perfeitamente adequada para a construção do projeto:

* **Backend:** PHP puro com PDO, arquitetura MVC simples, sessões para autenticação, controle de permissões, prepared statements e validação rigorosa no servidor.
* **Banco de Dados (MySQL):** Tabelas estruturadas para `usuarios`, `clientes`, `negocios`, `campanhas`, `canais`, `diagnosticos`, `perguntas_diagnostico`, `respostas_diagnostico`, `recomendacoes`, `metricas`, `leads`, `interacoes_leads` e `relatorios`.
* **Frontend:** HTML5, CSS3 e JavaScript puro com requisições via `fetch` / AJAX e interface responsiva.

---

## 8. Modelos de Negócio

1. **Ferramenta para Gestores e Agências:** Foco em profissionais que gerenciam múltiplos clientes e precisam escalar a organização e os relatórios.
2. **Ferramenta para Pequenos Empresários:** Foco no próprio dono do negócio que quer entender e organizar sua divulgação.
3. **Serviço Combinado:** Oferta conjunta de plataforma + consultoria/implantação no início para garantir tração financeira e validação do software.

---

## 9. Recomendação Final de Posicionamento

> **Plataforma para diagnosticar campanhas, organizar estratégias de tráfego pago, acompanhar leads e demonstrar resultados de marketing digital.**

Evolução comercial por planos modulares:
* *Plano Diagnóstico*
* *Plano Gestão de Campanhas*
* *Plano Leads e CRM*
* *Plano Relatórios para Clientes*
* *Plano Agência* (múltiplos clientes)