class SignUp { 

    getEmailInput(){
      return cy.get('form input[id="email"]');
    }

    getFullNameInput(){
      return cy.get('form input[id="full_name"]');
    }

    getPasswordInput(){
      return cy.get('form input[id="password"]');
    }

    getTermsAndConditionsInput(){
      return cy.get('form input[id="terms_and_conditions"]');
    }   

    getTermsAndConditionsDiv(){
      return cy.xpath('//form//input[@id="terms_and_conditions"]/..');
    }

    getSubscriptionInput(){
      return cy.get('form input[id="subscription_opt_in"]');
    }

    getSubscriptionDiv(){
      return cy.xpath('//form//input[@id="subscription_opt_in"]/..');
    }

    getCreateAccountButton(){
      return cy.get('form button[type="submit"]');
    }
    
    setEmailInput(emailValue){
      this.getEmailInput().type(emailValue);     
      this.getEmailInput().should('have.value', emailValue) 
        
    } 

    setFullNameInput(fullNameValue){
      this.getFullNameInput().type(fullNameValue); 
      this.getFullNameInput().should('have.value', fullNameValue)     
    }
    
    setPasswordInput(passwordValue){
      this.getPasswordInput().type(passwordValue);
      this.getPasswordInput().should('have.value', passwordValue)      
    } 

    clickTermsAndConditionsInput(){      
      this.getTermsAndConditionsDiv().click();  
      this.getTermsAndConditionsInput().should('be.checked');
    }

    clickSubscriptionInput(){
      this.getSubscriptionDiv().click();
      this.getSubscriptionInput().should('be.checked');
    }    

  }

  module.exports = SignUp