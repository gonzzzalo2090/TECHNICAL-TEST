/// <reference types="Cypress" />


describe("Test suite Login",() => {

    //hook
    beforeEach(() => {
        cy.visit('https://www.cinemarkhoyts.com.ar/');
        cy.get('#id_img_user').click();
        
    });
    

    it("Modificar usuario - Agregar datos de localizacion", () => {
        cy.get('#ContentPlaceHolderBody_txtEmailAddress').type("testprueba2090@gmail.com");
        cy.get('#ContentPlaceHolderBody_txtPassword').type("clavetest2090");
        cy.get('#ContentPlaceHolderBody_btnLogin').click();
        cy.get('.nav-user').click();
        cy.get('.nav-menu-user-account').click();
        cy.get('#txtAddress').type("Street 128")
        cy.get(':nth-child(6) > .row > .col-sm-8 > .form-input-box > .SumoSelect > .CaptionCont > span').click();
        cy.wait(3000);
        cy.get(':nth-child(6) > .row > .col-sm-8 > .form-input-box > .SumoSelect > .optWrapper > .options > :nth-child(2) > label').click();
        cy.wait(3000);
        cy.get(':nth-child(7) > .row > .col-sm-8 > .form-input-box > .SumoSelect > .CaptionCont > span').click();
        cy.wait(3000);
        cy.get(':nth-child(7) > .row > .col-sm-8 > .form-input-box > .SumoSelect > .optWrapper > .options > :nth-child(2) > label').click();
        cy.get('#txtPostalCode').type("1041");
        cy.get('#btnSave').click();
        cy.wait(3000);
        cy.get('.modal-content > .info-btn').click();
    })

    it("Modificar usuario - Cambiar contraseña sin poner la actual", () => {
        cy.get('#ContentPlaceHolderBody_txtEmailAddress').type("testprueba2090@gmail.com");
        cy.get('#ContentPlaceHolderBody_txtPassword').type("clavetest2090");
        cy.get('#ContentPlaceHolderBody_btnLogin').click();
        cy.get('.nav-user').click();
        cy.get('.nav-menu-user-account').click();
        cy.get('.profile-actions-content > :nth-child(1) > a').click();
        cy.get('#ctl02_txtInput').type("NuevaClave");
        cy.get('#ctl02_txtInputSecondEntered').type("NuevaClave");
        cy.get('#btnChangePassword').click();
    })


    it("Modificar usuario - Cambiar contraseña sin mayusculas ni numeros ni simbolos", () => {
        cy.get('#ContentPlaceHolderBody_txtEmailAddress').type("testprueba2090@gmail.com");
        cy.get('#ContentPlaceHolderBody_txtPassword').type("clavetest2090");
        cy.get('#ContentPlaceHolderBody_btnLogin').click();
        cy.get('.nav-user').click();
        cy.get('.nav-menu-user-account').click();
        cy.get('.profile-actions-content > :nth-child(1) > a').click();
        cy.get('#ctl01_txtInput').type("clavetest2090")
        cy.get('#ctl02_txtInput').type("nuevaclave");
        cy.get('#ctl02_txtInputSecondEntered').type("nuevaclave");
        cy.get('#btnChangePassword').click();
    })

    it("Modificar usuario - Cambiar contraseña por otra valida", () => {
        cy.get('#ContentPlaceHolderBody_txtEmailAddress').type("testprueba2090@gmail.com");
        cy.get('#ContentPlaceHolderBody_txtPassword').type("clavetest2090");
        cy.get('#ContentPlaceHolderBody_btnLogin').click();
        cy.get('.nav-user').click();
        cy.get('.nav-menu-user-account').click();
        cy.get('.profile-actions-content > :nth-child(1) > a').click();
        cy.get('#ctl01_txtInput').type("clavetest2090")
        cy.get('#ctl02_txtInput').type("NuevaClave2090!");
        cy.get('#ctl02_txtInputSecondEntered').type("NuevaClave2090!");
        cy.get('#btnChangePassword').click();
    })
    
    it("Modificar usuario - Cambiar email sin ingresar contraseña", () => {
        cy.get('#ContentPlaceHolderBody_txtEmailAddress').type("testprueba2090@gmail.com");
        cy.get('#ContentPlaceHolderBody_txtPassword').type("clavetest2090");
        cy.get('#ContentPlaceHolderBody_btnLogin').click();
        cy.get('.nav-user').click();
        cy.get('.nav-menu-user-account').click();
        cy.get('.profile-actions-content > :nth-child(2) > a').click();
        cy.get('#ctl03_txtInput').type("testprueba3090@gmail.com")
        cy.get('#btnChangeMail').click();
    })

    it("Modificar usuario - Cambiar email ingresando clave actual", () => {
        cy.get('#ContentPlaceHolderBody_txtEmailAddress').type("testprueba2090@gmail.com");
        cy.get('#ContentPlaceHolderBody_txtPassword').type("clavetest2090");
        cy.get('#ContentPlaceHolderBody_btnLogin').click();
        cy.get('.nav-user').click();
        cy.get('.nav-menu-user-account').click();
        cy.get('.profile-actions-content > :nth-child(2) > a').click();
        cy.get('#ctl02_txtInput').type("NuevaClave2090!");
        cy.get('#ctl03_txtInput').type("testprueba3090@gmail.com")
        cy.get('#btnChangeMail').click();
    })
})
