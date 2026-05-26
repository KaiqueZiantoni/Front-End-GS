// Aguarda o DOM carregar completamente antes de rodar o JS
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. LÓGICA DO MENU MOBILE (CORRIGIDA PARA PT-BR)
    // ==========================================
    const botaoMenuMobile = document.getElementById("botao-menu-mobile");
    const menuNavegacao = document.getElementById("menu-navegacao");

    if(botaoMenuMobile && menuNavegacao) {
        botaoMenuMobile.addEventListener("click", () => {
            menuNavegacao.classList.toggle("ativo");
        });
    }

    // Fecha o menu mobile se um link for clicado (melhoria de UX)
    const linksNavegacao = document.querySelectorAll(".menu-navegacao ul li a");
    linksNavegacao.forEach(link => {
        link.addEventListener("click", () => {
            if(menuNavegacao.classList.contains("ativo")) {
                menuNavegacao.classList.remove("ativo");
            }
        });
    });

    // ==========================================
    // 2. LÓGICA DA SETA DE ROLAGEM
    // ==========================================
    const setaDescer = document.querySelector('.seta-descer');
    
    if (setaDescer) {
        setaDescer.addEventListener('click', function(evento) {
            // Previne o pulo seco do link padrão
            evento.preventDefault();
            
            // Pega o destino pelo href da seta
            const idDestino = this.getAttribute('href');
            const secaoDestino = document.querySelector(idDestino);

            if (secaoDestino) {
                // Rola até a seção suavemente
                secaoDestino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
});

    const simResultCard = document.getElementById("sim-result");
    
    if (simResultCard) {
        const simulationData = {
            dengue: {
                title: "Alerta de Risco: Dengue & Zika",
                source: "Satélite: Sentinel-3 (ESA)",
                metric: "Temp +3.2°C | Umidade Alagada",
                window: "Surto estimado em 15 dias",
                action: "Remanejando 4.500 caixas de Paracetamol, Dipirona e Sais de Reidratação Oral do CD Central para as UBS mapeadas."
            },
            colera: {
                title: "Alerta de Risco: Cólera & Leptospirose",
                source: "Satélite: GPM (NASA) - Precipitation",
                metric: "Precipitação Extrema > 180mm",
                window: "Alagamento Crítico detectado",
                action: "Liberando lotes preventivos de Antibióticos e Sais de Reidratação Oral diretamente para os hubs municipais."
            },
            respiratorio: {
                title: "Alerta de Risco: Crises Respiratórias",
                source: "Satélite: Terra/Aqua (NASA) - MODIS",
                metric: "Material Particulado PM2.5 Elevado",
                window: "Umidade < 15% + Fumaça ativa",
                action: "Disparando remessa emergencial antecipada de Broncodilatadores e Corticoides Inalatórios."
            }
        };

        const simButtons = document.querySelectorAll(".sim-btn");
        const displayTitle = document.getElementById("display-title");
        const displaySource = document.querySelector(".satellite-source");
        const displayMetric = document.getElementById("display-metric");
        const displayWindow = document.getElementById("display-window");
        const displayAction = document.getElementById("display-action");

        simButtons.forEach(button => {
            button.addEventListener("click", () => {
                simButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                const targetKey = button.getAttribute("data-target");
                const data = simulationData[targetKey];

                simResultCard.style.opacity = "0.3";
                simResultCard.style.transform = "scale(0.99)";
                
                setTimeout(() => {
                    displayTitle.textContent = data.title;
                    displaySource.textContent = data.source;
                    displayMetric.textContent = data.metric;
                    displayWindow.textContent = data.window;
                    displayAction.textContent = data.action;
                    
                    simResultCard.style.opacity = "1";
                    simResultCard.style.transform = "none";
                }, 150);
            });
        });
    }
