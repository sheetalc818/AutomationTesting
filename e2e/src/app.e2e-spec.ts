
/**************************************************************************************

 @Purpose : Specification file used by protractor to run the Testscipts using Angular 6
            and uses Jasmine as a test framework

 @Author  : Sheetal Chaudhari

 @version : protractor 5.4.0 

 @Date    : 04/02/2019

***************************************************************************************/

 import { AppPage } from './app.po';
import { browser } from 'protractor';

 describe('workspace-project App', () => {
  let page: AppPage;
  var originalTimeout;
  

  beforeEach(() => {
    page = new AppPage();
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
    browser.ignoreSynchronization = true;
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  browser.driver.manage().window().maximize();

  it('should display the username',()=>{
    page.navigateTo();
    expect(page.getUsername());
    browser.sleep(1000);
  })
  
  it('should display password',()=>{ 
    expect(page.getPassword());
    browser.sleep(1000);
  })

  it('should click on Login button and should navigate to Inlogistics Homepage',()=>{
    expect(page.clickLogin());
    browser.sleep(2000);
  })
  
  it('should click on first order present in the table',()=>{
   // expect(page.tickCheckbox());
    expect(page.orderId());
    browser.sleep(1000);
  })

  it('should click on Confirm button',()=>{
    expect(page.clickConfirm());
    browser.sleep(1000);
  })
  
  it('should confirm the order by cliking on "Yes"',()=>{
       expect(page.clickYes());
      browser.sleep(500);
   })

   it('should click on Confirm button',()=>{
     expect(page.clickConfirmButton());
     browser.sleep(1000);
   })
});
