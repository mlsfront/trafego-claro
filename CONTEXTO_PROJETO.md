# Contexto do projeto

## Produto
O **Tráfego Claro** é uma plataforma de apoio a pequenos negócios, gestores de tráfego e agências. O produto conecta aquisição (campanhas e métricas) ao resultado comercial (leads e status), reduzindo a dependência de planilhas e decisões sem contexto.

## Estado entregue nesta versão
- Protótipo convertido em MVP front-end funcional, sem dependências externas.
- Dados demonstrativos e novos cadastros persistidos no `localStorage` do navegador.
- Dashboard com métricas calculadas, saúde das campanhas, alertas e gráfico visual.
- Diagnóstico baseado em regras, validação de URL e histórico local.
- Filtros de campanhas e leads, cadastro rápido e exportação JSON.
- Relatório para impressão e melhorias de acessibilidade, responsividade e semântica.

## Decisões técnicas
- **Stack atual:** HTML5, CSS3 e JavaScript Vanilla.
- **Compatibilidade prevista:** Apache/XAMPP, navegadores modernos e PHP 8.2 no próximo ciclo.
- **BASE_URL:** o documento define `window.BASE_URL` para tornar recursos portáveis entre raiz, subdiretório e hospedagem futura.
- **Persistência temporária:** `localStorage` é deliberadamente limitado ao modo demonstração; não deve ser usado para dados reais de clientes sem autenticação e backend.
- **Segurança futura:** migrar validação para o servidor, PDO com prepared statements, CSRF, controle de sessão, autorização por workspace e auditoria.

## Público, posicionamento e funil
- **ICP primário:** pequenos negócios que investem até aproximadamente R$ 20 mil/mês e precisam entender se o investimento gera oportunidades.
- **ICP secundário:** gestores e microagências que precisam padronizar diagnóstico e prestação de contas.
- **Promessa:** “clareza para decidir o próximo real investido”.
- **Aquisição:** conteúdo educativo, diagnóstico gratuito, parcerias com contadores/consultores e mídia de pesquisa para dores de alta intenção.
- **Eventos a medir no futuro:** `view_dashboard`, `start_diagnosis`, `complete_diagnosis`, `create_campaign`, `create_lead`, `export_report` e `activate_integration`.

## Riscos e limites conhecidos
1. Os dados ainda são locais e fictícios; não há multiusuário nem sincronização.
2. A saúde da campanha é uma heurística de demonstração, não um diagnóstico de mídia conectado às plataformas.
3. Exportação atual é JSON e impressão do navegador; PDF e envio com marca branca ficam para a próxima fase.
4. Não há integrações de Google Ads, Meta Ads ou TikTok nesta versão.

## Próxima decisão de produto
Validar com 5–10 usuários se o fluxo “diagnóstico → recomendação → tarefa → resultado” é mais valioso que ampliar o número de integrações. Só iniciar integrações depois de validar quais eventos e campos são realmente usados.
