import HomePage from '../pages/home.page'
import ProdutosPage from '../pages/produtos.page'
import categories from '../fixtures/categorias.json'

describe('Funcionalidade: Categorias', () => {
  
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion','v2', {domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/')
  });

  categories.categories.forEach(category => {
    it(`Deve validar a categoria ${category.name}`, () => {
      HomePage.clicarEmStartShopping()
      ProdutosPage.clicarEmCategory()
      ProdutosPage.secaoCategoria.should('contain.text',category.name)
    })
  })

  it('Cada produto da lista deve ter um preço definido', () => {
    HomePage.clicarEmStartShopping()
    ProdutosPage.listaProdutos.should('have.length.greaterThan', 0) //Deve haver pelo menos um produto na lista de produtos
    ProdutosPage.listaProdutos.each(produto => { //Cada produto da lista
      //cy.wrap(produto).should('contain.text','R$')
      expect(produto).contain('R$')
    })
  });

})

