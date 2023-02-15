class ContactUs{
    
    getReasonContactSelect() {
        return cy.get('select#Reason_for_Contact__c');
    } 

    getFirstNameInput(){
        return cy.get('input[id="FirstName"]');
    }

    getLastNameInput(){
        return cy.get('input[id="LastName"]');
    }

    getEmailInput(){
        return cy.get('input[id="Email"]');
    } 

    getContactPhoneNumberSelect(){
        return cy.get('select[id="Phone_Number_Extension__c"]');
    }

    getPhoneNumberInput(){
        return cy.get('input[id="Phone_Number_Base__c"]');
    }

    getWebsiteInput(){
        return cy.get('input[id="Website"]');
    }

    getPrimaryInterestSelect()
    {
        return cy.get('select[id="Use_Case_Form__c"]')
    }

    getAdditionalInformationInput(){
        return cy.get('textarea[id="Form_Additional_Information__c"]');
    }

    getSubscriptionCheckBox(){
        return cy.get('input[name="Subscription_Opt_In__c"]');
    }

    getSubmitButton(){
        return cy.get('button[type="submit"]');
    }  
   

    setReasonContactSelect(reasonContactValue){
        this.getReasonContactSelect().select(reasonContactValue);
        this.getReasonContactSelect().should('have.value', reasonContactValue); 
    }
    
    setFirstNameInput(valueFirstName){
        this.getFirstNameInput().type(valueFirstName);
        this.getFirstNameInput().should('have.value', valueFirstName);
    }

    setLastNameInput(valueLastName){
        this.getLastNameInput().type(valueLastName);
        this.getLastNameInput().should('have.value', valueLastName);
    }

    setEmailInput(emailValue){
        this.getEmailInput().type(emailValue);
        this.getEmailInput().should('have.value', emailValue);
    }

    setContactPhoneNumberSelect(contactPhoneNumberValue){
        this.getContactPhoneNumberSelect().select(contactPhoneNumberValue);
        this.getContactPhoneNumberSelect().should('have.value', contactPhoneNumberValue);
    }

    setPhoneNumberInput(phoneValue){
        this.getPhoneNumberInput().type(phoneValue);  
        this.getPhoneNumberInput().should('have.value', phoneValue);
    }

    setWebsiteInput(webSiteValue){
        this.getWebsiteInput().type(webSiteValue);
        this.getWebsiteInput().should('have.value', webSiteValue);
    }

    setPrimaryInterestSelect(primaryInterestValue){
        this.getPrimaryInterestSelect().select(primaryInterestValue);
        this.getPrimaryInterestSelect().should('have.value', primaryInterestValue);
    }

    setAdditionalInformationInput(additionalInformationValue){
        this.getAdditionalInformationInput().type(additionalInformationValue);
        this.getAdditionalInformationInput().should('have.value', additionalInformationValue);
    }

    checkSubscriptionInput(){
        this.getSubscriptionCheckBox().click();
    }
    
}
module.exports = ContactUs