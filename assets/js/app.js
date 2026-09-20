const navButtons = document.querySelectorAll(".nav-button");
const pages = document.querySelectorAll(".page");
const currentPage = document.getElementById("currentPage");

const pageNames = {
    dashboard: "Visão geral",
    diagnosis: "Diagnósticos",
    campaigns: "Campanhas",
    leads: "Leads",
    reports: "Relatórios"
};

function showPage(pageId) {
    pages.forEach(page => {
    page.classList.toggle("active", page.id === pageId);
    });

    navButtons.forEach(button => {
    button.classList.toggle(
        "active",
        button.dataset.page === pageId
    );
    });

    currentPage.textContent = pageNames[pageId];
}

navButtons.forEach(button => {
    button.addEventListener("click", () => {
    showPage(button.dataset.page);
    });
});

document.querySelectorAll("[data-page-link]").forEach(button => {
    button.addEventListener("click", () => {
    showPage(button.dataset.pageLink);
    });
});

const diagnosisForm = document.getElementById("diagnosisForm");
const diagnosisResult = document.getElementById("diagnosisResult");
const diagnosisList = document.getElementById("diagnosisList");

diagnosisForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const channel = document.getElementById("channel").value;
    const objective = document.getElementById("objective").value;
    const status = document.getElementById("status").value;
    const landing = document.getElementById("landing").value;

    const recommendations = [];

    if (status === "Campanha não veicula") {
    recommendations.push("Verificar orçamento, método de pagamento e status de aprovação dos anúncios.");
    recommendations.push("Revisar segmentação geográfica, programação e estratégia de lance.");
    recommendations.push("Conferir se existem palavras-chave, públicos ou anúncios ativos.");
    }

    if (status === "Poucos cliques") {
    recommendations.push("Revisar títulos, descrições e chamadas para ação dos anúncios.");
    recommendations.push("Comparar o volume de buscas e a relevância das palavras-chave.");
    recommendations.push("Avaliar a segmentação e a compatibilidade entre anúncio e público.");
    }

    if (status === "Poucos leads" || status === "Sem conversões") {
    recommendations.push("Validar se os eventos de conversão estão configurados corretamente.");
    recommendations.push("Analisar a velocidade, clareza e proposta da página de destino.");
    recommendations.push("Testar diferentes formulários, ofertas e chamadas para ação.");
    }

    if (status === "Custo alto") {
    recommendations.push("Identificar campanhas, grupos ou públicos com maior custo.");
    recommendations.push("Redistribuir orçamento para os conjuntos com melhor desempenho.");
    recommendations.push("Testar novos criativos e segmentações.");
    }

    if (landing.trim() === "") {
    recommendations.push("Adicionar e validar uma página de destino específica para a campanha.");
    }

    recommendations.push(
    `Confirmar se o objetivo “${objective}” está alinhado com a otimização do ${channel}.`
    );

    diagnosisList.innerHTML = recommendations
    .map(item => `<li>${item}</li>`)
    .join("");

    diagnosisResult.classList.add("visible");
    diagnosisResult.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
    });
});
