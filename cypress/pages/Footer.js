class Footer{

    getFooterBlock(){
        return cy.get('footer[class="sc-7b6c9f9b-0 dKHwUU"]');
    }

    // Products footer menu

    getElasticSIPTrunkingMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-products"] ul  li:nth-child(1) a');
    }

    getCallControlVoiceAPIMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-products"] ul  li:nth-child(2) a');
    }

    getProgrammableSMSMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-products"] ul  li:nth-child(3) a');
    }

    getSecureFaxingMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-products"] ul  li:nth-child(4) a');
    }

    getWirelessCellularIoTMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-products"] ul  li:nth-child(5) a');
    }

    getNumberLookupMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-products"] ul  li:nth-child(6) a');
    }

    getGlobalNumbersMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-products"] ul  li:nth-child(7) a');
    }

    getVerifyAPIMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-products"] ul  li:nth-child(8) a');
    }

    getSeeAllProductsMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-products"] ul  li:nth-child(9) a');
    }

    // Resources footer menu

    getDeveloperDocsMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-resources"] ul  li:nth-child(1) a');
    } 

    getBlogMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-resources"] ul  li:nth-child(2) a');
    }

    getResourceHubMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-resources"] ul  li:nth-child(3) a');
    }

    getReleaseNotesMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-resources"] ul  li:nth-child(4) a');
    }

    // Pricing footer menu

    getElasticSIPTrunkingPricingMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-pricing"] ul  li:nth-child(1) a');
    } 

    getSMSAPIPricingMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-pricing"] ul  li:nth-child(2) a');
    } 

    getVoiceAPIPricingMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-pricing"] ul  li:nth-child(3) a');
    } 

    getWirelessPricingMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-pricing"] ul  li:nth-child(4) a');
    } 

    // Company footer menu

    getAboutUsMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-company"] ul  li:nth-child(1) a');
    }

    getCareersMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-company"] ul  li:nth-child(2) a');
    }

    getDataPrivacyMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-company"] ul  li:nth-child(3) a');
    }

    getSupportCenterMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-company"] ul  li:nth-child(4) a');
    }

    getReportAbuseMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-company"] ul  li:nth-child(5) a');
    }

    getPrivacyPolicyMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-company"] ul  li:nth-child(6) a');
    }

    getCookiePolicyMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-company"] ul  li:nth-child(7) a');
    }

    getAcceptableUsePolicyMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-company"] ul  li:nth-child(8) a');
    }

    getWebsiteTermsAndConditionsMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-company"] ul  li:nth-child(9) a');
    }

    getLawEnforcementRequestMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-company"] ul  li:nth-child(10) a');
    }
    
    // Mission Control footer menu


    getSignUpMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-mission_control"] ul  li:nth-child(1) a');
    }

    getLogInMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-mission_control"] ul  li:nth-child(2) a');
    } 
    
    // Social footer menu

    getConnectOnLinkedInMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-social"] ul  li:nth-child(1) a');
    }

    getFollowOnTwitterMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-social"] ul  li:nth-child(2) a');
    } 

    getFollowOnFacebookMenuItem() {
        return cy.get('footer div[data-e2e="Footer--navItem-social"] ul  li:nth-child(3) a');
    }

    // Products footer menu

    clickElasticSIPTrunkingMenuItem(){
        this.getElasticSIPTrunkingMenuItem().click();       
    } 

    clickCallControlVoiceAPIMenuItem(){
        this.getCallControlVoiceAPIMenuItem().click();       
    } 

    clickProgrammableSMSMenuItem(){
        this.getProgrammableSMSMenuItem().click();       
    } 

    clickSecureFaxingMenuItem(){
        this.getSecureFaxingMenuItem().click();       
    } 

    clickWirelessCellularIoTMenuItem(){
        this.getWirelessCellularIoTMenuItem().click();       
    } 

    clickNumberLookupMenuItem(){
        this.getNumberLookupMenuItem().click();       
    } 

    clickGlobalNumbersMenuItem(){
        this.getGlobalNumbersMenuItem().click();       
    } 

    clickVerifyAPIMenuItem(){
        this.getVerifyAPIMenuItem().click();       
    } 

    clickSeeAllProductsMenuItem(){
        this.getSeeAllProductsMenuItem().click();       
    } 

    // Resources footer menu

    shouldDeveloperDocsMenuItem(){
        this.getDeveloperDocsMenuItem().should('have.attr', 'href', 'https://developers.telnyx.com/docs/v2');       
    } 

    clickBlogMenuItem(){
        this.getBlogMenuItem().click();       
    } 

    clickResourceHubMenuItem(){
        this.getResourceHubMenuItem().click();       
    } 

    clickReleaseNotesMenuItem(){
        this.getReleaseNotesMenuItem().click();       
    } 

    // Pricing footer menu

    clickElasticSIPTrunkingPricingMenuItem(){
        this.getElasticSIPTrunkingPricingMenuItem().click();       
    }
    
    clickSMSAPIPricingMenuItem(){
        this.getSMSAPIPricingMenuItem().click();       
    } 

    clickVoiceAPIPricingMenuItem(){
        this.getVoiceAPIPricingMenuItem().click();       
    } 

    clickWirelessPricingMenuItem(){
        this.getWirelessPricingMenuItem().click();       
    } 

     // Company footer menu

    clickAboutUsMenuItem(){
        this.getAboutUsMenuItem().click();       
    }

    clickCareersMenuItem(){
        this.getCareersMenuItem().click();       
    }

    clickDataPrivacyMenuItem(){
        this.getDataPrivacyMenuItem().click();       
    }

    shouldSupportCenterMenuItem(){
        this.getSupportCenterMenuItem().should('have.attr', 'href', 'https://support.telnyx.com/en/');       
    }

    clickReportAbuseMenuItem(){
        this.getReportAbuseMenuItem().click();       
    }

    clickPrivacyPolicyMenuItem(){
        this.getPrivacyPolicyMenuItem().click();       
    }

    clickCookiePolicyMenuItem(){
        this.getCookiePolicyMenuItem().click();       
    }

    clickAcceptableUsePolicyMenuItem(){
        this.getAcceptableUsePolicyMenuItem().click();       
    }

    clickWebsiteTermsAndConditionsMenuItem(){
        this.getWebsiteTermsAndConditionsMenuItem().click();       
    }

    shouldLawEnforcementRequestMenuItem(){
        this.getLawEnforcementRequestMenuItem().should('have.attr', 'href', 'https://telnyx.com/law-enforcement-request');       
    }

    // Mission Control footer menu

    clickSignUpMenuItem(){
        this.getSignUpMenuItem().click();       
    } 

    shouldLogInMenuItem(){
        this.getLogInMenuItem().should('have.attr', 'href', 'https://portal.telnyx.com/');       
    } 

    // Social footer menu

    shouldConnectOnLinkedInMenuItem(){
        this.getConnectOnLinkedInMenuItem().should('have.attr', 'href', 'https://www.linkedin.com/company/telnyx/');       
    } 

    shouldFollowOnTwitterMenuItem(){
        this.getFollowOnTwitterMenuItem().should('have.attr', 'href', 'https://twitter.com/telnyx');       
    } 

    shouldFollowOnFacebookMenuItem(){
        this.getFollowOnFacebookMenuItem().should('have.attr', 'href', 'https://www.facebook.com/Telnyx/');       
    } 
}

module.exports = Footer