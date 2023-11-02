describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://front-cras.app.fslab.dev/')
    cy.get("#email").type("dev@gmail.com")
    cy.get("#senha").type("123")
    cy.get(".styles_button__dr0t2").click();
    })

    it("Deve realizar realizar cadastro de um usuário com status ativo - cenário de sucesso", () =>{
        cy.get(".styles_buttonMenu__mmyUS > img").click();
        cy.visit("https://front-cras.app.fslab.dev/usuarios/listar")
        cy.get(":nth-child(5) > .styles_button__dr0t2").click()
        cy.get("#nomeCadastrar").type("Fabi");
        cy.get("#emailCadastrar").type("Fabi@gmail.com");
        cy.get("#senhaCadastrar").type("Fabi1357@");
        cy.get('#unidadeCadastrar').select('CRAS - Vilhena')
        cy.get('#grupoCadastrar').select('Administrador')
        cy.get('[type="submit"]').click();
        cy.get('.Toastify__toast-body').contains('Usuário cadastrado com sucesso');
    })

    it("Deve retornar as mensagem de validação ao cadastrar usuário  - cenário de insucesso" , () => {
      cy.get(".styles_buttonMenu__mmyUS > img").click();
      cy.visit("https://front-cras.app.fslab.dev/usuarios/listar")
      cy.get(":nth-child(5) > .styles_button__dr0t2").click()
      cy.get("#nomeCadastrar").type("Fabi");
      cy.get("#emailCadastrar").type("Fabi@gmail.com");
      cy.get("#senhaCadastrar").type("Fabi1357@");
      cy.get('#unidadeCadastrar').select('CRAS - Vilhena')
      cy.get('#grupoCadastrar').select('Administrador')
      cy.get('[type="submit"]').click();
       
    })

    // it("Deve retornar uma consulta do usurário cadastrado com status ativo - cenário de sucesso", () => {
    //     cy.get(".styles_buttonMenu__mmyUS > img").click();
    //     cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");
    //     cy.get(":nth-child(4) > .styles_button__dr0t2").click();
    //     cy.get("tbody > :nth-child(1) > :nth-child(4)").contains("Sim");
    // })

    // it("Deve retornar uma consulta do usurário cadastrado com status inativo - cenário de sucesso", () => {
    //     cy.get(".styles_buttonMenu__mmyUS > img").click()
    //     cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");
    //     cy.get("span.styles_slider_0TNp").click();
    //     cy.get(":nth-child(4) > .styles_button__dr0t2").click();
    //     cy.get("#nome").type("TesteCrasAminah");
    //     cy.get(":nth-child(4) > .styles_button__dr0t2").click();
    //     cy.get("tbody > :nth-child(1) > :nth-child(4)").contains("Não");

    // })

    // it("Deve atualizar os dados de um usuário - cenário de sucesso" , () => {
    //     cy.get(".styles_buttonMenu__mmyUS > img").click();
    //     cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");
    //     cy.get("#nome").type("TesteCrasAminah");
    //     cy.get(":nth-child(4) > .styles_button__dr0t2").click();
    //     cy.wait(1000)
       

    // })

    // it("Deve visualizar as informações de um usuário - cenário de sucesso", () => {
    //     cy.get(".styles_buttonMenu__mmyUS > img").click();
    //     cy.visit("https://front-cras.app.fslab.dev/usuarios/listar");
    //     cy.get("#nome").type("TesteCrasAminah");
    //     cy.get(":nth-child(4) > .styles_button__dr0t2").click();
    //     cy.wait(1000)
    //     cy.get('[alt="Informação do usuário"]').click();
    //     cy.get(':nth-child(2) > .styles_formItem_H8I19 > .styles_containerNSLBw > .styles_text_68fzG').contains('Padrão');

    // })


})