import { AngusPage } from './app.po';

describe('angus App', () => {
  let page: AngusPage;

  beforeEach(() => {
    page = new AngusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
