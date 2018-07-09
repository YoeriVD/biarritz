import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  get description() { return element(by.id('description')); }
  get amount() { return element(by.id('amount')); }
  get date() { return element(by.id('date')); }
  get submit() { return element(by.css('button[type="submit"]')); }

  get expenses() { return element.all(by.css('tbody tr')); }
}
