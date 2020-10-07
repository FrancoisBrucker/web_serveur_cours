/**
 * @jest-environment jest-environment-webdriver
 */

var fs = require('fs');

const url = "file://" + __dirname +'/../../static/index.html'



describe('Le site focntionne renders', () => {
  test('it renders', async () => {
    await browser.get(url)
    const title = await browser.getTitle()
    expect(title).toContain('Numérologie')
  })
})
