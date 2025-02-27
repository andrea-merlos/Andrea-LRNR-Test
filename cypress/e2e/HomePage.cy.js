describe("HomePage E2E Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5174/");
    // Optionally wait for a key element to ensure the page loads
    cy.get('img[alt="lrnr logo"]', { timeout: 10000 }).should("be.visible");
  });

  it("should display the logo", () => {
    cy.get('img[alt="lrnr logo"]').should("be.visible");
  });

  it("should display the main heading", () => {
    cy.get("h2", { timeout: 10000 }) // Increase the timeout if needed
      .should("be.visible")
      .and("contain", "Your guided path to programming enlightenment");
  });

  it("should navigate to the quiz page when the button is clicked", () => {
    cy.contains("button", "Begin Journey", { timeout: 10000 }).click();
    cy.url().should("include", "/quiz");
  });

  it("should display the three service cards", () => {
    cy.get(
      ".flex.flex-wrap.justify-center.gap-16.mt-6.max-w-5xl.mx-auto.mb-16",
      { timeout: 10000 }
    )
      .find(".bg-white")
      .should("have.length", 3);
  });
});
