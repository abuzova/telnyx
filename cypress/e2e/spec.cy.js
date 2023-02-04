import Header from "../pages/Header.js"

const header = new Header();

describe('Checking correct the Main menu work', () => {
  context('Checking correct the "Products" menuitem and submenu work', () =>{
    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    }) 

    it('Click on the "Products --> Elastic SIP Trunking" menu item', () =>{     
      header.clickElastic_SIP_TrunkingSubMenuItem();      
      cy.url().should('include', '/products/sip-trunks')      
    })

    it('Click on the "Products --> Voice API" menu item', () =>{     
      header.clickVoice_API_SubMenuItem();      
      cy.url().should('include', '/products/voice-api')      
    })

    it('Click on the "Products --> SMS API" menu item', () =>{     
      header.clickSMS_API_SubMenuItem();      
      cy.url().should('include', '/products/sms-api')      
    })

    it('Click on the "Products --> Wireless" menu item', () =>{     
      header.clickWirelessSubMenuItem();      
      cy.url().should('include', '/pricing/iot-data-plans')      
    })

    it('Click on the "Products --> Number Lookup" menu item', () =>{     
      header.clickNumberLookupSubMenuItem();      
      cy.url().should('include', '/number-lookup')      
    })

    it('Click on the "Products --> Global Numbers" menu item', () =>{     
      header.clickGlobalNumbersSubMenuItem();      
      cy.url().should('include', '/products/phone-numbers')      
    })

    it('Click on the "Products --> Video API" menu item', () =>{     
      header.clickVideo_API_SubMenuItem();      
      cy.url().should('include', '/products/video-api')      
    })

    it('Click on the "Products --> Storage" menu item', () =>{     
      header.clickStorageSubMenuItem();      
      cy.url().should('include', '/products/cloud-storage')      
    })

    it('Click on the "Products --> See all Products" menu item', () =>{     
      header.clickSeeAllProductsSubMenuItem();      
      cy.url().should('include', '/products')      
    })

  })

  context('Checking correct the "Solutions" menuitem and submenu work', () =>{
    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    })

    it('Click on the "Solutions --> Customer Engagement Platforms " menu item', () =>{     
      header.clickCustomerEngagementPlatformsSubMenuItem();      
      cy.url().should('include', '/solutions/customer-engagement-platforms')      
    })

    it('"Click on the ""Solutions --> Business to Consumer Brands " menu item', () =>{     
      header.clickBusinesstoConsumerBrandsSubMenuItem();      
      cy.url().should('include', '/solutions/business-to-consumer-brands')      
    })

    it('Click on the "Solutions --> Managed Service Providers " menu item', () =>{     
      header.clickManagedServiceProvidersSubMenuItem();      
      cy.url().should('include', '/use-cases/managed-services-telephony-reseller')      
    })

    it('Click on the "Solutions --> See all Solutions " menu item', () =>{     
      header.clickSeeAllSolutionsSubMenuItem();      
      cy.url().should('include', '/solutions')      
    })

    it('Click on the "Solutions --> Contact Center " menu item', () =>{     
      header.clickContactCenterSubMenuItem();      
      cy.url().should('include', '/use-cases/contact-center')      
    })

    it('Click on the "Solutions --> Call Tracking " menu item', () =>{     
      header.clickCallTrackingSubMenuItem();      
      cy.url().should('include', '/use-cases/call-tracking')      
    })

    it('Click on the "Solutions --> SMS Customer Support " menu item	', () =>{     
      header.clickSMSCustomerSupportSubMenuItem();      
      cy.url().should('include', '/use-cases/sms-customer-service')      
    })

    it('Click on the "Solutions --> VoIP for Small Business " menu item', () =>{     
      header.clickVoIPforSmallBusinessSubMenuItem();      
      cy.url().should('include', '/use-cases/voip-for-small-business')      
    })

    it('Click on the "Solutions --> See all Use Cases " menu item', () =>{     
      header.clickSeeallUseCasesSubMenuItem();      
      cy.url().should('include', '/use-cases')      
    })
  })

  context('Checking correct the "Network" menuitem', () =>{
    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    })

    it('Click on the "Network" menu item', () =>{     
      header.clickNetworkMenuItem();      
      cy.url().should('include', '/solutions/global-ip-network')      
    })

  }) 
  
  context('Checking correct the "Resources" menuitem and submenu work', () =>{
    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    })

    it('Click on the "Resources --> Developer Docs " menu item', () =>{     
      header.clickDeveloperDocsSubMenuItem();      
      cy.url().should('eq', 'https://developers.telnyx.com/docs/v2')      
    })

    it('Click on the "Resources --> Customer Stories " menu item', () =>{     
      header.clickCustomerStoriesSubMenuItem();      
      cy.url().should('include', '/customer-stories')      
    })

    it('Click on the "Resources --> Blog" menu item', () =>{     
      header.clickBlogSubMenuItem();      
      cy.url().should('include', '/resources')      
    })

    it('Click on the "Resources --> Bring Your Own Carrier" menu item', () =>{     
      header.clickBringYourOwnCarrierSubMenuItem();      
      cy.url().should('include', '/bring-your-own-carrier')      
    })

    it('Click on the "Resources --> Mission Control" menu item', () =>{     
      header.clickMissionControlSubMenuItem();      
      cy.url().should('include', '/use-cases/mission-control')      
    })

    it('Click on the "Resources --> Savings Calculator" menu item', () =>{     
      header.clickSavingsCalculatorSubMenuItem();      
      cy.url().should('include', '/twilio-pricing-calculator')      
    })
  })

  context('Checking correct the "Company" menuitem and submenu work', () =>{
    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    })

    it('Click on the "Company --> About Telnyx" menu item', () =>{     
      header.clickAboutTelnyxSubMenuItem();      
      cy.url().should('include', '/company/about')      
    })

    it('Click on the "Company --> Careers" menu item', () =>{     
      header.clickCareersSubMenuItem();      
      cy.url().should('include', '/company/careers')      
    })

    it('Click on the "Company --> Partners" menu item', () =>{     
      header.clickPartnersSubMenuItem();      
      cy.url().should('include', '/company/partnerships')      
    })

    it('Click on the "Company --> Integrations" menu item', () =>{     
      header.clickIntegrationsSubMenuItem();      
      cy.url().should('include', '/integrations')      
    })
  })

  context('Checking correct the "Pricing" menuitem and submenu work', () =>{
    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    })

    it('Click on the "Pricing --> Elastic SIP Trunking" menu item', () =>{     
      header.clickElasticSIPTrunkingSubMenuItem();      
      cy.url().should('include', '/pricing/elastic-sip')      
    })

    it('Click on the "Pricing --> Voice API" menu item', () =>{     
      header.clickVoiceAPISubMenuItem();      
      cy.url().should('include', '/pricing/call-control')      
    })

    it('Click on the "Pricing --> SMS API" menu item', () =>{     
      header.clickSMSAPISubMenuItem();      
      cy.url().should('include', '/pricing/messaging')      
    })

    it('Click on the "Pricing --> Fax" menu item', () =>{     
      header.clickFaxSubMenuItem();      
      cy.url().should('include', '/pricing/fax')      
    })

    it('Click on the "Pricing --> See all Pricing" menu item', () =>{     
      header.clickWirelessSubMenuItem();      
      cy.url().should('include', '/pricing/iot-data-plans')      
    })

    it('Click on the "Pricing --> Wireless" menu item', () =>{     
      header.clickVerifyAPISubMenuItem();      
      cy.url().should('include', '/pricing/verify-api')      
    })

    it('Click on the "Pricing --> Verify API" menu item', () =>{     
      header.clickIdentityServicesDataSubMenuItem();      
      cy.url().should('include', '/pricing/id-services-and-data')      
    })

    it('Click on the "Pricing --> Identity Services & Data" menu item', () =>{     
      header.clickSeeAllPricingSubMenuItem();      
      cy.url().should('include', '/pricing')      
    })
  })
})