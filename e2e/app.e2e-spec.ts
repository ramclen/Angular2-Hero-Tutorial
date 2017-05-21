import { Angular2HeroTutorialPage } from './app.po';

describe('angular2-hero-tutorial App', () => {
  let page: Angular2HeroTutorialPage;

  beforeEach(() => {
    page = new Angular2HeroTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
