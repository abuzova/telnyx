class ReportAbuse{

    getSubjectInput(){
        return cy.get('form input[name="shortDescription"]');
    }

    getAbusivePhoneNumberInput(){
        return cy.get('form input[name="abusivePhoneNumber"]');
    }
    getAbusedPhoneNumberInput(){
        return cy.get('form input[name="abusedPhoneNumber"]');
    }

    getDateTimeInput(){
        return cy.get('form input[name="dateTime"]');
    }
    getDayofMonth(dayValue){
        let selector = 'td[data-value="'+ dayValue + '"]';
        return cy.get(selector);
    }
    
    getServiceAbusedVoiceInput(){
        return cy.get('form input[id="serviceAbusedVoice"]');       
    }

    getServiceAbusedVoiceBlock(){        
        return cy.xpath('//form//input[@id="serviceAbusedVoice"]/..');
    }

    getServiceAbusedSmsInput(){
        return cy.get('form input[id="serviceAbusedSms"]');
    }

    getServiceAbusedSmsBlock(){
        return cy.xpath('//form//input[@id="serviceAbusedSms"]/..');
    }

    getLastNameInput(){
        return cy.get('form input[name="reporterName"]');
    }

    getEmailInput(){
        return cy.get('form input[name="reporterEmail"]');
    }

    getLongDescriptionInput(){
        return cy.get('form input[name="longDescription"]');
    }

    getSubmitButton(){
        return cy.get('form button[type="submit"]');
    }

    getFormBlock(){
        return cy.get('form[data-e2e="ReportAbuseForm"]');
    }

    setSubjectInput(subjectValue){
        this.getSubjectInput().type(subjectValue);     
        this.getSubjectInput().should('have.value', subjectValue);           
    } 

    setAbusivePhoneNumberInput(abusivePhoneNumberValue){
        this.getAbusivePhoneNumberInput().type(abusivePhoneNumberValue);     
        this.getAbusivePhoneNumberInput().should('have.value', abusivePhoneNumberValue);           
    }
    
    setAbusedPhoneNumberInput(abusedPhoneNumberValue){
        this.getAbusedPhoneNumberInput().type(abusedPhoneNumberValue);     
        this.getAbusedPhoneNumberInput().should('have.value', abusedPhoneNumberValue);           
    }

    setDateTimeInput(dateTimeValue){
        this.getDateTimeInput().click();
        this.getDayofMonth(dateTimeValue).click(); 
        this.getFormBlock().click();  // clicking to some space to date receive in the DateTimeInput
        this.getDateTimeInput().should('contains.value', dateTimeValue); 
                  
    }

    clickServiceAbusedVoiceInput(){
        this.getServiceAbusedVoiceBlock().click();     
        this.getServiceAbusedVoiceInput().should('be.checked');           
    }

    clickServiceAbusedSmsInput(){
        this.getServiceAbusedSmsBlock().click();     
        this.getServiceAbusedSmsInput().should('be.checked');           
    }

    setLastNameInput(lastNameValue){
        this.getLastNameInput().type(lastNameValue);     
        this.getLastNameInput().should('have.value', lastNameValue);           
    }

    setEmailInput(reporterNameValue){
        this.getEmailInput().type(reporterNameValue);     
        this.getEmailInput().should('have.value', reporterNameValue);           
    }

    setLongDescriptionInput(longDescriptionValue){
        this.getLongDescriptionInput().type(longDescriptionValue);     
        this.getLongDescriptionInput().should('have.value', longDescriptionValue);           
    }
}

module.exports = ReportAbuse