import { AngularServiceProjectPage } from './app.po';

describe('angular-service-project App', () => {
  let page: AngularServiceProjectPage;

  beforeEach(() => {
    page = new AngularServiceProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
