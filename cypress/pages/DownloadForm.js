class DownloadForm {

    getFirstNameInput(){  
             
        return cy.get('form input[name="FirstName"]');
    }

    getLastNameInput(){
        return cy.get('form input[name="LastName"]');
    }

    getEmailInput(){
        return cy.get('form input[name="Email"]');
    }

    getSubscriptionInput(){
        return cy.get('form input[name="Subscription_Opt_In__c"]');
    }

    getDownloadCSVButton(){
        return cy.get('form button[type="submit"]');
    }

    setFirstNameInput(firstNameValue){        
        this.getFirstNameInput().type(firstNameValue);
        this.getFirstNameInput().should('have.value', firstNameValue);
    }

    setLastNameInput(lastNameValue){
        this.getLastNameInput().type(lastNameValue);
        this.getLastNameInput().should('have.value', lastNameValue);
    }

    setEmailInput(emailValue){
        this.getEmailInput().type(emailValue);
        this.getEmailInput().should('have.value', emailValue);
    }

    checkSubscriptionInput(){
        //this.getSubscriptionInput().click();
        this.getSubscriptionInput().check({ force: true }).should('be.checked');
           // .check({ force: true })
            
           //cy.get('.sidebar').scrollTo('bottom')
    }

}

module.exports = DownloadForm