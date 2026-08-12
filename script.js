// Alternar entre modo claro e escuro
function alternarTema() {
    document.body.classList.toggle("dark");
}


// Controle do tamanho da fonte
let tamanhoFonte = 17;

function aumentarFonte() {
    tamanhoFonte += 1;

    document.querySelector(".texto").style.fontSize =
        tamanhoFonte + "px";
}

function diminuirFonte() {

    if (tamanhoFonte > 13) {
        tamanhoFonte -= 1;

        document.querySelector(".texto").style.fontSize =
            tamanhoFonte + "px";
    }
}


// Botão de compartilhar
function compartilhar() {

    if (navigator.share) {

        navigator.share({
            title: "Tecnologia e sustentabilidade na educação",
            text: "Confira esta notícia sobre tecnologia, educação e sustentabilidade."
        });

    } else {

        const mensagem = document.getElementById("mensagem");

        mensagem.style.display = "block";

        setTimeout(function() {
            mensagem.style.display = "none";
        }, 3000);
    }
}
