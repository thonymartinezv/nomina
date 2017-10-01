import { browser, by, element } from 'protractor';

export class NominaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-root h1')).getText();
  }
}
