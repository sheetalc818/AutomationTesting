
/**************************************************************************************

 @Purpose : Page Object file used as a supplimentory information that contains 
            functions that are required for Spec.ts file

 @Author  : Sheetal Chaudhari

 @version : protractor 5.4.0 

 @Date    : 04/01/2019

***************************************************************************************/



import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('http://13.66.196.225:4000/login');
  }

  // getTitleText() {
  //   return element(by.css('app-root h1')).getText();
  // }

  // getUsername(){
  //   return element(by.xpath('//*[@id="root"]/div/div/div/div[2]/form/div/span/div[1]/div/input')).sendKeys('sudhakar.naidu@bridgelabz.com');
  // }
  // getPassword(){
  //   return element(by.name('password')).sendKeys('qwerty');
  // }

  getUsername(){
    return element(by.name('email')).sendKeys('sudhakar.naidu@bridgelabz.com');
  }

  getPassword(){
    return element(by.name('password')).sendKeys('qwerty');
  }

  clickLogin(){
    return element(by.buttonText('Login')).click();
  }

  orderId(){
    return element(by.xpath("//*[contains(text(),'INJ')]")).click();
  }

  clickEditOrder(){
    return element(by.buttonText('Edit Order')).click();
  }

  editDate(){
    return element(by.className("edit-order-input")).click();
  }

  clickDate(){
    return element(by.buttonText('9')).click();
  }

  clickOk(){
    return element(by.buttonText('OK')).click();
  }

  clickSave(){
    return element(by.buttonText('Save')).click();
  }

  clickOnYes(){
    return element(by.buttonText('Yes')).click();
  }

  clickConfirm(){
    return element(by.buttonText('Confirm Order')).click();
  }

  clickYes(){
    return element(by.buttonText('Yes')).click();
  }

  // clickConfirmBtn(){
  //   return element(by.buttonText('Confirmed')).click();
  // }
  
  confirmOrderId(){
    return element(by.xpath("//*[contains(text(),'INJ')]")).click();
  }
  
  clickOnVehicleNo(){
    return element(by.xpath("/html/body/div[2]/div[2]/div/div/div[2]/div[5]/div[2]/form/div[1]/div/input")).sendKeys('MH 01 ABC	');
  }

  clickOnContainerNo(){
    return element(by.xpath('/html/body/div[2]/div[2]/div/div/div[2]/div[5]/div[2]/form/div[2]/div/input')).sendKeys('qwerty');
  }
   
  clickOnDriverNo(){
    return element(by.xpath('/html/body/div[2]/div[2]/div/div/div[2]/div[5]/div[2]/form/div[3]/div/input')).sendKeys('7008533651');
  }

  clickOnAllotVehicle(){
    return element(by.buttonText('ALLOT VEHICLE')).click();
  }
}
