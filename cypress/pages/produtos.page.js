class ProdutosPage {

    clicarEmCategory() {
        cy.get('[data-testid="Category"]').click()
    }

    get secaoCategoria() {
        return cy.get('.r-13hkvm')
    }

    get listaProdutos() { 
        return cy.get('[data-testid="browse-product-list"] [data-testid="productDetails"]')
    }
}

export default new ProdutosPage()