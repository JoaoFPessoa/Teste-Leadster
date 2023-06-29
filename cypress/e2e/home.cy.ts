/// <reference types="cypress" />

describe("Home page", () => {
  it("should render the right header elements", () => {
    cy.visit("/");
    // find header loqgo
    cy.get('[alt="leadster-logo"]').should("exist");

    //find banner texts
    cy.findByText("Webinars exclusivos").should("exist");
    cy.findByText("Menos conversinha,").should("exist");
    cy.findByText(/Conheça as estratégias que /i).should("exist");
    cy.findByText("mudaram o jogo").should("exist");
    cy.findByText(/ e como aplicá-las/i).should("exist");

    cy.get("select").select("Data de lançamento").should("exist");
  });
  it("should find every button on menu", () => {
    cy.visit("/");
    // menu section
    cy.findByRole("button", { name: /todas/i }).should("exist");
    cy.findByRole("button", { name: /agências/i }).should("exist");
    cy.findByRole("button", { name: /chatbot/i }).should("exist");
    cy.findByRole("button", { name: /marketing digital/i }).should("exist");
    cy.findByRole("button", { name: /geração de leads/i }).should("exist");
    cy.findByRole("button", { name: /mídia paga/i }).should("exist");
  });
  it("should exist every button in filter", () => {
    cy.visit("/");
    // menu section
    cy.findByRole("button", { name: /todas/i }).should("exist");
    cy.findByRole("button", { name: /agências/i }).should("exist");
    cy.findByRole("button", { name: /chatbot/i }).should("exist");
    cy.findByRole("button", { name: /marketing digital/i }).should("exist");
    cy.findByRole("button", { name: /geração de leads/i }).should("exist");
    cy.findByRole("button", { name: /mídia paga/i }).should("exist");
  });
  it("should have the right number of articles and they should render right elements", () => {
    cy.visit("/");
    // right number of videos
    cy.get("article").should("have.length", 9);
    //rendeqr right elements
    cy.get("article")
      .first()
      .within(() => {
        cy.get("button").should("exist");
        cy.get("img").should("exist");
        cy.get(".thumbnailContent").should("exist");
        cy.get("h4").should("exist");
      });
  });
  it("should render right elements on Comparative Banner component", () => {
    cy.visit("/");
    cy.get("._home_shape").should("exist");
    cy.get('[alt="comparativo"]').should("exist");
    cy.findByText(/Geração de Leads\?$/i).should("exist");
    cy.findByText(/4 minutos\.$/i).should("exist");

    cy.findByRole("button", { name: /VER DEMONSTRAÇÃO/i }).should("exist");
    cy.get('[alt="selo-rd"]').should("exist");
    cy.get('[alt="noCard"]').should("exist");
    cy.get('[alt="ratingImage"]').should("exist");
  });
  it("click on article should open modal", () => {
    cy.visit("/");
    cy.get('[alt="play"]').first().should("exist").click();
    cy.get("#modal-root").within(() => {
      cy.get("iframe").should("exist");
    });
  });
});
