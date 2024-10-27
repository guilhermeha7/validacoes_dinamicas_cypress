class HomePage {

    clicarEmStartShopping() {
        cy.get('[data-testid="__CAROUSEL_ITEM_0_READY__"] > .r-1kihuf0 > .r-1jnx3et > .r-13w96dm > [data-testid="banner"]').click()
    }
}

export default new HomePage()