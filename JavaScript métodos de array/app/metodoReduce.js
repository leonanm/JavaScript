function calcularValorTotalDeLivrosDisponiveis(livrosFiltrados) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
    
}