describe("Test Wait For Request", () => {
  it("works", () => {
    cy.visit("http://127.0.0.1:8080/");

    cy.server();

    cy.route2({
      url: "http://localhost:3000/graphql",
      method: "POST",
      query: "*",
    }).as("getQuery");

    cy.contains("First").click();

    cy.wait("@getQuery");

    cy.get(".alert").should("contain", "First Response");

    cy.contains("Second").click();
    cy.get(".alert").should("contain", "Second Response");
  });
});
