import Footer from "../pages/Footer.js"

const footer = new Footer();


describe('Checking correct the Main menu work', () => {
  context('Checking correct the "Products" menuitem in the Footer', () =>{

    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    }) 

    it('Click on the "Products --> Elastic SIP Trunking" menu item', ()=>{
      footer.clickElasticSIPTrunkingMenuItem();
      cy.url().should('include', '/products/sip-trunks'); 
    })

    it('Click on the "Products --> Call Control - Voice API" menu item', ()=>{
      footer.clickCallControlVoiceAPIMenuItem();
      cy.url().should('include', '/products/voice-api');
    })

    it('Click on the "Products --> Programmable SMS" menu item', ()=>{
      footer.clickProgrammableSMSMenuItem();
      cy.url().should('include', '/products/sms-api');

    })

    it('Click on the "Products --> Secure Faxing" menu item', ()=>{
      footer.clickSecureFaxingMenuItem();
      cy.url().should('include', '/products/fax-api');
    })

    it('Click on the "Products --> Wireless - Cellular IoT" menu item', ()=>{
      footer.clickWirelessCellularIoTMenuItem();
      cy.url().should('include', '/products/iot-sim-card');
    })

    it('Click on the "Products --> Number Lookup" menu item', ()=>{
      footer.clickNumberLookupMenuItem();
      cy.url().should('include', '/number-lookup');
    })

    it('Click on the "Products --> Global Numbers" menu item', ()=>{
      footer.clickGlobalNumbersMenuItem();
      cy.url().should('include', '/products/phone-numbers');
    })

    it('Click on the "Products --> Verify API" menu item', ()=>{
      footer.clickVerifyAPIMenuItem();
      cy.url().should('include', '/products/verify-api');
    })

    it('Click on the "Products --> See all Products" menu item', ()=>{
      footer.clickSeeAllProductsMenuItem();
      cy.url().should('include', '/products');
    })    

  })

  context('Checking correct the "Resources" menuitem in the Footer', () =>{
    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    }) 

    it('Click on the "Resources --> Developer Docs" menu item', ()=>{
      footer.shouldDeveloperDocsMenuItem();     
    })

    it('Click on the "Resources --> Blog" menu item', ()=>{
      footer.clickBlogMenuItem();
      cy.url().should('include', '/resources');

    });

    it('Click on the "Resources --> Resource Hub" menu item', ()=>{
      footer.clickResourceHubMenuItem();
      cy.url().should('include', '/learn');
    })

    it('Click on the "Resources --> Release Notes" menu item', ()=>{
      footer.clickReleaseNotesMenuItem();
      cy.url().should('include', '/release-notes');
    })
  })

  context('Checking correct the "Pricing" menu item in the Footer', () =>{

    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    }) 

    it('Click on the "Pricing --> Elastic SIP Trunking Pricing" menu item', ()=>{
      footer.clickElasticSIPTrunkingPricingMenuItem();
      cy.url().should('include', '/pricing/elastic-sip');
    })

    it('Click on the "Pricing --> SMS API Pricing" menu item', ()=>{
      footer.clickSMSAPIPricingMenuItem();
      cy.url().should('include', '/pricing/messaging');

    })

    it('Click on the "Pricing --> Voice API Pricing" menu item', ()=>{
      footer.clickVoiceAPIPricingMenuItem();
      cy.url().should('include', '/pricing/call-control');
    })

    it('Click on the "Pricing --> Wireless Pricing" menu item', ()=>{
      footer.clickWirelessPricingMenuItem();
      cy.url().should('include', '/pricing/iot-data-plans');
    })
  })

  context('Checking correct the "Company" menuitem in the Footer', () =>{

    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    }) 

    it('Click on the "Company --> About Us" menu item', ()=>{
      footer.clickAboutUsMenuItem();
      cy.url().should('include', '/company/about'); 
    })

    it('Click on the "Company --> Careers" menu item', ()=>{
      footer.clickCareersMenuItem();
      cy.url().should('include', '/company/careers');
    })

    it('Click on the "Company --> Data & Privacy " menu item', ()=>{
      footer.clickDataPrivacyMenuItem();
      cy.url().should('include', '/company/data-privacy');
    })

    it('Click on the "Company --> Support Center" menu item', ()=>{
      footer.shouldSupportCenterMenuItem();     
    })

    it('Click on the "Company --> Report Abuse" menu item', ()=>{
      footer.clickReportAbuseMenuItem();
      cy.url().should('include', '/report-abuse');
    })

    it('Click on the "Company --> Privacy Policy" menu item', ()=>{
      footer.clickPrivacyPolicyMenuItem();
      cy.url().should('include', '/privacy-policy');
    })

    it('Click on the "Company --> Cookie Policy" menu item', ()=>{
      footer.clickCookiePolicyMenuItem();
      cy.url().should('include', '/cookie-policy');
    })

    it('Click on the "Company --> Acceptable Use Policy" menu item', ()=>{
      footer.clickAcceptableUsePolicyMenuItem();
      cy.url().should('include', '/acceptable-use-policy');
    })

    it('Click on the "Company --> Website Terms and Conditions" menu item', ()=>{
      footer.clickWebsiteTermsAndConditionsMenuItem();
      cy.url().should('include', '/terms-and-conditions');
    })

    it('Click on the "Company --> Law Enforcement Request" menu item', ()=>{
      footer.shouldLawEnforcementRequestMenuItem();      
    })
  })


  context('Checking correct the "Mission Control" menuitem in the Footer', () =>{

    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    }) 

    it('Click on the "Mission Control --> Sign up" menu item', ()=>{
      footer.clickSignUpMenuItem();
      cy.url().should('include', '/sign-up');      
    })

    it('Click on the "Mission Control --> Log In" menu item	', ()=>{
      footer.shouldLogInMenuItem(); 
    })   
  })

  context('Checking correct the "Social" menuitem in the Footer', () =>{

    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    }) 

    it('Click on the "Social --> Connect on LinkedIn " menu item', ()=>{
      footer.shouldConnectOnLinkedInMenuItem();       
    })

    it('Click on the "Social --> Follow on Twitter" menu item', ()=>{
      footer.shouldFollowOnTwitterMenuItem();
    })

    it('Click on the "Social --> Follow on Facebook" menu item', ()=>{
      footer.shouldFollowOnFacebookMenuItem();
    })  
  })
})
