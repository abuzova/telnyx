class Header { 

    getSignUpLink() {
        return cy.get("header ul li div a.sign-up-link");
    }

    clickSignUpLink(){
        this.getSignUpLink().click();
        cy.wait(2000);
        cy.url().should('contain', '/sign-up');
    }

  }

module.exports = Header