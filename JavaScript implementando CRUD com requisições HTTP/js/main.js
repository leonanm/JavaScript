import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos();
    const botaoCancelar = document.getElementById("botao-cancelar");
    const formularioPensamento = document.getElementById("pensamento-form");
    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario);
    botaoCancelar.addEventListener("click", manipularCancelamento);
});

async function manipularSubmissaoFormulario(event) {
    event.preventDefault();
    const id = document.getElementById("pensamento-id").value;
    const conteudo = document.getElementById("pensamento-conteudo").value;
    const autoria = document.getElementById("pensamento-autoria").value;

    try {
        if (id) {
            await api.editarPensamento({ id, conteudo, autoria });
        } else {
            await api.salvarPensamento({ conteudo, autoria });
        }
        ui.renderizarPensamentos();
        ui.limparFormulario();
    } catch (error) {
        alert("Erro ao salvar pensamento: " + error.message); // Mostra a mensagem do erro
        ui.limparFormulario(); // Limpa o formulário mesmo se houver erro
    }
}

function manipularCancelamento() {
    ui.limparFormulario();
}
