/// <reference types="Cypress" />


describe("Test suite Register",() => {

    //hook
    beforeEach(() => {
        cy.visit('https://www.cinemarkhoyts.com.ar/');
        cy.get('#id_img_user').click();
        cy.get('.ch-login-reg > div > .ch-login-btn').click();
    });

    it("Test Registrarse sin email", () => {
        cy.get('#ctl01_txtInput').type("User");
        cy.get('#ctl02_txtInput').type("Test");
        cy.get('#ctl04_txtInput').type("clavetest2090");
        cy.get('#ctl04_txtInputSecondEntered').type("clavetest2090");
        cy.get('#ctl05_txtInput').click();
        cy.get('#ctl05_txtInput').type("2001-12-20");
        cy.get('#ctl06_panel > .SumoSelect > .CaptionCont').click();
        cy.get('#ctl06_panel > .SumoSelect > .optWrapper > .options > :nth-child(2) > label').click();
        cy.wait(3000)
        cy.get('#ctl07_txtInput').clear().type("1141552352");
        cy.get('#ctl08_panel > .SumoSelect > .CaptionCont > span').click();
        cy.get('#ctl08_panel > .SumoSelect > .optWrapper > .options > :nth-child(2) > label').click();
        cy.get('#btnRegistrarse').click();
    })

    it("Test Registrarse sin contraseña", () => {
        cy.get('#ctl01_txtInput').type("User");
        cy.get('#ctl02_txtInput').type("Test");
        cy.get('#ctl03_txtInput').type("testprueba2090@gmail.com")
        cy.get('#ctl05_txtInput').type("2001-12-20");
        cy.get('#ctl06_panel > .SumoSelect > .CaptionCont').click();
        cy.get('#ctl06_panel > .SumoSelect > .optWrapper > .options > :nth-child(2) > label').click();
        cy.wait(3000)
        cy.get('#ctl07_txtInput').clear().type("1141552352");
        cy.get('#ctl08_panel > .SumoSelect > .CaptionCont > span').click();
        cy.get('#ctl08_panel > .SumoSelect > .optWrapper > .options > :nth-child(2) > label').click();
        cy.get('#btnRegistrarse').click();
    })


    it("Test registrarse sin numero de celular", () => {
        cy.get('#ctl01_txtInput').type("User");
        cy.get('#ctl02_txtInput').type("Test");
        cy.get('#ctl03_txtInput').type("testprueba2090@gmail.com")
        cy.get('#ctl04_txtInput').type("clavetest2090");
        cy.get('#ctl04_txtInputSecondEntered').type("clavetest2090");
        cy.get('#ctl05_txtInput').click();
        cy.get('#ctl05_txtInput').type("2001-12-20");
        cy.get('#ctl06_panel > .SumoSelect > .CaptionCont').click();
        cy.wait(3000)
        cy.get('#ctl06_panel > .SumoSelect > .optWrapper > .options > :nth-child(2) > label').click();
        cy.wait(3000)
        cy.get('#ctl08_panel > .SumoSelect > .CaptionCont > span').click();
        cy.wait(3000)
        cy.get('#ctl08_panel > .SumoSelect > .optWrapper > .options > :nth-child(2) > label').click();
        cy.get('#btnRegistrarse').click();
    })


    it("Test RegistroExitoso", () => {
        cy.get('#ctl01_txtInput').type("User");
        cy.get('#ctl02_txtInput').type("Test");
        cy.get('#ctl03_txtInput').type("testprueba2090@gmail.com")
        cy.get('#ctl04_txtInput').type("clavetest2090");
        cy.get('#ctl04_txtInputSecondEntered').type("clavetest2090");
        cy.get('#ctl05_txtInput').click();
        cy.get('#ctl05_txtInput').type("2001-12-20");
        cy.get('#ctl06_panel > .SumoSelect > .CaptionCont').click();
        cy.get('#ctl06_panel > .SumoSelect > .optWrapper > .options > :nth-child(2) > label').click();
        cy.wait(3000)
        cy.get('#ctl07_txtInput').type("1141552352");
        cy.get('#ctl08_panel > .SumoSelect > .CaptionCont > span').click();
        cy.get('#ctl08_panel > .SumoSelect > .optWrapper > .options > :nth-child(2) > label').click();
        cy.get('#btnRegistrarse').click();
    })    
})