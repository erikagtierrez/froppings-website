import { FroppingsPage } from './app.po';

describe('froppings App', function() {
  let page: FroppingsPage;

  beforeEach(() => {
    page = new FroppingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
