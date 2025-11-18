/// <reference types="cypress" />
describe("fonctionnalité d'authentification", ()=>{

   beforeEach("visiter le lien",()=>{
cy.visit("https://www.saucedemo.com/")
   })
   
it("login with valid credentials",()=>{
/// je cible le champs username avec son identifiant
    cy.get("#user-name").type("standard_user")
    ///je saisie le nom username
  
 / //je passe au passexord
    cy.get("#password").type("secret_sauce")

    // je basse au bouton
    cy.get("#login-button").click()
    //verifie s'il existe le titre product dans la page d'accueil
    cy.get("span.title").should("be.visible")
    // ou cy.url().eq("https://www.saucedemo.com/inventory.html")
 })


 it("login with invalid credentials",()=>{
/// je cible le champs username avec son identifiant et saisie le nom username
    cy.get("#user-name").type("cedric")
 
   / //je passe au passexord
    cy.get("#password").type("sauce")

    // je basse au bouton
    cy.get("#login-button").click()
    //verifie s'il existe le titre product dans la page d'accueil
   // cy.get("span.title").should("be.visible")
    cy.url().should("eq", "https://www.saucedemo.com/")

   
    
    })
})