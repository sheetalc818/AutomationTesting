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
 
  // tickCheckbox(){
  //   return element(by.name('5c74e69f70918d3f9a81acda')).click();
  // }

  clickConfirm(){
    return element(by.buttonText('Confirm Order')).click();
  }

  clickYes(){
    return element(by.buttonText('Yes')).click();
  }

  orderId(){
    return element(by.xpath("//*[contains(text(), 'INJ')]")).click();
  }

  clickConfirmButton(){
    return element(by.buttonText('Confirmed')).click();
  }
  
}
