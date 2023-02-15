class EBookDownload{

    getFirstNameInput(){
        return cy.get('form input[id="FirstName"]');
    }

    getLastNameInput(){
        return cy.get('form input[id="LastName"]');
    }

    getCompanyNameInput(){
        return cy.get('form input[id="Company"]');
    }

    getEmailInput(){
        return cy.get('form input[id="Email"]');
    }

    getReceiveEmailsTelnyxInput(){
        return cy.xpath('//form//input[@type="checkbox"]');
    }

    getSendMyContentButton(){
        return cy.xpath('//form//button[@class="mktoButton"]');
    }

    setFirstNameInput(firstNameValue){
        this.getFirstNameInput()
            .type(firstNameValue)
            .should('have.value', firstNameValue);      
    }
    
    setLastNameInput(lastNameValue){
        this.getLastNameInput()
            .type(lastNameValue)
            .should('have.value', lastNameValue);      
    }

    setCompanyNameInput(companyNameValue){
        this.getCompanyNameInput()
            .type(companyNameValue)
            .should('have.value', companyNameValue);      
    }

    setEmailInput(emailValue){
        this.getEmailInput()
            .type(emailValue)
            .should('have.value', emailValue);      
    }

    checkReceiveEmailsTelnyxInput(){
        this.getReceiveEmailsTelnyxInput()
            .click()            
            .should('be.checked')
    }


}

module.exports = EBookDownload