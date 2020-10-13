var fs = require('fs');


const webdriver = require('selenium-webdriver');

describe('Le site focntionne renders', () => {

    const url = "file://" + __dirname +'/../../static/index.html'

    beforeEach(() => {
        require('geckodriver');
        browser =  new webdriver.Builder().forBrowser('firefox').build()
    })

    test('it renders', async () => {
      await browser.get(url)
      const title = await browser.getTitle()
      expect(title).toContain('Numérologie')
    }, 10000)

    afterEach(async () => {
        await browser.quit()
    })

})
