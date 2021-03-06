/// <reference types="Cypress" />

context("App", () => {

    beforeEach(() => {
        cy.server()
        cy.route("https://opentdb.com/*").as("getData")
		cy.visit("http://localhost:3000")
	})

	it("Loads root path / and has contains text and button", () => {
		cy.visit("http://localhost:3000")
		cy.get("button")
			.should("contain", "Loading...")
			.should("have.attr", "disabled")

		cy.get(".screen-container")
			.should("contain", "Welcome to the Trivia Challenge!")
			.should(
				"contain",
				"You will be presented with 10 True or False questions."
			)
			.should("contain", "Can you score 100%?")
	})

	it("Shows BEGIN button when data has been received", () => {
		cy.wait("@getData")
		cy.get("button")
			.should("contain", "BEGIN")
			.should("not.have.attr", "disabled")
	})

	it("Handles Start Quiz action by going to /quiz route", () => {
		cy.wait("@getData")
		cy.get("button").click()
		cy.location().should((loc) => {
			expect(loc.pathname).to.eq("/quiz")
		})
	})

	it("Handles answering all question and going to /score page", () => {
		cy.wait("@getData")
		cy.get("button").click()
		cy.get(".screen-container")
			.find("button")
			.contains("FALSE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("FALSE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("FALSE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("FALSE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("FALSE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("TRUE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("TRUE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("TRUE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("TRUE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("TRUE")
			.click()

		cy.location().should((loc) => {
			expect(loc.pathname).to.eq("/score")
		})
	})

	it("Handles starting a quiz from /score", () => {
		cy.wait("@getData")
		cy.get("button").click()
		cy.get(".screen-container")
			.find("button")
			.contains("FALSE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("FALSE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("FALSE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("FALSE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("FALSE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("TRUE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("TRUE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("TRUE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("TRUE")
			.click()
		cy.get(".screen-container")
			.find("button")
			.contains("TRUE")
			.click()

		cy.get("button")
			.contains("PLAY AGAIN?")
			.click()

		cy.location().should((loc) => {
			expect(loc.pathname).to.eq("/")
		})
	})
})
