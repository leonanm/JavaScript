const URL_BASE = "http://localhost:3000";
const api = {

    async buscarPensamentos() {
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos`);
            return response.data; // Não é necessário usar await aqui, pois response.data já é o resultado
        } catch (error) {
            alert("Erro ao buscar Pensamentos");
            throw error; // Certifique-se de capturar o erro
        }
    },

    async salvarPensamento(pensamento) {
        try {
            const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response.data; // Retorna o resultado diretamente
        } catch (error) {
            alert("Erro ao Salvar Pensamento");
            throw error; // Certifique-se de capturar o erro
        }
    },

    async buscarPensamentoPorId(id) {
        try {
            const response = await axios.get(`${URL_BASE}/pensamentos/${id}`);
            return response.data; // Retorna o resultado diretamente
        } catch (error) {
            alert("Erro ao buscar Pensamento");
            throw error; // Certifique-se de capturar o erro
        }
    },

    async excluirPensamento(id) {
        try {
            await axios.delete(`${URL_BASE}/pensamentos/${id}`);
            // Não é necessário retornar nada se você não precisa do resultado
        } catch (error) {
            alert("Erro ao excluir Pensamento");
            throw error; // Certifique-se de capturar o erro
        }
    },

    async editarPensamento(pensamento) {
        try {
            const response = await axios.put(`${URL_BASE}/pensamentos/${pensamento.id}`, pensamento, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            return response.data; // Retorna o resultado diretamente
        } catch (error) {
            alert("Erro ao editar Pensamento");
            throw error; // Certifique-se de capturar o erro
        }
    },
}

export default api;
