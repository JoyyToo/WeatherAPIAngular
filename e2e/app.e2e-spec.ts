import { WeatherAPIPage } from './app.po';

describe('weather-api App', () => {
  let page: WeatherAPIPage;

  beforeEach(() => {
    page = new WeatherAPIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
