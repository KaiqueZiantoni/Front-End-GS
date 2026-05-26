document.addEventListener("DOMContentLoaded", () => {
    

    const botaoMenuMobile = document.getElementById("botao-menu-mobile");
    const menuNavegacao = document.getElementById("menu-navegacao");

    if (botaoMenuMobile && menuNavegacao) {
        botaoMenuMobile.addEventListener("click", () => {
            menuNavegacao.classList.toggle("ativo");
        });
    }

    const linksNavegacao = document.querySelectorAll(".menu-navegacao ul li a");
    linksNavegacao.forEach(link => {
        link.addEventListener("click", () => {
            if (menuNavegacao.classList.contains("ativo")) {
                menuNavegacao.classList.remove("ativo");
            }
        });
    });


    const setaDescer = document.querySelector('.seta-descer');
    
    if (setaDescer) {
        setaDescer.addEventListener('click', function(evento) {
            evento.preventDefault();
            
            const idDestino = this.getAttribute('href');
            const secaoDestino = document.querySelector(idDestino);

            if (secaoDestino) {
                secaoDestino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }


    const simResultCard = document.getElementById("sim-result");
    
    if (simResultCard) {
        const simulationData = {
            dengue: {
                title: "Alerta de Risco: Dengue & Zika",
                source: "Satélite: Sentinel-3 (ESA)",
                metric: "Temp +3.2°C | Umidade Alagada",
                window: "Surto estimado em 15 dias",
                action: "Aviso de alta demanda encaminhado ao cliente. Recomendação: Iniciar plano de remanejamento de Sais de Reidratação Oral e Analgésicos para as UBS mapeadas no relatório."
            },
            colera: {
                title: "Alerta de Risco: Cólera & Leptospirose",
                source: "Satélite: GPM (NASA) - Precipitation",
                metric: "Precipitação Extrema > 180mm",
                window: "Alagamento Crítico detectado",
                action: "Alerta Crítico emitido ao Ministério da Saúde. Dossiê meteorológico anexado sugerindo a liberação imediata da reserva de contingência de Antibióticos."
            },
            respiratorio: {
                title: "Alerta de Risco: Crises Respiratórias",
                source: "Satélite: Terra/Aqua (NASA) - MODIS",
                metric: "Material Particulado PM2.5 Elevado",
                window: "Umidade < 15% + Fumaça ativa",
                action: "Relatório de anomalia disponibilizado no painel do distribuidor privado. Sugestão: Antecipar envios de Broncodilatadores para a região afetada."
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


    const botoesFaq = document.querySelectorAll('.botao-faq');

    if (botoesFaq.length > 0) {
        botoesFaq.forEach(botao => {
            botao.addEventListener('click', function() {
                const itemAtual = this.parentElement;
                
                const respostaAtual = itemAtual.querySelector('.resposta-faq');
                
                itemAtual.classList.toggle('ativo');

                if (itemAtual.classList.contains('ativo')) {
                    respostaAtual.style.maxHeight = respostaAtual.scrollHeight + "px";
                } else {
                    respostaAtual.style.maxHeight = "0";
                }

                botoesFaq.forEach(outroBotao => {
                    const outroItem = outroBotao.parentElement;
                    if (outroItem !== itemAtual && outroItem.classList.contains('ativo')) {
                        outroItem.classList.remove('ativo');
                        outroItem.querySelector('.resposta-faq').style.maxHeight = "0";
                    }
                });
            });
        });
    }

});