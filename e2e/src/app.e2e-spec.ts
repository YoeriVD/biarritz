import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display 3 items', () => {
    page.navigateTo();
    expect(page.expenses.count()).toEqual(3);
  });
  
  it('should disable the submit button', () => {
    page.navigateTo();
    expect(page.submit.isEnabled()).toBeFalsy();
  });
  it('should be able to add an expense', () => {
    page.navigateTo();
    page.amount.sendKeys(15.55);
    page.description.sendKeys('my desc');
    page.date.sendKeys('01/01/2018')
    page.submit.click();

    expect(page.expenses.count()).toBe(4);
  });
});
