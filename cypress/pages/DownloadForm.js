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

    getSubscriptionLabel(){
        return cy.xpath('//form//input[@name="Subscription_Opt_In__c"]/following-sibling::label');
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
        this.getSubscriptionInput().should('not.be.visible').check({ force: true });
        this.getSubscriptionLabel().should('have.attr', 'aria-checked', 'true');       
    }

}

module.exports = DownloadForm