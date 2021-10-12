describe("Pruebas end to end", () => {
  it("should show error message if there is an error callign the API", () => {
    cy.server();
    cy.route({
      method: "GET",
      url: "**/players?searchString=abc**",
      status: 500,
      response: { message: "error" },
    });
    cy.visit("/");
    cy.get("#search-input").type("abc");
    cy.contains("Ocurrió un error al tratar de obtener los jugadores");
  });
  it("should get exact match using player id", () => {
    cy.get("#search-input").clear();
    cy.get("#search-input").type("123");
    cy.get("#123-balance").contains("581042");
    cy.get("#123-nickname").contains("weñxoab");
    cy.get("#123-status").contains("ljñkv bmfwuq");
  });
  it("should get players with nickname dsafasd", () => {
    cy.get("#search-input").clear();
    cy.get("#search-input").type("dsafasd");
    cy.get("#29-balance").contains("756135");
    cy.get("#268-balance").contains("831418");
    cy.get("#360-balance").contains("36452");
    cy.get("#381-balance").contains("888655");
    cy.get("#735-balance").contains("575469");
    cy.get("#1110-balance").contains("864649");
    cy.get("#1792-balance").contains("720370");
    cy.get("#1841-balance").contains("985154");
    cy.get("#2717-balance").contains("535412");
    cy.get("#2850-balance").contains("633601");
  });
  it("should jump to next page after showing results", () => {
    cy.get("#search-input").clear();
    cy.get("#search-input").type("dsa");

    cy.get("#384-nickname").contains("dsaasd");
    cy.get("#384-balance").contains("929313");

    cy.get(".pagination-next").click();

    cy.get("#677-nickname").contains("dsaasd");
    cy.get("#677-balance").contains("202387");

    cy.get("#616-nickname").contains("asdsa");
    cy.get("#616-balance").contains("480105");
  });
});
