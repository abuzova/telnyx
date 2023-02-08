class Header { 

        
    // main menu   

    getNetworkMenuItem() {
        return cy.get("header .sc-14c941d7-7 ul>li:nth-child(5) a");
    } 

    //Products submenu

    getElastic_SIP_TrunkingSubMenuItem() {
        return cy.get("header .sc-14c941d7-7 ul>li:nth-child(1) div:nth-child(1)>a");

    }

    getVoice_API_SubMenuItem() {
        return cy.get("header .sc-14c941d7-7 ul>li.Text-sc-5o8owa-0:nth-child(1) .sc-7b3980dc-9 div:nth-child(2)>a");
    }

    getSMS_API_SubMenuItem() {
        return cy.get("header .sc-14c941d7-7 ul>li:nth-child(1) div:nth-child(3)>a");
    }

    getWirelessSubMenuItem() {
        return cy.get("header .sc-14c941d7-7 ul>li:nth-child(1) div:nth-child(4)>a");
    }

    getNumberLookupSubMenuItem() {
        return cy.get("header .sc-14c941d7-7 ul>li:nth-child(1) div:nth-child(5)>a");
    }

    getGlobalNumbersSubMenuItem() {
        return cy.get("header .sc-14c941d7-7 ul>li:nth-child(1) div:nth-child(6)>a");
    }

    getVideo_API_SubMenuItem() {
        return cy.get("header .sc-14c941d7-7 ul>li:nth-child(1) div:nth-child(7)>a");
    }

    getStorageSubMenuItem() {
        return cy.get("header .sc-14c941d7-7 ul>li:nth-child(1) div:nth-child(8)>a");
    }

    getSeeAllProductsSubMenuItem() {
        return cy.get("header .sc-14c941d7-7 ul>li:nth-child(1) .sc-7b3980dc-10>a");
    }

    //Solutions submenu   

    getCustomerEngagementPlatformsSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Customer Engagement Platforms"]');
    }

    getBusinesstoConsumerBrandsSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Business to Consumer Brands"]');
    }

    getManagedServiceProvidersSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Managed Service Providers"]');
    }

    getSeeAllSolutionsSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="See all Solutions"]');
    }

    getContactCenterSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Contact Center"]');
    }

    getCallTrackingSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Call Tracking"]');
    }

    getSMSCustomerSupportSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="SMS Customer Support"]');
    }

    getVoIPforSmallBusinessSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="VoIP for Small Business"]');    
    }

    getSeeallUseCasesSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="See all Use Cases"]');
    }

     //Resources submenu      

    getDeveloperDocsSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Developer Docs"]');
    }

    
    getCustomerStoriesSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Customer Stories"]');
    }

    getBlogSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Blog"]');
    }

    getBringYourOwnCarrierSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Bring Your Own Carrier"]');
    }

    getMissionControlSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Mission Control"]');
    }

    getSavingsCalculatorSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Savings Calculator"]');
    }

    //Company submenu 

    getAboutTelnyxSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="About Telnyx"]');
    }

    getCareersSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Careers"]');
    }

    getPartnersSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Partners"]');
    }

    getIntegrationsSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Integrations"]');
    }

     //Pricing submenu 


    getElasticSIPTrunkingSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Pricing"]/../..//span[text()="Elastic SIP Trunking"]');
    }

    getVoiceAPISubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Pricing"]/../..//span[text()="Voice API"]');
    }

    getSMSAPISubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Pricing"]/../..//span[text()="SMS API"]');
    }

    getFaxSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Pricing"]/../..//span[text()="Fax"]');
    }

    getWirelessSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Pricing"]/../..//span[text()="Wireless"]');
    }

    getVerifyAPISubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Pricing"]/../..//span[text()="Verify API"]');
    }

    getIdentityServicesDataSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Pricing"]/../..//span[text()="Identity Services & Data"]');
    }

    getSeeAllPricingSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Pricing"]/../..//span[text()="See all Pricing"]');
    }

    // Talk to an expert button

    getTalkToAnExpertButton(){
        return cy.get('header ul:nth-child(4)>li:nth-child(1)');
    }    
    

    // main menu,  Products submenues    

    clickElastic_SIP_TrunkingSubMenuItem(){
        this.getElastic_SIP_TrunkingSubMenuItem().click({ force: true });       
    }

    clickVoice_API_SubMenuItem(){
        this.getVoice_API_SubMenuItem().click({ force: true });       
    } 

    clickSMS_API_SubMenuItem(){
        this.getSMS_API_SubMenuItem().click({ force: true });       
    } 

    clickWirelessSubMenuItem(){
        this.getWirelessSubMenuItem().click({ force: true });       
    } 

    clickNumberLookupSubMenuItem(){
        this.getNumberLookupSubMenuItem().click({ force: true });       
    } 

    clickGlobalNumbersSubMenuItem(){
        this.getGlobalNumbersSubMenuItem().click({ force: true });       
    } 

    clickVideo_API_SubMenuItem(){
        this.getVideo_API_SubMenuItem().click({ force: true });       
    } 

    clickStorageSubMenuItem(){
        this.getStorageSubMenuItem().click({ force: true });       
    } 

    clickSeeAllProductsSubMenuItem(){
        this.getSeeAllProductsSubMenuItem().click({ force: true });       
    }     


    // main menu,  Solutions submenues

    clickCustomerEngagementPlatformsSubMenuItem(){
        this.getCustomerEngagementPlatformsSubMenuItem().click({ force: true });       
    } 

    clickBusinesstoConsumerBrandsSubMenuItem(){
        this.getBusinesstoConsumerBrandsSubMenuItem().click({ force: true });       
    }

    clickManagedServiceProvidersSubMenuItem(){
        this.getManagedServiceProvidersSubMenuItem().click({ force: true });       
    } 

    clickSeeAllSolutionsSubMenuItem(){
        this.getSeeAllSolutionsSubMenuItem().click({ force: true });       
    } 

    clickContactCenterSubMenuItem(){
        this.getContactCenterSubMenuItem().click({ force: true });       
    } 

    clickCallTrackingSubMenuItem(){
        this.getCallTrackingSubMenuItem().click({ force: true });       
    } 

    clickSMSCustomerSupportSubMenuItem(){
        this.getSMSCustomerSupportSubMenuItem().click({ force: true });       
    } 

    clickVoIPforSmallBusinessSubMenuItem(){
        this.getVoIPforSmallBusinessSubMenuItem().click({ force: true });       
    } 

    clickSeeallUseCasesSubMenuItem(){
        this.getSeeallUseCasesSubMenuItem().click({ force: true });       
    } 

    // main menu,  Network

    clickNetworkMenuItem(){
        this.getNetworkMenuItem().click({ force: true });       
    }


    // main menu,  Resources submenu 

    clickDeveloperDocsSubMenuItem(){
        this.getDeveloperDocsSubMenuItem().click({ force: true });       
    }

    clickCustomerStoriesSubMenuItem(){
        this.getCustomerStoriesSubMenuItem().click({ force: true });       
    }

    clickBlogSubMenuItem(){
        this.getBlogSubMenuItem().click({ force: true });       
    }

    clickBringYourOwnCarrierSubMenuItem(){
        this.getBringYourOwnCarrierSubMenuItem().click({ force: true });       
    }

    clickMissionControlSubMenuItem(){
        this.getMissionControlSubMenuItem().click({ force: true });       
    }

    clickSavingsCalculatorSubMenuItem(){
        this.getSavingsCalculatorSubMenuItem().click({ force: true });       
    }

    // main menu,  Company submenues

    
    clickAboutTelnyxSubMenuItem(){
        this.getAboutTelnyxSubMenuItem().click({ force: true });       
    } 

    clickCareersSubMenuItem(){
        this.getCareersSubMenuItem().click({ force: true });       
    } 

    clickPartnersSubMenuItem(){
        this.getPartnersSubMenuItem().click({ force: true });       
    } 

    clickIntegrationsSubMenuItem(){
        this.getIntegrationsSubMenuItem().click({ force: true });       
    } 

    //Pricing submenu 

    clickElasticSIPTrunkingSubMenuItem(){
        this.getElasticSIPTrunkingSubMenuItem().click({ force: true });       
    } 

    clickVoiceAPISubMenuItem(){
        this.getVoiceAPISubMenuItem().click({ force: true });       
    } 

    clickSMSAPISubMenuItem(){
        this.getSMSAPISubMenuItem().click({ force: true });       
    }

    clickFaxSubMenuItem(){
        this.getFaxSubMenuItem().click({ force: true });       
    }

    clickWirelessSubMenuItem(){
        this.getWirelessSubMenuItem().click({ force: true });       
    }

    clickVerifyAPISubMenuItem(){
        this.getVerifyAPISubMenuItem().click({ force: true });       
    }

    clickIdentityServicesDataSubMenuItem(){
        this.getIdentityServicesDataSubMenuItem().click({ force: true });       
    }

    clickSeeAllPricingSubMenuItem(){
        this.getSeeAllPricingSubMenuItem().click({ force: true }); 
    }  
    
    // Top sign up link 

    getSignUpLink() {
        return cy.get("header ul li div a.sign-up-link");
    }

    clickSignUpLink(){
        this.getSignUpLink().click();
        cy.wait(2000);
        cy.url().should('contain', '/sign-up');
    }

     // Talk to an expert button

    clickTalkToAnExpertButton(){
        this.getTalkToAnExpertButton().click();
    }
    
} 

module.exports = Header