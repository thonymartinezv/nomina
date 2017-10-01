import { NominaPage } from './app.po';

describe('nomina App', () => {
  let page: NominaPage;

  beforeEach(() => {
    page = new NominaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ng!!');
  });
});
