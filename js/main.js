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
        setaDescer.addEventListener('click', function (evento) {
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
                title: "Alerta de Demanda: Corticoides e Respiratórios",
                source: "API Climática: OpenWeatherMap",
                metric: "Onda de Calor Súbita | Microrregião Alvo",
                window: "Pico de demanda estimado em 13 a 15 dias",
                action: "Transferência autônoma via classificação ATC (Princípio Ativo) do CD Central para as farmácias da região afetada, evitando a ruptura de gôndola."
            },
            colera: {
                title: "Alerta de Demanda: Antibióticos e Antitérmicos",
                source: "API Climática: HG Weather / INPE",
                metric: "Precipitação Extrema | Risco de Enchentes",
                window: "Pico de demanda estimado em 13 a 15 dias",
                action: "Gatilho de ERP ativado: Preparação de remessa preditiva focada em antibióticos para redes de farmácias na zona de risco."
            },
            respiratorio: {
                title: "Alerta de Demanda: Soros de Reidratação Oral",
                source: "API Climática: ClimAPI (Embrapa)",
                metric: "Oscilação Térmica Brusca | +300% de procura",
                window: "Pico de demanda estimado em 10 a 15 dias",
                action: "Ajuste de Supply Chain: Prevenção de ruptura de gôndola ativada com envio preditivo de SRO para as lojas locais."
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
            botao.addEventListener('click', function () {
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