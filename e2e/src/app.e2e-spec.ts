
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
    browser.sleep(2000);
  })
  
  it('should display password',()=>{ 
    expect(page.getPassword());
    browser.sleep(2000);
  })

  it('should click on Login button and should navigate to Inlogistics Homepage',()=>{
    expect(page.clickLogin());
    browser.sleep(2000);
  })
  
  it('should click on first order present in the table',()=>{
   // expect(page.tickCheckbox());
    expect(page.orderId());
    browser.sleep(2000);
  })

  it('should click on "Edit Order" button and update order',()=>{
    expect(page.clickEditOrder());
    browser.sleep(2000);
    expect(page.editDate());
    browser.sleep(2000);
    expect(page.clickDate());
    browser.sleep(2000);
    expect(page.clickOk());
    browser.sleep(2000);
    expect(page.clickSave());
    browser.sleep(2000);
    expect(page.clickOnYes());
    browser.sleep(2000);
  })

  it('should click on Confirm button in order page',()=>{
    browser.sleep(2000);
    expect(page.clickConfirm());
    browser.sleep(2000);
    // expect(page.clickYes());
    // browser.sleep(2000);
  })
  
  it('should confirm the order by cliking on "Yes"',()=>{
    browser.sleep(2000);
    expect(page.clickYes());
    browser.sleep(2000);
   })

  //  it('should click on Confirm button',()=>{
  //    expect(page.clickConfirmBtn());
  //    browser.sleep(2000);
  //  })

   it('should click on confirm order id in Confirmed page',()=>{
    expect(page.confirmOrderId());
    browser.sleep(2000);
   })

   it('should click on confirm order and allocate the Vehicle',()=>{
      expect(page.clickOnContainerNo());
      browser.sleep(2000);
  });
  //    expect(page.clickOnDriverNo());
  //    browser.sleep(2000);
  //    expect(page.clickOnAllotVehicle());
  //    browser.sleep(2000);
  //  })
});
