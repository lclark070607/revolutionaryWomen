import { RevolutionaryWomenPage } from './app.po';

describe('revolutionary-women App', () => {
  let page: RevolutionaryWomenPage;

  beforeEach(() => {
    page = new RevolutionaryWomenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
