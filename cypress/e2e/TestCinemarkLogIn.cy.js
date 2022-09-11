/// <reference types="Cypress" />


describe("Test suite Login",() => {

    //hook
    beforeEach(() => {
        cy.visit('https://www.cinemarkhoyts.com.ar/');
        cy.get('#id_img_user').click();
    });
    

    it("Ingresar sin ingresar datos", () => {
        cy.get('#ContentPlaceHolderBody_btnLogin').click();
    })

    it("Ingresar sin contraseña", () => {
        cy.get('#ContentPlaceHolderBody_txtEmailAddress').type("testprueba2090@gmail.com");
        cy.get('#ContentPlaceHolderBody_btnLogin').click();
    })

    it("Ingresar con mail y contraseña sin registrar", () => {
        cy.get('#ContentPlaceHolderBody_txtEmailAddress').type("testprueba2090@gmail.com");
        cy.get('#ContentPlaceHolderBody_txtPassword').type("Clavetest2090!");
        cy.get('#ContentPlaceHolderBody_btnLogin').click();
    })
})


