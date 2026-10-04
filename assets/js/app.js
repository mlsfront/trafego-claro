(() => {
  'use strict';

  const BASE_URL = window.BASE_URL || './';
  const STORAGE_KEY = 'trafego-claro-mvp-v1';
  const pageNames = { dashboard: 'Visão geral', diagnosis: 'Diagnósticos', campaigns: 'Campanhas', leads: 'Leads', reports: 'Relatórios' };
  const seed = {
    campaigns: [
      { id: 1, name: 'Cursos de beleza', channel: 'Google Ads', objective: 'Geração de leads', investment: 2450, leads: 142, status: 'Ativa' },
      { id: 2, name: 'Lumo Internacional', channel: 'Meta Ads', objective: 'Reconhecimento e leads', investment: 3200, leads: 198, status: 'Ativa' },
      { id: 3, name: 'Venda de suplementos', channel: 'Meta Ads', objective: 'Conversões', investment: 900, leads: 51, status: 'Atenção' },
      { id: 4, name: 'Psicologia local', channel: 'Google Ads', objective: 'Geração de leads', investment: 1870, leads: 96, status: 'Revisar' }
    ],
    leads: [
      { id: 1, name: 'Mariana Costa', source: 'Google Ads', campaign: 'Cursos de beleza', status: 'Convertido', lastContact: 'Hoje' },
      { id: 2, name: 'Rafael Mendes', source: 'Meta Ads', campaign: 'Lumo Internacional', status: 'Em negociação', lastContact: 'Ontem' },
      { id: 3, name: 'Camila Souza', source: 'Google Ads', campaign: 'Psicologia local', status: 'Novo', lastContact: 'Há 2 dias' },
      { id: 4, name: 'João Oliveira', source: 'Meta Ads', campaign: 'Venda de suplementos', status: 'Contatado', lastContact: 'Há 3 dias' }
    ], diagnoses: []
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const money = value => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value || 0);
  const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
  const loadState = () => { try { return { ...seed, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') }; } catch { return structuredClone(seed); } };
  let state = loadState();
  const saveState = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

  function toast(message, type = 'success') {
    const element = $('#toast'); element.textContent = message; element.className = `toast visible ${type}`;
    window.setTimeout(() => { element.className = 'toast'; }, 2800);
  }

  function showPage(pageId) {
    if (!pageNames[pageId]) return;
    $$('.page').forEach(page => page.classList.toggle('active', page.id === pageId));
    $$('.nav-button').forEach(button => { const active = button.dataset.page === pageId; button.classList.toggle('active', active); button.setAttribute('aria-current', active ? 'page' : 'false'); });
    $('#currentPage').textContent = pageNames[pageId];
    window.history.replaceState(null, '', `#${pageId}`);
    if (pageId === 'reports') renderReport();
  }

  function renderStats() {
    const investment = state.campaigns.reduce((sum, campaign) => sum + Number(campaign.investment), 0);
    const leads = state.campaigns.reduce((sum, campaign) => sum + Number(campaign.leads), 0);
    const cpl = leads ? investment / leads : 0;
    const converted = state.leads.filter(lead => lead.status === 'Convertido').length;
    const conversion = state.leads.length ? (converted / state.leads.length) * 100 : 0;
    const stats = [['Investimento', money(investment), '↑ base atual'], ['Leads gerados', leads, '↑ dados demonstrativos'], ['Custo por lead', money(cpl), '↓ quanto menor, melhor'], ['Conversão', `${conversion.toFixed(1)}%`, 'Meta operacional: 10%']];
    $('#statsGrid').innerHTML = stats.map(([title, value, change], index) => `<article class="card stat-card"><div class="stat-top"><span class="stat-title">${title}</span><span class="stat-icon" aria-hidden="true">${['R$', '♧', '⌁', '↗'][index]}</span></div><div class="stat-value">${value}</div><div class="stat-change ${index === 3 ? 'neutral' : ''}">${change}</div></article>`).join('');
    const health = Math.max(0, Math.min(100, Math.round(state.campaigns.reduce((sum, c) => sum + ({ 'Ativa': 90, 'Atenção': 65, 'Revisar': 35 }[c.status] || 50), 0) / Math.max(state.campaigns.length, 1))));
    $('#healthValue').textContent = `${health}%`; $('#healthCircle').style.setProperty('--health', `${health}%`); $('#healthStatus').textContent = health >= 75 ? '● Bom desempenho geral' : '● Requer atenção';
  }

  function campaignMarkup(campaign) { const badgeClass = campaign.status === 'Ativa' ? 'success' : campaign.status === 'Atenção' ? 'warning' : 'danger'; return `<div class="campaign-row"><div><div class="campaign-name">${escapeHtml(campaign.name)}</div><div class="campaign-meta">${escapeHtml(campaign.channel)} · ${escapeHtml(campaign.objective)}</div></div><div>${money(campaign.investment)}</div><div>${campaign.leads} leads</div><span class="badge badge-${badgeClass}">${escapeHtml(campaign.status)}</span></div>`; }
  function renderCampaigns() {
    const channel = $('#campaignChannelFilter').value; const status = $('#campaignStatusFilter').value;
    const campaigns = state.campaigns.filter(c => (channel === 'all' || c.channel === channel) && (status === 'all' || c.status === status));
    $('#campaignList').innerHTML = campaigns.map(campaignMarkup).join(''); $('#campaignEmpty').classList.toggle('visible', !campaigns.length); $('#dashboardCampaigns').innerHTML = state.campaigns.slice(0, 3).map(campaignMarkup).join('');
  }

  function renderLeads() {
    const search = $('#leadSearch').value.toLowerCase().trim(); const status = $('#leadStatusFilter').value;
    const leads = state.leads.filter(lead => (!search || `${lead.name} ${lead.campaign}`.toLowerCase().includes(search)) && (status === 'all' || lead.status === status));
    const statusClass = leadStatus => leadStatus === 'Convertido' ? 'success' : leadStatus === 'Novo' ? 'danger' : 'warning';
    $('#leadTableBody').innerHTML = leads.map(lead => `<tr><td><strong>${escapeHtml(lead.name)}</strong></td><td>${escapeHtml(lead.source)}</td><td>${escapeHtml(lead.campaign)}</td><td><span class="badge badge-${statusClass(lead.status)}">${escapeHtml(lead.status)}</span></td><td>${escapeHtml(lead.lastContact)}</td></tr>`).join(''); $('#leadEmpty').classList.toggle('visible', !leads.length);
  }

  function renderChart() {
    const values = [40, 52, 45, 68, 58, 76, 85, 72, 91]; const revenue = [28, 37, 42, 49, 55, 63, 70, 78, 81];
    $('#performanceChart').innerHTML = values.map((value, index) => `<div class="bar-group" title="Período ${index + 1}"><span class="bar bar-purple" style="height:${value}%"></span><span class="bar bar-blue" style="height:${revenue[index]}%"></span></div>`).join('');
  }

  function renderAlerts() {
    const review = state.campaigns.filter(c => c.status !== 'Ativa'); const alerts = review.length ? review.map(c => ({ icon: c.status === 'Revisar' ? '!' : '•', title: `${c.name}: ${c.status.toLowerCase()}`, text: c.status === 'Revisar' ? 'Revise rastreamento, página de destino e conversões.' : 'Acompanhe custo por lead e redistribua orçamento se necessário.' })) : [{ icon: '✓', title: 'Tudo em dia', text: 'Nenhuma campanha exige ação imediata.' }];
    $('#alertCount').textContent = `${review.length} pendente${review.length === 1 ? '' : 's'}`; $('#alertsList').innerHTML = alerts.map(alert => `<div class="alert"><div class="alert-icon">${alert.icon}</div><div><strong>${escapeHtml(alert.title)}</strong><p>${escapeHtml(alert.text)}</p></div></div>`).join('');
  }

  function renderReport() {
    const investment = state.campaigns.reduce((sum, c) => sum + Number(c.investment), 0); const leads = state.campaigns.reduce((sum, c) => sum + Number(c.leads), 0); const cpl = leads ? investment / leads : 0;
    $('#reportPeriod').textContent = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric' }).format(new Date());
    $('#reportSummary').innerHTML = `<p>As campanhas registradas geraram <strong>${leads} leads</strong> com investimento total de <strong>${money(investment)}</strong>.</p><p>O custo médio por lead foi de <strong>${money(cpl)}</strong>. Use o pipeline para conectar aquisição ao resultado comercial e priorizar os canais com melhor qualidade.</p>`;
    $('#reportRecommendations').innerHTML = ['Validar eventos de conversão e UTMs antes de redistribuir orçamento.', 'Revisar a página de destino da campanha com status “Revisar”.', 'Acompanhar leads novos em até 24 horas e registrar o próximo contato.', 'Testar uma hipótese por vez em criativos e segmentações.'].map(item => `<li>${item}</li>`).join('');
  }

  function recommendations(form) {
    const channel = form.channel.value; const objective = form.objective.value; const status = form.status.value; const items = {
      'Campanha não veicula': ['Verificar orçamento, método de pagamento e aprovação dos anúncios.', 'Revisar segmentação geográfica, programação e estratégia de lance.', 'Conferir se existem palavras-chave, públicos e anúncios ativos.'],
      'Poucos cliques': ['Revisar títulos, descrições e chamadas para ação dos anúncios.', 'Comparar volume de buscas e relevância das palavras-chave.', 'Avaliar a compatibilidade entre anúncio, público e intenção.'],
      'Poucos leads': ['Validar eventos de conversão e UTMs no site.', 'Analisar velocidade, clareza e proposta da página de destino.', 'Testar uma oferta, formulário ou chamada para ação por vez.'],
      'Sem conversões': ['Conferir se a conversão está disparando no momento correto.', 'Comparar cliques com sessões e analisar quedas no funil.', 'Revisar a qualidade do lead antes de aumentar investimento.'],
      'Custo alto': ['Identificar campanhas, grupos ou públicos com maior custo.', 'Redistribuir orçamento para conjuntos com melhor qualidade de lead.', 'Testar novos criativos e segmentações com hipótese registrada.']
    }[status] || [];
    if (!form.landing.value.trim()) items.push('Adicionar e validar uma página de destino específica para a campanha.');
    items.push(`Confirmar se o objetivo “${objective}” está alinhado à otimização do ${channel}.`); return items;
  }

  let lastDiagnosis = null;
  function bindDiagnosis() {
    $('#notes').addEventListener('input', event => { $('[data-count-for="notes"]').textContent = `${event.target.value.length}/500`; });
    $('#diagnosisForm').addEventListener('submit', event => { event.preventDefault(); const form = event.currentTarget; const business = form.business.value.trim(); if (!business) { $('[data-error-for="business"]').textContent = 'Informe o nome do negócio.'; form.business.focus(); return; } $('[data-error-for="business"]').textContent = ''; const landing = form.landing.value.trim(); if (landing && !/^https?:\/\//i.test(landing)) { $('[data-error-for="landing"]').textContent = 'Use uma URL iniciando com http:// ou https://.'; form.landing.focus(); return; } $('[data-error-for="landing"]').textContent = ''; lastDiagnosis = { business, channel: form.channel.value, objective: form.objective.value, status: form.status.value, createdAt: new Date().toISOString(), items: recommendations(form) }; $('#diagnosisList').innerHTML = lastDiagnosis.items.map(item => `<li>${escapeHtml(item)}</li>`).join(''); $('#diagnosisResult').classList.add('visible'); toast('Diagnóstico gerado com sucesso.'); });
    $('#saveDiagnosis').addEventListener('click', () => { if (!lastDiagnosis) return; state.diagnoses.push(lastDiagnosis); saveState(); toast('Diagnóstico salvo no histórico local.'); });
  }

  function openQuickAdd(type) {
    const dialog = $('#quickAddDialog'); const fields = type === 'campaign' ? `<div class="form-grid"><div class="field full"><label for="quickName">Nome da campanha *</label><input id="quickName" required maxlength="80"></div><div class="field"><label for="quickChannel">Canal</label><select id="quickChannel"><option>Google Ads</option><option>Meta Ads</option><option>TikTok Ads</option></select></div><div class="field"><label for="quickInvestment">Investimento (R$)</label><input id="quickInvestment" type="number" min="0" step="0.01" required></div></div>` : `<div class="form-grid"><div class="field full"><label for="quickName">Nome do lead *</label><input id="quickName" required maxlength="80"></div><div class="field"><label for="quickSource">Origem</label><select id="quickSource"><option>Google Ads</option><option>Meta Ads</option><option>TikTok Ads</option></select></div><div class="field"><label for="quickCampaign">Campanha</label><select id="quickCampaign">${state.campaigns.map(c => `<option>${escapeHtml(c.name)}</option>`).join('')}</select></div></div>`;
    $('#modalTitle').textContent = type === 'campaign' ? 'Nova campanha' : 'Novo lead'; $('#modalFields').innerHTML = fields; dialog.dataset.type = type; dialog.showModal();
  }
  function bindQuickAdd() { $('#newCampaignButton').addEventListener('click', () => openQuickAdd('campaign')); $('#newLeadButton').addEventListener('click', () => openQuickAdd('lead')); $('#quickAddForm').addEventListener('submit', event => { event.preventDefault(); const type = event.currentTarget.closest('dialog').dataset.type; const name = $('#quickName').value.trim(); if (!name) return; if (type === 'campaign') state.campaigns.push({ id: Date.now(), name, channel: $('#quickChannel').value, objective: 'Geração de leads', investment: Number($('#quickInvestment').value || 0), leads: 0, status: 'Ativa' }); else state.leads.push({ id: Date.now(), name, source: $('#quickSource').value, campaign: $('#quickCampaign').value, status: 'Novo', lastContact: 'Agora' }); saveState(); renderAll(); event.currentTarget.closest('dialog').close(); toast(`${type === 'campaign' ? 'Campanha' : 'Lead'} adicionado(a).`); }); }

  function exportData() { const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' }); const url = URL.createObjectURL(blob); const link = document.createElement('a'); link.href = url; link.download = 'trafego-claro-dados.json'; link.click(); URL.revokeObjectURL(url); toast('Dados exportados em JSON.'); }
  function renderAll() { renderStats(); renderCampaigns(); renderLeads(); renderChart(); renderAlerts(); renderReport(); }

  document.addEventListener('DOMContentLoaded', () => {
    $$('.nav-button').forEach(button => button.addEventListener('click', () => showPage(button.dataset.page)));
    $$('[data-page-link]').forEach(button => button.addEventListener('click', event => { event.preventDefault(); showPage(button.dataset.pageLink); }));
    $('#campaignChannelFilter').addEventListener('change', renderCampaigns); $('#campaignStatusFilter').addEventListener('change', renderCampaigns); $('#leadSearch').addEventListener('input', renderLeads); $('#leadStatusFilter').addEventListener('change', renderLeads); $('#exportDashboard').addEventListener('click', exportData); $('#printReport').addEventListener('click', () => window.print()); $('#notificationButton').addEventListener('click', () => { showPage('dashboard'); $('#alertsList').scrollIntoView({ behavior: 'smooth' }); });
    bindDiagnosis(); bindQuickAdd(); renderAll(); const initial = window.location.hash.slice(1); if (pageNames[initial]) showPage(initial);
  });
})();
